// custom error class
const ExpressError = require("./utils/ExpressError.js");
// model
const Listing = require("./models/listing.js");
// Joi schema
const { listingSchema, reviewSchema } = require("./schema.js");

// Authentication
module.exports.isLoggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()){
        // store the previous page 
        req.session.redirectUrl = req.originalUrl;

        req.flash("info", "You must be logged in to perform the action");
        res.redirect("/login");
    }
    next();
};

// middleware to save previous page when passport resets req.session
module.exports.saveRedirectUrl = (req,res,next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

// Authorization
module.exports.isOwner = async(req,res,next) => {
    let {id} = req.params;
    
    let listing = await Listing.findById(id);
      
    if(!req.user._id.toString() === listing.owner[0]._id.toString()){
        req.flash("error", "You don't have permission to perform this operation");
        return res.redirect(`/listings/show/${id}`);
    }
    next();
};

// validate Listing by Joi
module.exports.validateListing = (req,res,next) => {
    let { error } = listingSchema.validate(req.body);
  
    if(error){
      // combining the properties and details from the error msg
      let errMsg = error.details.map((el) => el.message).join(", ");
  
      throw new ExpressError(400, errMsg);
    }else{
      next();
    }
};

// server side validation for reviews
module.exports.validateReviews = (req,res,next) => {
    let { error } = reviewSchema.validate(req.body);
  
    if(error){
      let errMsg = error.details.map((el) => el.message).join(", ");
      throw new ExpressError(400, errMsg);
    }else{
      next();
    }
};
