const epxress = require("express");

const router = epxress.Router();

var controller = require("../Controller/product.controller")

router.get("",controller.showProduct);

module.exports = router;