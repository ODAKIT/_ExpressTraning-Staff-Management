var db = require("../dbSetup");

module.exports.signIn = (req,res)=>{
    // res.render("/singin.ejs",{allAccount : account});
    res.render("signin/signin.ejs",{});
}

module.exports.login = (req,res)=>{
   var listAdmin = db.get("admin").value();
   var accept = false;
   listAdmin.forEach(element => {
       if(element.acc===req.body.Acc)
            if(element.pass === req.body.Pass)
                accept = true;

   });

  if(accept)
   res.render("staffs/myStaff");
   else
   res.redirect("/");
}