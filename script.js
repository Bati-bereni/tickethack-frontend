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
  const depCity = document.querySelector("#departure").value;
  const arrCity = document.querySelector("#arrival").value;

  fetch("http://localhost:3000/tripSearch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ departure: depCity, arrival: arrCity }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.allTrips);
      // creer une boucle pour chaque element de mon tableau, creer une div ou ajouter le resultat de la recherche avec villes, prix ...)
    });
});
