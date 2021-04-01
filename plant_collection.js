 /*******************************************************************

    Website Project Javascript
    Author: Mariah Garcia
    Date: June 25, 2020
    Description: Loads a JSON file and returns a DOM document node

*********************************************************************/

/*Main function to load the plant listing through plant collection JSON file.*/
function displayPlants(plant_collection){
    let ul = document.getElementById("plants");

    for(let i=0; i<plant_collection.length; i++){
        let li = document.createElement("li");
        let image = document.createElement("img");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let blockquote = document.createElement("blockquote");

        image.src = plant_collection[i].plant_image;
        h3.innerHTML = plant_collection[i].plant_name;
        h4.innerHTML = plant_collection[i].category;
        blockquote.innerHTML = plant_collection[i].description;

        li.appendChild(image);
        li.appendChild(h3);
        li.appendChild(h4);
        li.appendChild(blockquote);

        ul.appendChild(li);

        console.log("Done!");
    }
}



 /* Initial setup and adding of event listeners to the buttons and loading the page
 * dynamically from the xml file - run when the page loads
 */
function load() {

    fetch('LeBotanical.json')
        .then(function(result){
            return result.json();
        })
        .then(function(data){
            displayPlants(data);
        });
    
}

//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);
document.addEventListener("DOMContentLoaded", displayPlants);