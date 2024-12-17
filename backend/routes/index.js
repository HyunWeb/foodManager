const express = require("express");
const router = express.Router();
const controller = require("../controllers/Cmain");

router.get("/api/items", controller.fetchDataAndSave);

module.exports = router;
