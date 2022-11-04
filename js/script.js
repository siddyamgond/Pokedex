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


  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      document.querySelector("#Pokecard").innerHTML = `
      <div class="d-none d-sm-block">
        <div
          class="container"
          style="
            background-image: url(./img/test.png);
            width: 100%;

            background-size: cover;
          "
        >
          <div class="row pt-2">
            <div class="row g-0 text-center">
              <div class="col-sm-6 col-md-6"></div>
              <div class="col-6 col-md-5">
                <h2 class="text-end">
                  Pokedex - ${capitalizeFirstLetter(data.name)}
                </h2>
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md">
              <center>
                <img
                src="${data.sprites.other["official-artwork"].front_default}"
                class="img-fluid" height="500px" alt="text" />
              </center>
            </div>
            <div class="col-md">
              <div class="container p-3">
                <h4>ID: #${(data.id)}</h4>
                <h2 class="">${capitalizeFirstLetter(data.name)}</h2>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>${data.base_stat}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-block d-sm-none">
        <div
          class="container"
          style="
            background-image: url(./img/test1.png);
            width: 100%;

            background-size: cover;
          "
        >
          <div class="row pt-2">
            
              
              
                <h2 class="text-center text-white fw">
                Pokedex - ${capitalizeFirstLetter(data.name)}
                </h2>
            
          
    
          <br />
          <div class="row">
            <div class="col-md">
              <center>
                <img
                src="${data.sprites.other["official-artwork"].front_default}"
                class="img-fluid" alt="text" />
              </center>
            </div>
            <div class="col-md">
              <div class="container p-3">
                <h4>ID: #${(data.id)}</h4>
                <h2 class="">${capitalizeFirstLetter(data.name)}</h2>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>${data.base_stat}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
