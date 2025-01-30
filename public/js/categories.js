console.log("categories.js is working");

// the cards begin to load
document.addEventListener('DOMContentLoaded', () => {
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


    // ================= functioning of hover on cards ===========

    let spaceText = document.querySelectorAll(".spaceText");
    let spaceTextBg = document.querySelectorAll(".spaceTextBg");
    let imageContainer =document.querySelectorAll(".imageContainer");
    
    // imageContainer.forEach((image, index) => {
    //     image.addEventListener("mouseover", () => {
    //         spaceText[index].classList.remove("hidden");
    //         spaceTextBg[index].classList.remove("hidden");
    //     });
    //     image.addEventListener("mouseout", () => {
    //         spaceText[index].classList.add("hidden");
    //         spaceTextBg[index].classList.add("hidden");
    //     });

    // });
    
});