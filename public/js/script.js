console.log("path is working");

// ================= Home =================

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

            
            // style the list
            // the location dot icon
            const i = document.createElement("i");
    
            i.innerHTML = "<i></i>";
            i.classList.add("fa-solid", "fa-location-dot");
            // add it to the list
            li.prepend(i);
            
            // styling for the suggestions
            li.classList.add("poppins-regular","suggestionStyle");
    
    
            
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
            listOfSpaces[0].classList.add('hidden');
        }
    });



    // ========================================

    // functionality for styling
    let searchIcon = document.querySelector(".searchIcon");
    let searchPanel = document.querySelector("#searchPanel");
    let where = document.querySelector(".where");

    // addition of search text with the searchIcon
    searchbar.addEventListener("click", async() => {

        // for search text
        let nbsp = document.querySelector(".nbsp");
        nbsp.classList.remove("hidden");
        searchIcon.append("Search");
        searchIcon.classList.remove("searchIcon");
        searchIcon.classList.add("searchIconContainer");

        
        // now an additional margin appears so to remove it 
        let whereLayer = document.querySelector(".whereLayer");
        whereLayer.style.margin = "0";

        // add the styling of searchPanel
        searchPanel.classList.add("searchResults");

        // add default list when bar is clicked 
        let defaultSuggestions = await fetchSpaces();
    
        // using map we store all the names in a variable 
        const names = defaultSuggestions.map(space => space.name);
        console.log(names);

        // call showSuggestions function
        showSuggestions(names);

    });

    // a function to showcase the default suggestions
    function showSuggestions (suggestions){
        // searchPanel.innerText = '';
        
        suggestions.forEach((suggestion) => {
    
            // create a list item
            const li = document.createElement("li");
            // store the suggestion
            li.innerText = suggestion;

            // the heading of the searches
            let heading = document.querySelector("#suggestions");
            heading.classList.remove("hidden");

            // the location dot icon
            const i = document.createElement("i");

            i.innerHTML = "<i></i>";
            i.classList.add("fa-solid", "fa-location-dot");
            // add it to the list
            li.prepend(i);
            
            // styling for the suggestions
            li.classList.add("poppins-regular","suggestionStyle");

            // add the suggestions to the list
            listOfSpaces[0].appendChild(li);

        });
    }

    // if clicked outside the searchText disappear
    // document.addEventListener('click', (e) => {
    //     if (!searchIcon.contains(e.target)){
            
    //         searchIcon.classList.add("searchIcon");
    //         searchIcon.classList.remove("searchIconContainer");
    //         searchIcon.innerText = '';
            
    //     }
    // });
    where.addEventListener("click", () => {
        let searchArea = document.querySelector(".searchArea");

        
        where.style.backgroundColor = "rgb(247, 247, 247)";
        where.style.boxShadow = "1px 1px 6px rgba(0, 0, 0, 0.2)";
        searchArea.style.backgroundColor = "rgba(209, 206, 206, 0.71)";
        searchIcon.style.backgroundColor = "rgb(243, 197, 10)";

    });

});



