var db = require("../dbSetup");
var staffDB = db.staffDB;
var shortid = require('shortid');


module.exports.showListStaff = (req, res) => {
    res.render("staff/listStaff.ejs",
        { listStaff: staffDB.get("listStaff").value() });
}

module.exports.post_newStaff = (req, res) => {
    var myStaff = staffDB.get("listStaff");
        //check xem neu name chi la 1 string thi duy nhat 1 staff moi , con neu name la 1 object thi hon 2 staff them vao
        if (typeof req.body.name === 'string') {
            myStaff.push({
                id: shortid.generate(),
                name: req.body.name,
                age: req.body.age,
                work: req.body.work
            }).write();

        }
        else {
            for (let i = 0; i < req.body.name.length; i++) {
                myStaff.push({
                    id: shortid.generate(),
                    name: req.body.name[i],
                    age: req.body.age[i],
                    work: req.body.work[i]
                }).write();
            }
        }
        res.redirect("/staffs");

}


module.exports.search = (req,res)=>{
    var searchRequire = req.query.search;

    var staff = staffDB.get("listStaff").value();

    var newStaffList = staff.filter(function(staff){
        if(staff.name.toLowerCase().indexOf(searchRequire.toLowerCase())!== -1
        || staff.age.toLowerCase().indexOf(searchRequire.toLowerCase())!=-1
        || staff.work.toLowerCase().indexOf(searchRequire.toLowerCase())!=-1){
            return true;
        }
    })

    res.render("staff/listStaff.ejs",
    { listStaff: newStaffList});
}


module.exports.change = (req, res) => {
    var staffID = req.params.id;
    var staff = staffDB.get("listStaff").find({ id: staffID }).value();
    res.render("staff/change", { staff: staff });
}


module.exports.post_change = (req, res) => {
    var myDB = staffDB.get("listStaff");
    myDB.find({ id: req.params.id }).assign(
        {
            name: req.body.name,
            age: req.body.age,
            work: req.body.work,
        }).write();
    res.redirect("/staffs");
}


module.exports.post_delete = (req, res) => {
    var myDB = staffDB.get("listStaff");
    myDB.remove({ id: req.params.id })
        .write();

    res.redirect("/staffs");

}