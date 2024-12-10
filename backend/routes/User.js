const express = require("express");
const router = express.Router();
const controller = require("../controllers/Cmain");
const userController = require("../controllers/Cuser");


// 회원가입
router.post("/signup", userController.postUser);

// 로그인
router.post("/signin", userController.userLogin);

// 회원정보 수정
router.post("/editProfile", userController.editUser);

module.exports = router;