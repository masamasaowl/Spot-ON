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



// next is how the dropdown options would work
const renderDropdown = (options) => {
    // clear any previously existing items in the ul
    listOfSpaces.innerHTML = " ";
    console.log(listOfSpaces)
    
    
    // prevent showing an existing dropdown just in case
    // if(options){
    //     listOfSpaces.classlist.add("hidden");
    //     return;
    // }

    // now the actual working 
    // loop through the options
    listOfSpaces.forEach((option) => {

        // create a list item
        const li = document.createElement("li");

        li.textContent = option.name; 
            li.addEventListener('click', () => {
                searchBar.value = option.name; 
                listOfSpaces.classList.add('hidden');
            });
            listOfSpaces.appendChild(li);
    })

    
};


// now we apply the two functions when the searchbar is clicked 
searchbar.addEventListener("input", async() => {
    // retrieve the case insensitive value of spaces
    const query = searchbar.value.trim().toLowerCase();

    // fetch the values
    const spaces = await fetchSpaces();

    // collecting the names from the array using map
    const spaceNames = spaces.map(obj => obj.name);


    // now filter the response then in an arrow function we take the case insensitive name 
    // .include() compares the space.name with the query being type on the searchbar 
    const filteredSpaces = spaces.filter((space) =>
        space.name.toLowerCase().includes(query)
    );

    // call to render the dropdown
    renderDropdown(filteredSpaces);

    console.log("button was clicked ");

});
