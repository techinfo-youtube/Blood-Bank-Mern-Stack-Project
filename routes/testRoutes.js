const express = require("express");
const { testController } = require("../controllers/testController");

//router object
const router = express.Router();

//routes
router.get("/", testController);

//export
module.exports = router;
