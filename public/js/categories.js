console.log("categories.js is working");


document.addEventListener('DOMContentLoaded', () => {
    // ================ spaces button ===================
    let spacesBtn = document.querySelector(".spacesBtn");
    spacesBtn.style.color = "rgb(30, 41, 59)";
    spacesBtn.style.borderBottom = "2px solid rgb(30, 41, 59)"; 


    // ===========  function to fetch the spaces from the database send to route /searchSpaces =============

    // two functions to fetch the spaces containing array
    const fetchOnlySpaces = async() => {
        try{
            const response = await fetch("/entertainment");
            
            // parse response into JSON
            return await response.json();

        } catch(err){
            console.log(err);
        };
    };
    
    async function showSpaces(){
        const onlyEntertainment = await fetchOnlySpaces();
        const filteredSpaces = onlyEntertainment.filter((space) =>
        space.name.toLowerCase()
        );
        console.log(filteredSpaces);

    };
    showSpaces();

});