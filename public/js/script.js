console.log("path is working");

// ======================== Home =========================


// ===================== Track scroll of video ================
let lastScrollY = 0;
function updateVideoSize(){

    // as we scroll scrollY increases
    let scrollPosition = window.scrollY;
    let heroVideo = document.querySelector(".heroVideo");

    // trigger only when scrolled past 100px
    // Math.abs is for absolute value
    if(scrollPosition  > 160){
        let adjustedScroll = scrollPosition - 160;
        // using Math.min we subtract the width depending on scrollY
        // the math min function selects the smallest value 
        // eg: for 50px it returns 5 so (5,10), after 100px only 10 gets selected as it is the smallest one
        let newWidth = 100 - Math.min(adjustedScroll / 50, 12);
        let newBorderRadius = Math.min(adjustedScroll / 10, 30);

        heroVideo.style.width = newWidth + "%";
        heroVideo.style.borderRadius = newBorderRadius + "px";

        // we store the last scroll position
        lastScrollY = scrollPosition;
    } else{
        heroVideo.style.width = "100%"
    } 
    
    // better than window.addEventListener("scroll"); 
    // it runs only when the next frame is required improving performance 
    // it calls the function on loop for each change
    requestAnimationFrame(updateVideoSize);
}
// call the function
updateVideoSize();



document.addEventListener('DOMContentLoaded', () => {

    // =============== Fade In animation of elements =============
    let fadeInElements = document.querySelectorAll(".fadeIn");

    // function to perform the task
    function fadeInOnScroll(){
        fadeInElements.forEach((el) => {

            // a special function that detects position of an element wrt viewport
            let rect = el.getBoundingClientRect();
             
            // .top tells distance from top of element to top of viewport
            if (rect.top < window.innerHeight * 0.85) { 
                // trigger only when 85% visible
                el.classList.add("show");
            }
        })
    }

    // when we scroll on window the fadeIn function is triggered as an event 
    window.addEventListener("scroll", fadeInOnScroll);

    // to avoid errors the landing page is checked once for the event by simply calling the function
    fadeInOnScroll();

   // ===================================================



    let listOfSpaces = document.querySelectorAll(".listOfSpaces");
    let searchbar = document.querySelector(".searchbar");
    
    // ===========  function to fetch the spaces from the database send to route /searchSpaces =============
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
        // console.log(options);
         
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

    // ========================================================



    // ============ functionality for styling of suggestions =====
    let searchIcon = document.querySelector(".searchIcon");
    let searchPanel = document.querySelector("#searchPanel");
    let where = document.querySelector(".where");
    


    // addition of search text with the searchIcon
    searchbar.addEventListener("click", async() => {

        listOfSpaces[0].classList.remove("hidden");

        // for search text
        let nbsp = document.querySelector(".nbsp");
        nbsp.classList.remove("hidden");

        // the search text appears only once
        if(!searchIcon.innerText.includes("Search")){
            searchIcon.append("Search");
            searchIcon.classList.remove("searchIcon");
            searchIcon.classList.add("searchIconContainer");
        }
        
        // // now an additional margin appears so to remove it 
        // let whereLayer = document.querySelector(".whereLayer");
        // whereLayer.style.margin = "0";

        // add the styling of searchPanel
        searchPanel.classList.add("searchResults");

        // add default list when bar is clicked 
        let defaultSuggestions = await fetchSpaces();
    
        // using map we store all the names in a variable 
        const names = defaultSuggestions.map(space => space.name);
        // console.log(names);

        // store all the types too
        const type = defaultSuggestions.map(space => space.type);
        // console.log(type);
        
        const latitude = defaultSuggestions.map(space => space.location.coordinates[1]);
        const longitude = defaultSuggestions.map(space => space.location.coordinates[0]);
        

        // call showSuggestions function
        showSuggestions(names, type, latitude, longitude);
    });

    // a function to showcase the default suggestions
    function showSuggestions (suggestions, types, latitude, longitude){
        // searchPanel.innerText = '';
        
        suggestions.forEach((suggestion,index) => {
            // the heading of the searches
            let heading = document.querySelector("#suggestions");
            heading.classList.remove("hidden");
    
            // create a list item
            const li = document.createElement("li");

            // create a container to hold name and type together
            let suggestionContainer = document.createElement("div");
            suggestionContainer.classList.add("suggestionContainer");

            // two div one for name other for type
            const nameElement = document.createElement("div");
            nameElement.innerText = suggestion;
            nameElement.classList.add("locationName", "poppins-regular");

            const typeElement = document.createElement("div");
            typeElement.innerText = types[index];
            typeElement.classList.add("locationType","poppins-regular");

            // append both in suggestion container
            suggestionContainer.appendChild(nameElement);
            suggestionContainer.appendChild(typeElement);

            // the location dot icon
            const i = document.createElement("i");

            i.classList.add("fa-solid", "fa-location-dot");
            // add it to the list
            li.appendChild(i);
            li.appendChild(suggestionContainer);
            
            // styling for the suggestions
            li.classList.add("suggestionStyle");

            // if an option is selected
            li.addEventListener('click', () => {
                searchbar.value = suggestion; 
                listOfSpaces[0].classList.add('hidden');
                console.log(searchbar.value);

                // map container is visible
                let mapContainer = document.querySelector(".mapContainer");
                mapContainer.classList.remove("hidden");

                // calling Google Maps when option is clicked  
                let destinationLocation = {
                    latVal: latitude[index],
                    longVal: longitude[index]
                }
                console.log(destinationLocation);

                // initMap(destinationLocation.latVal,destinationLocation.longVal);

                optionClicked(searchbar.value);

                // the location bar appears
                let enterLocation = document.querySelector(".enterLocation");
                let locationArea = document.querySelector(".locationArea");
                enterLocation.classList.remove("hidden");
                locationArea.classList.remove("hidden");

            });
            
            // add the suggestions to the list
            listOfSpaces[0].appendChild(li);    
        });
    };

    // after an option is clicked
    function optionClicked(option){
        console.log(`${option} was clicked`);
    }
    

    // styling for Where to option
    let searchArea = document.querySelector(".searchArea");

    where.addEventListener("click", () => {
        // to make the other box visible
        if(fore.style.backgroundColor = "rgb(247, 247, 247)"){
            fore.style.backgroundColor = "rgba(215, 212, 213, 0)"
            fore.style.boxShadow = "none";
            listOfTimings.classList.add("hidden");
        }

        where.style.backgroundColor = "rgb(247, 247, 247)";
        where.style.boxShadow = "1px 1px 6px rgba(0, 0, 0, 0.2)";
        searchArea.style.backgroundColor = "rgba(215, 212, 213, 0.78)";
        searchIcon.style.backgroundColor = "rgb(243, 197, 10)";

    });

    // =====================================================


    // ============= functioning of for time period  =============

    let fore = document.querySelector(".fore");
    let timePeriod = document.querySelector(".timePeriod");
    let timePanel = document.querySelector("#timePanel");
    let listOfTimings = document.querySelector(".listOfTimings");
    let timings = document.querySelectorAll(".timings");
    
    timings.forEach((timing) => {
        timing.addEventListener('click', (e) => {
            let chosenValue = e.target.innerText;
            timePeriod.value = chosenValue; 
            listOfTimings.classList.add('hidden');
        });
    })
    
    timePeriod.addEventListener("click", async() => {
        // for search text
        let nbsp = document.querySelector(".nbsp");
        nbsp.classList.remove("hidden");

        // the search text appears only once
        if(!searchIcon.innerText.includes("Search")){
            searchIcon.append("Search");
            searchIcon.classList.remove("searchIcon");
            searchIcon.classList.add("searchIconContainer");
        }

        // add the styling of timePanel
        timePanel.classList.add("timeRange");

        listOfTimings.classList.remove("hidden");
    });

    fore.addEventListener("click", () => {
        // to make the other box visible
        if(where.style.backgroundColor = "rgb(247, 247, 247)"){
            where.style.backgroundColor = "rgba(215, 212, 213, 0)"
            where.style.boxShadow = "none";
            listOfSpaces[0].classList.add("hidden");
        }

        fore.style.backgroundColor = "rgb(247, 247, 247)";
        fore.style.boxShadow = "1px 1px 6px rgba(0, 0, 0, 0.2)";
        searchArea.style.backgroundColor = "rgba(215, 213, 213, 0.78)";
        searchIcon.style.backgroundColor = "rgb(243, 197, 10)";
    });



    // ============= functioning of bookIt button =============
    let bookIt = document.querySelector(".bookIt");
    let parkIt = document.querySelector(".parkIt");

    bookIt.addEventListener("click", () => {
        let date = document.querySelector(".date");
        date.classList.remove("hidden");
        let verticalLine2 = document.querySelector("#verticalLine2")
        verticalLine2.classList.remove("hidden");

        // fix style of searchIcon
        searchIcon.style.width = "13rem"

        bookIt.classList.remove("poppins-extralight");
        bookIt.classList.add("poppins-regular");
        parkIt.classList.remove("poppins-regular")
        parkIt.classList.add("poppins-extralight");
    });
    parkIt.addEventListener("click", () => {
        let date = document.querySelector(".date");
        date.classList.add("hidden");
        let verticalLine2 = document.querySelector("#verticalLine2")
        verticalLine2.classList.add("hidden");

        searchIcon.style.width = "7.7rem"

        parkIt.classList.remove("poppins-extralight");
        parkIt.classList.add("poppins-regular");
        bookIt.classList.remove("poppins-regular")
        bookIt.classList.add("poppins-extralight");
    });

    // ==================================================


    // ============= functioning of Get started button ==========
    let getStarted = document.querySelector(".getStarted");
    let expandDropdown = document.querySelector(".expandDropdown");

    getStarted.addEventListener("click", () => {
        expandDropdown.classList.remove("hidden");

        getStarted.style
    });



    // =============== closing all opened menus ==============
    
    // it detects all events
    document.addEventListener("click", function (event) {

        // a collective variable for all appearing menus
        let menus = document.querySelectorAll(".expandDropdown, .listOfSpaces,.listOfTimings ");

        // a collective variable for all trigger buttons
        let buttons = document.querySelectorAll(".getStarted, .searchbar, .timePeriod"); 

        // Array.from(menus).some(...) checks all menus
        // if click was on the menu it is stored as true
        let clickedInsideMenu = Array.from(menus).some(menu => menu.contains(event.target));

        // same for buttons
        let clickedButton = Array.from(buttons).some(button => button.contains(event.target));
        
        // if neither the button nor the menu was clicked then the menu is hidden
        if (!clickedInsideMenu && !clickedButton) {
          menus.forEach(menu => menu.classList.add("hidden"));
        }
      });

    //   ====================================================

}); 




// ================ Google Maps JS API (markers) ===============
// Initialize and add the map
let map;

async function initMap(latitude, longitude) {
  //  destination 
  const position = { lat: latitude, lng: longitude};

  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map   
  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Destination",
  });

  // =============== To display the route ==============
  let directionsService = new google.maps.DirectionsService();
  let directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
  
  try{
    let userLocation = await fetchLocation();

    if(userLocation){
      await calculateAndDisplayRoute(directionsService,directionsRenderer,userLocation, position);
      
    } else{
        alert("The algorithm might face some inaccuracies as location access was denied");
    }
  }
  catch(err){
    console.log(err);
  }
}
// initMap();

// =======================================================


// ================== Browser Geolocation API ===================

function fetchLocation(){
    // the following method triggers a popup requesting for location permission
    // it has three parameters which we treat as 3 functions
    // navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);

    return new Promise((resolve, reject) => {
        // we return the location val as a promise
        navigator.geolocation.getCurrentPosition(

          // function 1
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            resolve(userLocation);
          },

          //  function 2 
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.error("Location access denied by user");
                break;
              case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable");
                break;
              case error.TIMEOUT:
                console.error("Location request timed out");
                break;
            }
            reject(error);
          },

          // function 3 (options)  
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          }
        );
      });
}

// =========================================================



// ============== Google Maps JS API (directions service) =======
// use DirectionsService to calculate directions and directionsRenderer to showcase it

async function calculateAndDisplayRoute(directionsService,directionsRenderer, userLocation, destinationLocation){
    // the method directionsService.route() contains 
    // 1. the directionsRequest object
    // 2. the directionsResult function which we will use to call the directionsRenderer to showcase route

    try{
        const response = await directionsService.route({
            origin: userLocation,
            destination: destinationLocation,
            travelMode: google.maps.TravelMode.DRIVING
        });

        if(response.status ===  "OK"){
            directionsRenderer.setDirections(response);

            // extract distance and duration from the response
            const route = response.routes[0].legs[0];
            const distance = route.distance.text;
            const duration = route.duration.text;

            console.log(`distance is ${distance} and time taken would be ${duration}`);

        } else{
            throw new Error(`Directions request failed with status: ${response.status}`);
        }
    } catch(err){
        console.log(err);
    }

}