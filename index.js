// ================ BASIC SETUP =================

let express = require ("express");
const app = express();
// Routes
const homeRoutes = require("./routes/homeRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const spacesRoutes = require("./routes/spacesRoutes.js")

const methodOverride = require ("method-override");
const path = require("path");
const mongoose = require('mongoose');
require('dotenv').config();
app.locals.googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

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


// ================= Routes ==================
// Home page Routes
app.use("/", homeRoutes);

// User Routes
app.use("/", userRoutes);

// Spaces Routes
app.use("/", spacesRoutes);






