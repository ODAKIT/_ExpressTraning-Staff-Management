var productDB = require("../dbSetup").productDB;

module.exports.showProduct = (req,res)=>{
    var page = parseInt(req.query.page);
    var countItem = 16;
    var numberOfPage = Math.ceil(productDB.get("listProduct").value().length/countItem);
    // ham slice khong tinh end nen khong can -1
    var end = req.query.page*countItem;
    var start = req.query.page*countItem - countItem;
    res.render("product/myproduct",{
        listProduct : productDB.get("listProduct").value().slice(start,end),
        page : page,
        maxPage : numberOfPage
    });
}
