var shortid = require('shortid');
var dbSession = require("../dbSetup").productDB.get("session");

module.exports = (req,res,next)=>{
    if(!req.signedCookies.sessionID){
        var sessID = shortid.generate();
        res.cookie('sessionID',sessID,{
            signed : true,
        })
            
        
        dbSession.push({
            id : sessID
        }).write();
    }

    next();
}