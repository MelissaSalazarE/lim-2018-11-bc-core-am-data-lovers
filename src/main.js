
const containerList = document.getElementById('container-list');
const ordenPokemon = document.getElementById('orden-pokemon');

const arrayPokemon = POKEMON.pokemon;

const arrayMostrado = pokemon.mostrarPokemones(arrayPokemon);

const crearPlantilla = (data) => {
  let plantilla = '';
  data.forEach((data) => {
    let carta = `
    <div class = "card-link">
    <label class="name">${ data.name }</label>
    <img class="image" src="${ data.img }" />
    <label class="name" src="${ data.type}" /label>
    </div>
    `;
    plantilla += carta;
  });
  containerList.innerHTML = plantilla;
};
crearPlantilla(arrayMostrado);


const ordenarPokemon = () => {
  const arrayOrdenado = pokemon.ordenarPorNombre(arrayPokemon, ordenPokemon.value);
  crearPlantilla(arrayOrdenado);
};
