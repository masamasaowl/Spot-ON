// schema for all the login details of the users

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});


// automatically hash and salt the username and passwords
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);