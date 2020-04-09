var db = require("../dbSetup");
var staffDB = db.staffDB;
module.exports.showListStaff = (req,res)=>{
    res.render("staff/listStaff.ejs",
    {listStaff : staffDB.get("listStaff").value()});
}


module.exports.change = (req,res)=>{
    var staffID = req.params.id;
    var staff = staffDB.get("listStaff").find({id :staffID}).value();
    res.render("staff/change",{staff : staff});
}


module.exports.post_change = (req,res)=>{
    var staff = staffDB.get("listStaff").find({id :req.params.id}).value();
    staff.name = req.body.name;
    staff.age = req.body.age;
    staff.work = req.body.work;
    res.redirect("/staffs");
}