const epxress = require("express");

const router = epxress.Router();


const controller = require("../Controller/staff.controller");


router.get("/",controller.showListStaff);
router.post("/",controller.post_newStaff);


router.get("/:id",controller.change);
router.post("/:id",controller.post_change);

router.post("/delete/:id",controller.post_delete);



module.exports = router;