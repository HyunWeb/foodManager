const express = require("express");
const router = express.Router();
const controller = require("../controllers/Cmain");
const postController = require("../controllers/Cposting");

// router
router.get("/", postController.getPosting);

// posting 등록
router.post("/post", postController.postPosting);

// posting 수정
router.post("/edit/:postingID", postController.editPosting);

// posting 삭제
router.delete("/delete/:postingID", postController.deletePosting);

// posting 상세 화면
router.post("/detail/:postingID", postController.detailPosting);

router.post("/detail/:postingID/comment", postController.postComment);

router.post("/detail/:postingID/like", postController.postLike);

module.exports = router;