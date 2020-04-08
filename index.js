const express = require("express");
const app = express();
const port = 9080;


const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-

var db = require("./dbSetup");

app.set('view engine', 'ejs')
app.set('views', './views')

var signInRoute = require("./Routes/signin.route");

//route singin
app.use("/",signInRoute);

app.listen(port,{});