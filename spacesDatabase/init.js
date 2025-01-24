const mongoose = require("mongoose");
const initData = require("./allData.js");
const Space = require("../models/spaces.js");

async function main() {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/spotOn", {

        // the below configuration improves the db structure and compatibility
        useNewUrlParser: true,
      });

      console.log("connection successful");
  
    // await initialization of database
      await initDB();

    } catch (err) {
      console.error("Error connecting to the database:", err);

    // close the connection
    } finally {
      mongoose.connection.close(); 
    }
};


// the initDB function
const initDB = async() => {
    // delete any previously stored data
    await Space.deleteMany({});

    // insert the data
    // initData is the imported object and .data is the key of it containing all the sampleSpaces 
    await Space.insertMany(initData.data);
    console.log("data was added");
};
  

// call the main function
main();



