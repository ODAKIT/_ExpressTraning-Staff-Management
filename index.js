const express = require("express");
const app = express();
const port = 9080;

//set body parse
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-

var cookieParser = require('cookie-parser');
app.use(cookieParser());



app.set('view engine', 'ejs')
app.set('views', './views')

//using static file
app.use(express.static('Public'))


var signInRoute = require("./Routes/signin.route");
var staffRoute = require("./Routes/staff.route");
var Authencation = require("./Validation/requireAuth.validation");
//route singin
app.use("/", signInRoute);
app.use("/staffs",Authencation.requireAuth,staffRoute);

app.listen(port,{});