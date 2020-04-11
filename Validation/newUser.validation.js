var db = require("../dbSetup");
var staffDB = db.staffDB;

module.exports.post_newStaff_validation = (req,res , next)=>{
    var allError = []; //list error to alert
    var canSubmit = true;
    if (!req.body.name) {
        allError.push("Name is required");
        canSubmit = false;
    }
    if (!req.body.age) {
        allError.push("Age is required");
        canSubmit = false;
    }
    if (!req.body.work) {
        allError.push("Work is required");
        canSubmit = false;
    }

    if(!canSubmit){
        res.render("staff/listStaff.ejs",
        { listStaff: staffDB.get("listStaff").value(),
          listError : allError
        });
        return;
    }

    //next de goi toi middleware phia sau(sau khi da kiem tra xong)
    next();
}