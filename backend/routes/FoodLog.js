const express = require("express");
const router = express.Router();
const controller = require("../controllers/Cmain");
const logController = require("../controllers/CFoodLog");

// foodlog 등록
router.post("/post", logController.postLog);

// foodlog 수정
router.post("/edit/:when/:logID", logController.editLog);

// foodlog 삭제
router.delete("/delete/:when/:logID", logController.deleteLog);

module.exports = router;