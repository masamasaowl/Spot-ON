console.log("path is working");

// ============ Home.ejs (searchbar)=========

let listOfSpaces = document.querySelectorAll(".listOfSpaces");
let searchbar = document.querySelector(".searchbar");

// function to fetch the spaces from the database send to route /searchSpaces
const fetchSpaces = async() => {
    try{
        const response = await fetch("/searchSpaces");
        
        // parse response into JSON
        return await response.json();

    } catch(err){
        console.log(err);
    };

};


// 
searchbar.addEventListener("click", () => {
    fetchSpaces();

    console.log("button was clicked ");

});