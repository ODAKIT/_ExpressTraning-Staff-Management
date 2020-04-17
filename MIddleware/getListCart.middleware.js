var productDB = require("../dbSetup").productDB;



module.exports.getCurListCard = (req, res , next) => {
    var dbSession = productDB.get("session");
    var sessionID = req.signedCookies.sessionID;
    if (!sessionID) {
        res.redirect("/product");
        return;
    }

    var myCart = dbSession.find({ id: sessionID }).get("cart").value();
    var listCart = [];
    for (let key in myCart) {
        var product = (productDB.get("listProduct").find({ id: key }).value());
        var countitem = dbSession.find({ id: sessionID }).get("cart." + key).value();
        var cart = {};
        cart["product"] = product;
        cart["item"] = countitem;

        listCart.push(cart);
    }


    res.locals.mylistCart = listCart;

    next();
}