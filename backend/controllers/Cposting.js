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
  Grocery,
} = require("../models/index");

exports.getPosting = async (req, res) => {
  try {
    const posting = await Posting.findAll({
      attributes: ["postingID", "title", "userId", "img"],
    });
    console.log(posting);
    res.json({ result: true, message: "데이터가 존재합니다.", posting });
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};

exports.postPosting = async (req, res) => {
  try {
    if (req.session.userInfo) {
      const { title, content } = req.body;
      console.log(req.files);
      await Posting.create({
        title: title,
        userID: req.session.userInfo.userid,
        content: content,
        img: req.files[0].path,
      });
      res.json({ result: true, message: "정상적으로 post가 성공했습니다." });
    } else {
      res.json({
        result: false,
        error: "1",
        message: "로그인X, 포스트 정보 등록 불가!",
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      result: false,
      error: "2",
      message: "시스템에 에러가 발생했습니다.",
    });
  }
};

exports.editPosting = async (req, res) => {
  try {
    console.log(req.params);
    const { postingID } = req.params;
    const posting = await Posting.findOne({
      where: { postingID: postingID },
    });

    const { userID } = posting;

    if (req.session.userInfo.userid === userID) {
      const { title, content } = req.body;
      await Posting.update(
        {
          title: title,
          content: content,
        },
        {
          where: { postingID: postingID },
        }
      );

      res.json({ result: true });
    } else {
      res.json({ result: false });
    }
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};

exports.deletePosting = async (req, res) => {
  try {
    console.log(req.params);
    const { postingID } = req.params;
    const posting = await Posting.findOne({
      where: { postingID: postingID },
    });

    const { userID } = posting;

    if (req.session.userInfo.userid === userID) {
      await Posting.destroy({
        where: { postingID: postingID },
      });

      res.json({ result: true });
    } else {
      res.json({ result: false });
    }
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};

exports.detailPosting = async (req, res) => {
  try {
    console.log(req.params);
    const { postingID } = req.params;

    const posting = await Posting.findOne({
      where: { postingID: postingID },
    });

    const comment = await PostComment.findAll({
      where: { postingID: postingID },
    });

    const like = await PostLike.findAll({
      where: { postingID: postingID },
    });
    res.json({ result: true, posting, comment, like });
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};

exports.postComment = async (req, res) => {
  try {
    const { content } = req.body;
    const { postingID } = req.params;

    if (req.session.userInfo) {
      const userID = req.session.userInfo.userid;
      console.log(req.session.userInfo.userid, req.params);
      await PostComment.create({
        userID: userID,
        postingID: postingID,
        content: content,
      });
      res.json({ result: true });
    } else {
      res.json({
        result: false,
        message: "로그인 후에 댓글을 달 수 있습니다.",
      });
    }
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};

// comment 수정
exports.editComment = async (req, res) => {
  try {
    const userID = req.session.userInfo.userid;
    const { commentID } = req.params;

    if (req.session.userInfo) {
      const { title, content } = req.body;
      await PostComment.update(
        {
          title: title,
          content: content,
        },
        {
          where: { commentID: commentID, userID: userID },
        }
      );
      res.json({ result: true, message: "댓글 수정 성공" });
    } else {
      res.json({ result: false, message: "사용자가 작성하지 않은 글입니다." });
    }
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};

// comment 삭제
exports.deleteComment = async (req, res) => {
  try {
    const userID = req.session.userInfo.userid;
    const { commentID } = req.params;

    if (req.session.userInfo) {
      await PostComment.destroy({
        where: { commentID: commentID, userID: userID },
      });
      res.json({ result: true, message: "댓글 삭제 성공" });
    } else {
      res.json({ result: false, message: "사용자가 작성하지 않은 글입니다." });
    }
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};

exports.postLike = async (req, res) => {
  try {
    const userID = req.session.userInfo.userid;
    const { postingID } = req.params;

    const isLike = await PostLike.findOne({
      where: { userID: userID, postingID: postingID },
    });

    if (userID !== undefined) {
      if (!isLike) {
        await PostLike.create({
          userID: userID,
          postingID: postingID,
        });
        res.json({ result: true, message: "좋아요" });
      } else {
        await PostLike.destroy({
          where: { userID: userID, postingID: postingID },
        });
        res.json({ result: true, message: "좋아요 취소" });
      }
    } else {
      res.json({
        result: false,
        message: "로그인 후에 좋아요를 누를 수 있습니다.",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

// 좋아요 누른 항목
exports.userPostLike = async (req, res) => {
  try {
    // 게시물
    const postLikes = await PostLike.findAll({
      where: { userID: req.session.userInfo.userid },
    });

    const postingID = postLikes.map(
      (postLike) => postLike.dataValues.postingID
    );
    console.log(postingID);

    const posting = await Posting.findAll({
      where: { postingID: postingID },
    });

    res.json({ result: true, posting });
  } catch (error) {
    console.error(error);
    res.json({ result: false });
  }
};
