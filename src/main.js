const containerList = document.getElementById('container-list');
const arrayPokemon = POKEMON.pokemon;
const arrayMostrado = pokemon.mostrarPokemon(arrayPokemon);

const crearPlataforma = (data) => {
let plataforma = '';
data.forEach((data) => {
let cartilla = `
      <div class = "card-link">
      <h4>*Nombre*</h4>
      <label class="name"> ${ data.name }</label>
      <h4>*Imagen*</h4>
      <img class="image" src="${ data.img }" />
      <h4>*Tipo*</h4>
      <label class="type">${ data.type }</label>
      </div>
      `;
plataforma += cartilla;
});
containerList.innerHTML = plataforma;
};
crearPlataforma(arrayMostrado);