const User = require("../models/user.js");

// =================== Signup route ==============
module.exports.renderSignupForm = (req,res) => {
    res.render("signupForm.ejs");
};

// =================== Login route ==============
module.exports.renderLoginForm = (req,res) => {
    res.render("loginForm.ejs");
};