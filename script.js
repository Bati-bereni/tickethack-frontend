// document.querySelector("#button").addEventListener("click", () => {
//   const firstName = document.querySelector("#nom").value;
//   const lastName = document.querySelector("#prenom").value;
//   //   console.log(firstName);
//   //   console.log(lastName);
//   fetch("http://localhost:3000/name", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ firstName: firstName, lastName: lastName }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector("#affichageNom").textContent = data.firstName;

//       document.querySelector("#affichangePrenom").textContent = data.lastName;
//     });
// });

document.querySelector("#search-button").addEventListener("click", () => {
  console.log("click");
  const depCity = document.querySelector("#departure").value;
  const arrCity = document.querySelector("#arrival").value;

  fetch("http://localhost:3000/tripSearch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ departure: depCity, arrival: arrCity }),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      console.log("allTrips =>", data.allTrips);
      if (data.result === true) {
        console.log("data is true");
        document.querySelector(".result-card").innerHTML = "";

        // Si j'ai un résultat true dans mon back, j'accepte de faire la boucle
        for (let trip of data.allTrips) {
          console.log("Ce message s'affichera quoi qu'il arrive");
          console.log(trip);

          document.querySelector(".result-card").innerHTML += `
        
                <div class="response-container">
                  <div class ="trip-departure">${trip.departure}</div>
                  <div class="signe"><p>></p></div>
                  <div class="trip-arrival">${trip.arrival}</div>
                  <div class="trip-price">${trip.price}</div>
                  <div class="euro"><p>€</p></div>
                  <div class="button"><button id="book">Book</button></div>
           
              </div>`;
          // document.querySelector(".card result-card").innerHTML +=
          //   trip.departure;
        }
      } else {
        console.log(data.error);

        // Si j'ai PAS de résultat true, je refuse de faire la boucle et j'affiche l'image not found
        // document.querySelector(".card result-card").innerHTML = `
        //   <img id = "loupe" src = "images/notfound.png">
        //   <div id ="noresultfound">No trip found</div>`;
      }
    });
});
// trigger modif
// pour chaque document trouvé correspondant la recherche,
// afficher le résultat (document.querySelector('.card result-card').innerHTML +=`
// avec creation du boutton add (add to cart)
// creer une boucle pour chaque element de mon tableau, creer une div ou ajouter le resultat de la recherche avec villes, prix ...)
