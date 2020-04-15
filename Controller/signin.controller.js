var db = require("../dbSetup");
var adminDB = db.adminDB;
module.exports.signIn = (req,res)=>{
    // res.render("/singin.ejs",{allAccount : account});
    res.render("signin/signin.ejs",{});
}

module.exports.checkSignIn = (req,res,next)=>{
    var admin = adminDB.get("admin").find({id : req.cookies.userID}).value();

    if(!admin){
        next();
    }
    else{
        res.redirect("/staffs");
    }


}

module.exports.login = (req,res)=>{
//    var listAdmin = adminDB.get("admin").value();
   var accept = false;
   var admin = adminDB.get("admin").find({acc : req.body.Acc}).value();
   if(!admin){
    res.render("signin/signin",{
        error : 'User does not exist',
        values : req.body,
    })
    return;
   }

   if(admin.pass!==req.body.Pass){
    res.render("signin/signin",{
        error : 'Wrong password',
        values : req.body,
    })
    return;
   }
   res.locals.curAdmin = admin;
    res.cookie('userID',admin.id,{
        signed : true
    });
    res.redirect("/staffs");
}