const express = require("express");
const router = express.Router();
const controller = require("../controllers/Cmain");
const postController = require("../controllers/Cposting");

// router
router.get("/", postController.getPosting);

// posting 등록
router.post("/post", postController.postPosting);

// posting 수정
router.patch("/edit/:postingID", postController.editPosting);

// posting 삭제
router.delete("/delete/:postingID", postController.deletePosting);

// posting 상세 화면
router.get("/:postingID", postController.detailPosting);

// posting 댓글 등록
router.post("/:postingID/comment", postController.postComment);

// posting 댓글 수정
router.patch("/:postingID/:commentID/update", postController.editComment);

// posting 댓글 삭제
router.delete("/:postingID/:commentID/delete", postController.deleteComment);

// posting 좋아요 누르기
router.post("/:postingID/like", postController.postLike);

// 좋아요 누른 posting 확인
router.post("/like", postController.userPostLike);

module.exports = router;