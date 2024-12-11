const express = require("express");
const router = express.Router();
const controller = require("../controllers/Cmain");
const groController = require("../controllers/Cgrocery");

// foodlog 등록
router.post("/post", groController.postGrocery);

// foodlog 수정
router.post("/edit/:groceryID", groController.editGrocery);

// foodlog 삭제
router.delete("/delete/:groceryID", groController.deleteGrocery);

module.exports = router;