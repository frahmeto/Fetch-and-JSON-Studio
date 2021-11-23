// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response )=>{
        return response.json();
    })
    .then((astronautJson)=>{
        const container = document.querySelector("#container");
        // Add a count of astronauts to the page.
        const count = document.getElementById("count");
        count.innerHTML = `Number of Astronauts: ${astronautJson.length}`;
        let astronauts = "";
        //Display the astronauts sorted from most to least time in space.
        const organizedAstronauts = astronautJson.sort(
            (a,b) => b.hoursInSpace-a.hoursInSpace
        );
        console.log("og", organizedAstronauts);

        for(astronaut of astronautJson){
            // Make the "Active: true" text green, for astronauts that are still active (active is true).
            if(astronaut.active){
            astronauts += `
            <div class="astronaut">
            <div class="bio">
               <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
               <ul>
                  <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                  <li style = 'color: green'>Active: ${astronaut.active}</li>
                  <li>Skills: ${astronaut.skills.join(", ")}</li>
               </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
         </div>`;
        }else{
            astronauts += 
            `<div class="astronaut">
            <div class="bio">
               <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
               <ul>
                  <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                  <li>Active: ${astronaut.active}</li>
                  <li>Skills: ${astronaut.skills.join(", ")}</li>
               </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
         </div>`;

        }

        }
        container.innerHTML = astronauts;

    })
 
});