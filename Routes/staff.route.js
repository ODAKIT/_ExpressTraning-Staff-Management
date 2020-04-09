const epxress = require("express");

const router = epxress.Router();


const controller = require("../Controller/staff.controller");


router.get("/",controller.showListStaff);


router.get("/:id",controller.change);


router.post("/:id",controller.post_change)


module.exports = router;