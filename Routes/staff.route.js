const epxress = require("express");

const router = epxress.Router();

var multer  = require('multer')

var upload = multer({ dest: 'Public/upload' })

const controller = require("../Controller/staff.controller");
const validation = require("../Validation/newUser.validation");

//show list
router.get("/",controller.showListStaff);

//new staff and validation
router.post("/",
upload.array('avatar'),
validation.post_newStaff_validation,
controller.post_newStaff
);

//search staff by
router.get("/search",controller.search);

router.get("/:id",controller.change);

router.post("/:id",upload.single('avatar') , controller.post_change);

router.post("/delete/:id" , controller.post_delete);



module.exports = router;