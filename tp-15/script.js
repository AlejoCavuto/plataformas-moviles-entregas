document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    let nextUrl = '';

    fetchPokemons(apiUrl);

    document.getElementById('load-more-btn').addEventListener('click', function() {
        if (nextUrl) {
            fetchPokemons(nextUrl);
        }
    });
});

function fetchPokemons(url) {
    mostrarSpinner();

    fetch(url)
        .then(response => response.json())
        .then(data => {
            nextUrl = data.next;
            mostrarPokemons(data.results);
            ocultarSpinner();
        })
        .catch(error => {
            console.error('Error fetching Pokémon:', error);
            ocultarSpinner();
        });
}

function mostrarPokemons(pokemonList) {
    const pokemonListDiv = document.getElementById('pokemon-list');
    pokemonList.forEach((pokemon, id) => {
        const pokemonCard = document.createElement('div');
        pokemonCard.className = 'col-lg-3 col-md-4 col-sm-6 mb-3';

        const spriteUrl = pokemon.sprites && pokemon.sprites.front_default ? pokemon.sprites.front_default : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`; // URL de marcador de posición en caso de que no haya sprite

        const tipos = pokemon.types && pokemon.types.length > 0 ? pokemon.types.map(type => type.type.name).join(', ') : 'No disponible';

        const habilidades = pokemon.abilities && pokemon.abilities.length > 0 ? pokemon.abilities.map(ability => ability.ability.name).join(', ') : 'No disponible';

        const movimientos = pokemon.moves && pokemon.moves.length > 0 ? pokemon.moves.slice(0, 4).map(move => move.move.name).join(', ') : 'No disponible';

        pokemonCard.innerHTML = `
            <div class="card">
                <img src="${spriteUrl}" class="card-img-top pokemon-img img-fluid" alt="${pokemon.name}">
                <div class="card-body">
                    <h5 class="card-title text-capitalize">${pokemon.name}</h5>
                   
                    <button class="btn btn-primary" onclick="fetchPokemonDetails('${pokemon.url}')" data-toggle="modal" data-target="#pokemonModal">Más información</button>
                </div>
            </div>
        `;
        pokemonListDiv.appendChild(pokemonCard);
    });
}

function fetchPokemonDetails(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayPokemonDetails(data);
        })
        .catch(error => {
            console.error('Error fetching Pokémon details:', error);
        });
}

function displayPokemonDetails(pokemon) {
    const pokemonDetailsDiv = document.getElementById('pokemon-details');

    const spriteUrl = pokemon.sprites && pokemon.sprites.front_default ? pokemon.sprites.front_default : 'https://via.placeholder.com/150'; // URL de marcador de posición en caso de que no haya sprite

    const tipos = pokemon.types && pokemon.types.length > 0 ? pokemon.types.map(type => type.type.name).join(', ') : 'No disponible';

    const habilidades = pokemon.abilities && pokemon.abilities.length > 0 ? pokemon.abilities.map(ability => ability.ability.name).join(', ') : 'No disponible';

    const movimientos = pokemon.moves && pokemon.moves.length > 0 ? pokemon.moves.slice(0, 4).map(move => move.move.name).join(', ') : 'No disponible';

    pokemonDetailsDiv.innerHTML = `
        <h5 class="text-capitalize">${pokemon.name}</h5>
        <img src="${spriteUrl}" class="img-fluid" alt="${pokemon.name}">
        <p><strong>Tipos:</strong> ${tipos}</p>
        <p><strong>Habilidades:</strong> ${habilidades}</p>
        <p><strong>Movimientos:</strong> ${movimientos}</p>
    `;
}

function mostrarSpinner() {
    document.getElementById('loading-spinner').classList.add('d-block');
}

function ocultarSpinner() {
    document.getElementById('loading-spinner').classList.remove('d-block');
}
