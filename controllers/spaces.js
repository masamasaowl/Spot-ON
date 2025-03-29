// models
const Space = require("../models/spaces.js");


module.exports.showSpaces = async(req,res) => {
    let {id} = req.params;
  
    let space = await Space.findById(id);
  
    res.render("show.ejs", {space});
};

module.exports.bookSpaces = async(req,res) =>{
 
    res.render("bookSpace.ejs")
};