const express = require("express");
const app = express();

var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const mongoose = require("mongoose");


require('./server/config/mongoose.js');
require('./server/models/Quote.js');
require("./server/config/routes.js")(app);





  app.listen(8000, () => console.log("listening on port 8000"));







