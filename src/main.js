
const containerList = document.getElementById('container-list');

const ordenPokemon = document.getElementById('orden-pokemon');

const tipoPokemon = document.getElementById('tipo-pokemon');

const labelPromedio =  document.getElementById('promedio') 

const arrayPokemon = POKEMON.pokemon;

const arrayMostrado = pokemon.mostrarPokemones(arrayPokemon);

// muestra todos los pokemones //

const crearPlantilla = (data) => {
  let plantilla = '';
  data.forEach((data) => {
    let carta = `
    <div class = "card-link">
    <label class="name">${ data.name }</label>
    <img class="image" src="${ data.img }" />
    <label class="name">${ data.type}</label>
    </div>
    `;
    plantilla += carta;
  });
  containerList.innerHTML = plantilla;
};
crearPlantilla(arrayMostrado);

// la funcion para el ordenado alfabeticamente //

/* eslint-disable no-unused-vars */

const ordenarPokemon = () => {
  const arrayOrdenado = pokemon.ordenarPorNombre(arrayPokemon, ordenPokemon.value);
  crearPlantilla(arrayOrdenado);
};
/* eslint-enable no-unused-vars */

// filtar por tipo //

/* eslint-disable no-unused-vars */

const filtrarTipo = () => {
  const arrayFiltrado = pokemon.filtrarPokemones(arrayPokemon, tipoPokemon.value);

  const promedio = pokemon.mostrarPromedio(arrayFiltrado, arrayFiltrado.length);
  
  let label;
  if (promedio != 0) {
     label = ` 
    <label class="label">
      La media aritmetica (promedio) de los pokemones de tipo ${tipoPokemon.value} es: ${ promedio } kg.               
    </label>
    `;
  } else {
     label = ` 
    <label class="label">
      Seleccionar Tipo de pokemon.               
    </label>
    `;
  }  
  labelPromedio.innerHTML = label;

  crearPlantilla(arrayFiltrado);
};
/* eslint-enable no-unused-vars */