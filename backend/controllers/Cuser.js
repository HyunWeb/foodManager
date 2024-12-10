const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../models");
const sequelize = require("sequelize");
const { bcryptPassword, compareFunc } = require("../utils/encrypt");

const {
    User,
    FoodLog,
    Recipe,
    Step,
    Ingredient,
    RecipeReview,
    RecipeLike,
    Posting,
    PostComment,
    PostLike,
    Grocery
  } = require("../models/index");
const { update } = require("sequelize/lib/model");

// 회원가입
exports.postUser = async (req, res) => {
    try {
        console.log(req.body);
        const {userid, name, pw, birthday, gender, email} = req.body;
        const isExist = await User.findAll({
            where: {userID: userid}
        });
        if(isExist.length === 0){
            const hash = bcryptPassword(pw);
            await User.create({
                userID: userid,
                name: name,
                pw: hash,
                birthday: birthday,
                gender: gender,
                email: email,
            });
            res.send("계정이 성공적으로 생성되었습니다.")
        } else {
            res.send("이미 존재하는 아이디입니다.")
        }
    } catch (error) {
        res.send("계정 생성에 실패하였습니다.");
        console.error(error);
        
    }
};

// 로그인 (세션)
exports.userLogin = async (req, res) => {
    try {
        const {userid, pw} = req.body;
        const isExist = await User.findOne({
            where: {userID: userid}
        });
        if(isExist){
            const hashPw = isExist.dataValues.pw;
            const isMatch = bcrypt.compareFunc(pw, hashPw);
            if(isMatch){
                res.session.userInfo = {
                    userid: isExist.dataValues.userid,
                };
                res.send({
                    result: true,
                    message: "로그인 성공",
                    userid: req.session.userInfo.userid,
                  });
            } else {
                res.send("비밀번호가 일치하지 않습니다.");
            }
        } else {
            res.send("아이디가 존재하지 않습니다.");
        }
    } catch (error) {
        
    }
}

// 회원정보 수정
exports.editUser = async (req, res) => {
    try {
        const {name, pw, birthday, gender, email} = req.body;
        
        // 필수 정보: 이름, 비번, 이메일
        if(name != null && pw != null && email != null){
            await User.update({
                name: name,
                pw: pw,
                birthday: birthday,
                gender: gender,
                email: email
            }, {where: {userID: req.session.userInfo.userID}});
            res.send("수정이 완료되었습니다.");
        } else {
            res.send("입력되지 않은 정보가 있습니다. 필수 항목을 입력해주세요.");
        }
    } catch (error) {
        
    }
}

// 회원탈퇴
