var db = require("../dbSetup");

var adminDB = db.adminDB;

module.exports.requireAuth = (req,res,next)=>{
    if(!req.signedCookies.userID){
        res.redirect("/");
        return;
    }
    //Truong hop cookie co the nhap bua de dang nhap thi ta phai check trong DB xem co ton tai cookies k
    var admin = adminDB.get("admin").find({id : req.signedCookies.userID}).value();

    console.log(req.cookies.userID);
    if(!admin){
        res.redirect("/");
        return;
    }

    res.locals.curAdmin = admin;

    next();
}