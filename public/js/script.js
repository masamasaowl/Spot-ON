console.log("path is working");

// =============== Home.ejs ==============

document.addEventListener('DOMContentLoaded', () => {

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
        listOfSpaces[0].innerHTML = " ";

        if (options.length === 0) {
            listOfSpaces[0].classList.add('hidden'); // Hide the dropdown if no options
            return;
        }
    
        console.log(options);
         
        // loop through the options
        options.forEach((option) => {
    
            // create a list item
            const li = document.createElement("li");
    
            li.innerText = option.name; 
    
            // if an option is selected
                li.addEventListener('click', () => {
                    searchbar.value = option.name; 
                    listOfSpaces[0].classList.add('hidden');
                });
                listOfSpaces[0].appendChild(li);
        })
    };
    
    
    // now we apply the two functions when the searchbar is clicked 
    searchbar.addEventListener("input", async() => {

        // when data is reinducted then the options reappear
        listOfSpaces[0].classList.remove('hidden');

        // retrieve the case insensitive value of spaces
        const query = searchbar.value.trim().toLowerCase();
    
        // fetch the values
        const spaces = await fetchSpaces();
    
        // now filter the response then in an arrow function we take the case insensitive name 
        // .include() compares the space.name with the query being type on the searchbar 
        const filteredSpaces = spaces.filter((space) =>
            space.name.toLowerCase().includes(query)
        );
    
        console.log("input received ");
    
        // call to render the dropdown
        renderDropdown(filteredSpaces);
    });
    
    
    // if clicked outside the options disappear
    document.addEventListener('click', (e) => {
        if (!document.getElementById('search-container').contains(e.target)) {
            dropdown.classList.add('hidden');
        }
      });
});

// ==========================================