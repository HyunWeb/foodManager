const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../models");
const sequelize = require("sequelize");
const { bcryptPassword, compareFunc } = require("../utils/encrypt");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const {
  User,
  Posting,
  PostLike,
  Recipe,
  RecipeLike,
} = require("../models/index");

// 하루 섭취 칼로리 계산
async function kcalCalculate(birthday, gender) {
  console.log(birthday);
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `성별은 ${gender}이고, 생일이 ${birthday}일 때, 나이와 성별을 기준으로 하루 권장 칼로리를 계산해줘. 숫자만 반환해줘`;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    const cleanedData = result.response
      .text()
      .replace(/[\n\r]/g, "") // 줄바꿈 제거
      .replace(/\\n/g, "") // \n 제거
      .replace(/\\'/g, "'") // \\' 제거 (필요시)
      .replace(/```json|```/g, "");

    return cleanedData;
  } catch (error) {
    if (error.status === 429) {
      console.warn("API 요청 제한: 잠시 후 재시도합니다.");
      await sleep(5000);
      return kcalCalculate(birthday, gender);
    } else {
      console.error("API 호출 중 오류 발생: ", error);
      return "오류 발생";
    }
  }
}

// 회원가입
exports.postUser = async (req, res) => {
  try {
    console.log(req.body);
    console.log("저장할 user 정보", req.session.userInfo);
    const { userid, name, pw, birthday, gender } = req.body;
    const isExist = await User.findAll({
      where: { userID: userid },
    });
    console.log(birthday);
    if (isExist.length === 0) {
      const kcalPerDay = await kcalCalculate(birthday, gender);
      const hash = bcryptPassword(pw);
      await User.create({
        userID: userid,
        name: name,
        pw: hash,
        birthday: birthday,
        gender: gender,
        kcalPerDay: kcalPerDay,
      });
      res.json({
        result: true,
        message: ["회원가입 성공", "계정이 성공적으로 생성되었습니다."],
      });
    } else {
      res.json({
        result: false,
        message: ["중복된 계정", "이미 존재하는 아이디입니다."],
      });
    }
  } catch (error) {
    res.json({
      result: false,
      message: ["회원가입 실패", "계정 생성에 실패하였습니다."],
    });
    console.error(error);
  }
};

// 로그인 (세션)
exports.userLogin = async (req, res) => {
  try {
    const { userid, pw } = req.body;
    console.log(req.session.userInfo);
    const isExist = await User.findOne({
      where: { userID: userid },
    });

    if (isExist) {
      const hashPw = isExist.dataValues.pw;
      const isMatch = compareFunc(pw, hashPw);

      if (isMatch) {
        req.session.userInfo = {
          userid: isExist.dataValues.userID,
          name: isExist.dataValues.name,
        };

        console.log(req.session.userInfo.userid);

        res.json({
          result: true,
          message: "로그인 성공",
          userid: req.session.userInfo.userid,
        });
      } else {
        res.json({ result: false, message: "비밀번호가 일치하지 않습니다." });
      }
    } else {
      res.json({ result: false, message: "아이디가 존재하지 않습니다." });
    }
  } catch (error) {
    console.error(error);
  }
};

// 로그아웃
exports.userLogout = async (req, res) => {
  try {
    // 'domain'을 제거하고 'path'만 설정
    // res.clearCookie("connect.sid", { path: "/", httpOnly: true });

    if (req.session) {
      req.session.destroy(() => {
        req.session;
      });
    } else {
      res.json({ result: true }); // 이미 세션이 없을 경우
    }
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};

// 회원정보 수정
exports.editUser = async (req, res) => {
  try {
    const { name, pw, birthday, gender } = req.body;

    // 필수 정보: 이름, 비번, 이메일
    if (name != null && pw != null) {
      await User.update(
        {
          name: name,
          pw: pw,
          birthday: birthday,
          gender: gender,
          email: email,
        },
        { where: { userID: req.session.userInfo.userid } }
      );
      res.json({ result: true, message: "수정이 완료되었습니다." });
    } else {
      res.json({
        result: false,
        message: "입력되지 않은 정보가 있습니다. 필수 항목을 입력해주세요.",
      });
    }
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};

// 비밀번호 찾기
// exports.findPW = async (req, res) => {

// }

// 회원탈퇴
exports.userDelete = async (req, res) => {
  try {
    await User.destroy({
      where: { userID: req.session.userInfo.userid },
    });
    res.json({ result: true });
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};

// 회원정보 가져오기
exports.userSearch = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { userID: req.session.userInfo.userid },
    });

    res.json({ result: user });
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};

// 로그인 상태 확인
exports.userCheck = async (req, res) => {
  try {
    if (req.session && req.session.userInfo) {
      res.json({ result: true });
    } else {
      res.json({ result: false });
    }
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};
