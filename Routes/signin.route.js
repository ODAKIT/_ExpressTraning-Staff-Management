const epxress = require("express");

const router = epxress.Router();

const controller = require("../Controller/signin.controller.js")

router.get("",controller.signIn);

router.post("/login",controller.login);

module.exports = router;