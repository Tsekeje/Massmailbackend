const express = require("express");
const router = express.Router();
const service = require("../modules/index");
const file = require("../multer/file");

router.post("/",file.upload.array("file"), service.getAllMail);



module.exports = router;
