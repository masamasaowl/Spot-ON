// ================ BASIC SETUP =================

let express = require ("express");
const app = express();
const methodOverride = require ("method-override");
const path = require("path");
const mongoose = require('mongoose');
require('dotenv').config();
app.locals.googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

// models
const Space = require("./models/spaces.js");

// ejs-mate
const ejsMate = require ("ejs-mate");


// mongoDB setup
async function main() {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/spotOn");

      console.log("connection successful");

    } catch (err) {
      console.error("Error connecting to the database:", err);
    };
};

// call the main func
main();


app.use(methodOverride("_method"));

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");

app.engine("ejs", ejsMate);

app.set("views", path.join(__dirname, "views/pages"));

app.set(express.static(path.join(__dirname, "public")));

app.use('/static', express.static('public'));

const port = 8080;

app.listen(port, () => {
    console.log("App is listening on port : 8080")
});

//  =============================================

// ================= Home page =================
app.get("/", async(req,res) => {
  // fetch only spaces at first to display on homepage
  let onlySpaces = await Space.find({type: {$in: ["mall", "workspace"]}});

  res.render("home", {onlySpaces, googleMapsApiKey: app.locals.googleMapsApiKey});
});

// this route is fetched by public/js/script.js used to showcase the available options 
app.get("/searchSpaces", async(req,res) => {
  let spaces = await Space.find();

  // send the spaces in the JSON format 
  res.json(spaces);
});

// ====================== Show route ======================
app.get("/spaces/show/:id", async(req,res) => {
  let {id} = req.params;

  let space = await Space.findById(id);

  res.render("show.ejs", {space});
});


// ================ Route to fetch data based on category ========
app.get("/getData", async(req,res) => {
  try {
    // the type parameter in the query is returned
    let typeOfLocation = req.query.type;

    // ensure that typeOfLocation is always an array
    if(typeof typeOfLocation === "string"){
      // then convert it into array
      typeOfLocation = [typeOfLocation];
    }
    
    // we call the places returned as a variable space in general
    let space = await Space.find({type: {$in: typeOfLocation}});
  
    // we return the response to the fetch() function as json
    res.json(space);
    // in categories.js it is stored in data
  
  } catch (error) {
    // check for errors
    res.status(500).json({ error: "Error fetching data" });
  }
});



// privacy policy
app.get("/privacy", (req,res) => {
  res.render("privacyPolicy")
})