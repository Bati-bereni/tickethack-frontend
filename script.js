document.querySelector("#button").addEventListener("click", () => {
  const departure = document.querySelector("#departure").value;
  const arrival = document.querySelector("#arrival").value;
  //   console.log(firstName);
  //   console.log(lastName);
  fetch("http://localhost:3000/FindOneTrips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ departure: departure, arrival: arrival }),
  })
    .then((res) => res.json())
    .then((data) => {
      //   document.querySelector(".card result-card").innerHTML = `
      //   <hr />
      //       <p>${data.departure}</p>`;
      //   document.querySelector("#affichangePrenom").textContent = data.lastName;
    });
});
