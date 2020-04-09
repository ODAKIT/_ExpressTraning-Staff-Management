var db = require("../dbSetup");
var adminDB = db.adminDB;
module.exports.signIn = (req,res)=>{
    // res.render("/singin.ejs",{allAccount : account});
    res.render("signin/signin.ejs",{});
}

module.exports.login = (req,res)=>{
   var listAdmin = adminDB.get("admin").value();
   var accept = false;
   listAdmin.forEach(element => {
       if(element.acc===req.body.Acc)
            if(element.pass === req.body.Pass)
                accept = true;

   });

  if(accept)
   res.redirect("/staffs");
   else
   res.redirect("/");
}