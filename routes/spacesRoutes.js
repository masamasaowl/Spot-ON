let express = require ("express");
const router = express.Router();
// require wrapAsync
const wrapAsync = require("../utils/wrapAsync.js");
// controller
const spacesRoutesController = require("../controllers/spaces.js")



// ====================== Show route ======================
router.get("/spaces/show/:id",wrapAsync(spacesRoutesController.showSpaces)) ;


module.exports = router;