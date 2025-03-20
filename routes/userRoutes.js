let express = require ("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const userController = require("../controllers/users.js")


// ===================== Route "/signup" =========================
router
    .route("/signup")
    // Signup route
    .get(userController.renderSignupForm);


// ===================== Route "/login" =========================    
router
    .route("/login")
    // Login route
    .get(userController.renderLoginForm)

    
// privacy policy
router.get("/privacy", (req,res) => {
    res.render("privacyPolicy");
})

module.exports = router;