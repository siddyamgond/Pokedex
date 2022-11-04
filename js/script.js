document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#text").value;
  const pokemonName = lowerCaseName(name);

//   fetch(`https://pokeapi.co/api/v2/ability/${pokemonName}`)
//     .then((response) => response.json())
//     .then((data) => {
       
//     });

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      document.querySelector("#Pokecard").innerHTML = `
      <div class="container p-3 bg-white">
      <h1 class="text-center">Pokemon encyclopedia - ${capitalizeFirstLetter(data.name)}</h1>
      <br />
      <center>
      
      <img src="${data.sprites.other["official-artwork"].front_default}" class="img-fluid" alt="text" /></center>
      <div class="container p-3">
        <h4>ID: #${(data.id)}</h4>
        <br />
        <br />
        <h5>Description:</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Base Experience</th>
              <th scope="col">Height</th>
              <th scope="col">Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>${data.base_experience}</td>
            <td>${data.weight}</td>
            <td>${data.height}</td>
            </tr>
          </tbody>
          <br />
          <thead>
            <tr>
              <th scope="col">Base stat</th>
              <th scope="col">Height</th>
              <th scope="col">Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${data.base_stat}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    `;
    })
    .catch((err) => {
      document.querySelector("#Pokecard").innerHTML = `
      <center><img src="./img/404.png" class="img-fluid" alt="" /></center>
      `;
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}
