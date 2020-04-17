var productDB = require("../dbSetup").productDB;

module.exports.showProduct = (req,res)=>{
    var page = parseInt(req.query.page);
    var countItem = 16;
    var numberOfPage = Math.ceil(productDB.get("listProduct").value().length/countItem);
    // ham slice khong tinh end nen khong can -1
    var end = req.query.page*countItem;
    var start = req.query.page*countItem - countItem;
    if(!page){
        start = 0;
        end = countItem;
        page = 1;
    }
    res.render("product/myproduct",{
        listProduct : productDB.get("listProduct").value().slice(start,end),
        page : page,
        maxPage : numberOfPage
    });
}


module.exports.addToCart = (req,res)=>{
    var dbSession = productDB.get("session");
    var sessionID = req.signedCookies.sessionID;
    var productID = req.params.productID;
    if(!sessionID){
        res.redirect("/product");
        return;
    }
    var count = dbSession
    .find({id : sessionID})
    .get("cart."+productID,0)
    .value();
    
    dbSession.find({id:sessionID}).set("cart."+productID,count+1).write();
    var myCart = dbSession.find({id:sessionID}).get("cart").value();
    var listCart = [];
    for(let key in myCart){
        var product = (productDB.get("listProduct").find({id : key}).value());
        var countitem = dbSession.find({id:sessionID}).get("cart."+key).value();
        var cart = {};
        cart["product"] = product;
        cart["item"] = countitem;

        listCart.push(cart);
    }
    
    res.redirect("/product");
}
