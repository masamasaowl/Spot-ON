// ================ BASIC SETUP =================
if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
}

let express = require ("express");
const app = express();
// method-override
const methodOverride = require ("method-override");
const path = require("path");

// error class
const ExpressError = require("./utils/ExpressError.js");

// Routes
const homeRoutes = require("./routes/homeRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const spacesRoutes = require("./routes/spacesRoutes.js")

// ejs-mate
const ejsMate = require ("ejs-mate");

// mongoose
const mongoose = require('mongoose');

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


// ================== Undefined Route ===================
app.all("*", (req, res) => {
  throw new ExpressError(404,'Page not found');
});


// ================ Error handling middlewares ================
app.use((err,req,res,next)=>{
  // give default values to status and message
  let {statusCode = 500, message = "An Unknown error seems to have been occurred", name} = err;
  
  console.log(err.stack);
  res.status(statusCode).render("error.ejs", {statusCode, message, name})
});





