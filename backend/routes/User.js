const express = require("express");
const router = express.Router();
const controller = require("../controllers/Cmain");
const userController = require("../controllers/Cuser");


// 회원가입
router.post("/signup", userController.postUser);

// 로그인
router.post("/signin", userController.userLogin);

// 로그아웃
router.post("/logout", userController.userLogout);

// 회원정보 수정
router.patch("/editProfile", userController.editUser);

// 비밀번호 찾기
// router.post("/findPW", userController.findPW);

// 회원 탈퇴
router.delete("/deleteUser", userController.userDelete);


module.exports = router;