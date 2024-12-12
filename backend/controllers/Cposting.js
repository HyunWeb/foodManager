const { Op } = require("sequelize");
const db = require("../models");
const sequelize = require("sequelize");

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


exports.getPosting = async (req, res) => {
    try {
        const posting = await Posting.findAll();
        res.json(posting);
    } catch (error) {
        console.error(error);
        res.send({result: false});
    }
}

exports.postPosting = async (req, res) => {
    try {
        const { title, content } = req.body;
        await Posting.create({
            title: title,
            userID: req.session.userInfo.userid,
            content: content
        })
        res.send({result: true})
    } catch (error) {
        console.error(error);
        res.send({ result: false });
    };
}

exports.editPosting = async (req, res) => {
    try {
        console.log(req.params);
        const {postingID} = req.params;
        const posting = await Posting.findOne({
            where: {postingID: postingID}
        });

        const {userID} = posting;

        if(req.session.userInfo.userid === userID){
            const { title, content } = req.body;
            await Posting.update({
                title: title,
                content: content
            }, {
                where: {postingID: postingID}
            });

            res.send({result: true});
        } else {
            res.send({result: false});
        }
    } catch (error) {
        console.error(error);
        res.send({result: false});
    }
}

exports.deletePosting = async (req, res) => {
    try {
        console.log(req.params);
        const {postingID} = req.params;
        const posting = await Posting.findOne({
            where: {postingID: postingID}
        });

        const {userID} = posting;

        if(req.session.userInfo.userid === userID){
            await Posting.destroy({
                where: {postingID: postingID}
            });

            res.send({result: true});
        } else {
            res.send({result: false});
        }
    } catch (error) {
        console.error(error);
        res.send({result: false});
    }
}

exports.detailPosting = async (req, res) => {
    try {
        console.log(req.params);
        const {postingID} = req.params;

        const posting = await Posting.findOne({
            where: {postingID: postingID}
        });

        const comment = await PostComment.findAll({
            where: {postingID: postingID}
        });

        const like = await PostLike.findAll({
            where: {postingID: postingID}
        })
        res.json({result: true, posting, comment, like});
    } catch (error) {
        console.error(error);
        res.send({result: false});
    }
}


exports.postComment = async (req, res) => {
    try {
        const {content} = req.body;
        const userID = req.session.userInfo.userid;
        const {postingID} = req.params;

        console.log(req.session.userInfo.userid, req.params);


        if(userID !== undefined){
            await PostComment.create({
                userID: userID,
                postingID: postingID,
                content: content
            });
            res.json({result: true});
        } else {
            res.json({result: false, message: "로그인 후에 댓글을 달 수 있습니다."});
        }
    } catch (error) {
        console.error(error);
        res.json({result: false});
    }
}

exports.postLike = async (req, res) => {
    try {
        const userID = req.session.userInfo.userid;
        const {postingID} = req.params;

        const isLike = await PostLike.findOne({
            where: {userID: userID, postingID: postingID}
        });

        if(userID !== undefined){
            if(!isLike){
                await PostLike.create({
                    userID: userID,
                    postingID: postingID
                });
                res.json({result: true, message: "좋아요"});
            } else {
                await PostLike.destroy({
                    where: {userID: userID, postingID: postingID}
                });
                res.json({result: true, message: "좋아요 취소"});
            }
        } else {
            res.json({result: false, message: "로그인 후에 좋아요를 누를 수 있습니다."});
        }
    } catch (error) {
        console.error(error);
    }
}
