var db = require("../dbSetup");

var adminDB = db.adminDB;

module.exports.requireAuth = (req,res,next)=>{
    if(!req.cookies.userID){
        res.redirect("/");
        return;
    }
    //Truong hop cookie co the nhap bua de dang nhap thi ta phai check trong DB xem co ton tai cookies k
    var admin = adminDB.get("admin").find({id : req.cookies.userID}).value();

    if(!admin){
        res.redirect("/");
        return;
    }

    next();
}