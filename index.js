// ================ BASIC SETUP =================

let express = require ("express");
const app = express();
const port = 8080;
const methodOverride = require ("method-override");
const path = require("path");

// ejs-mate
const ejsMate = require ("ejs-mate");

const mongoose = require('mongoose');
// brew services start mongodb-community@8.0


// mongoDB setup
main()
    .then(() => {
    console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/spotOn');
};

// models
const Listing = require("./models/spaces.js")

app.use(methodOverride("_method"));

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");

app.engine("ejs", ejsMate);

app.set("views", path.join(__dirname, "views/pages"));

app.set(express.static(path.join(__dirname, "public")));

app.use('/static', express.static('public'));

app.listen(port, () => {
    console.log("App is listening on port : 8080")
});

//  =============================================
