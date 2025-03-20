let express = require ("express");
const router = express.Router();


// privacy policy
router.get("/privacy", (req,res) => {
    res.render("privacyPolicy");
})

module.exports = router;