const epxress = require("express");

const router = epxress.Router();

var controller = require("../Controller/product.controller")

router.get("",controller.showProduct);

router.get("/cart/:productID",controller.addToCart)

module.exports = router;