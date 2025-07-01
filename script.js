document.querySelector("#button").addEventListener("click", () => {
  const firstName = document.querySelector("#nom").value;
  const lastName = document.querySelector("#prenom").value;
  //   console.log(firstName);
  //   console.log(lastName);
  fetch("http://localhost:3000/name", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName: firstName, lastName: lastName }),
  })
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#affichageNom").textContent = data.firstName;

      document.querySelector("#affichangePrenom").textContent = data.lastName;
    });
});
