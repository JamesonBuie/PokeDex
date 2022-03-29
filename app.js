// POKEDEX PROJECT

const pokeContainer = document.querySelector(`#container`);
// Using the first 150 pokemon (AKA ID/Objects in the pokeAPI )
const numOfPokemon = 150;

// The createPokeCard function creates a new card and adds the new card to the webpage/document inside of the div with the ID of "container"
// NOTE: The value/argument that will be passed in for the "pokemon" parameter will be the response received from an Axios request to the pokeAPI
function createPokeCard(pokemon) {
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);
    // Setting the innerHtml for the new card using the data/object that is passed into the "pokemon" parameter. Also, using the toUpperCase method on the pokemon name so it displays in UPPERCASE text
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_default}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>`;
}

// The getPokemonData function makes an Axios GET request to the PokeAPI using a specific pokemon ID/Number then takes the returned data and passes it into the createPokeCard function
// NOTE: The argument/value passed into the "id" parameter will be a number created in the loop in the next function (AKA the getPokemon function)
async function getPokemonData(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    createPokeCard(pokemonData);
}

// The getPokemon function loops through all the pokemon IDs from 1 to 150 and runs/executes the getPokemonData function for each ID
// NOTE: Using async/await on this function because the code in the getPokemonData function is asynchronous 
async function getPokemon() {
    for (i = 1; i <= numOfPokemon; i++) {
        console.log(i);
        await getPokemonData(i);
    }
}
// Running the function that executes the getPokemonData function each time through the loop
getPokemon();