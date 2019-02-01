require('../src/data.js');

// primero comprobemos que pokemon es un objeto :) //

describe('pokemon', () => {
  it('Pokemon deberia ser un objeto', () => {
    expect(typeof pokemon).toBe('object');
  });
});

// testear para la funcion mostrar toda la data //

const inputMostrar = [
  {id: '7', name: 'Squirtle', img: 'http://www.serebii.net/pokemongo/pokemon/007.png',
    type: ['Water']},
  {id: '11', name: 'Metapod', img: 'http://www.serebii.net/pokemongo/pokemon/011.png',
    type: ['Bug']},
  {id: '18', name: 'Pidgeot', img: 'http://www.serebii.net/pokemongo/pokemon/018.png',
    type: ['Normal', 'Flying']}
];


describe('pokemon.mostrarPokemones', () => {
  it('es funcion', () => {
    expect(typeof window.pokemon.mostrarPokemones).toBe('function');
  });
  it('deberia ser el mismo array mostrado', () => {
    expect(window.pokemon.mostrarPokemones(inputMostrar)).not.toEqual(inputMostrar);
  });
});

// testear la funcion ordenar con sort //

const inputSort = [{name: 'Bulbasaur'}, {name: 'Venusaur'}, {name: 'Ivysaur'}, {name: 'Pidgey'}];

const outputSortAZ = [{name: 'Bulbasaur'}, {name: 'Ivysaur'}, {name: 'Pidgey'}, {name: 'Venusaur'}];

const outputSortZA = [{name: 'Venusaur'}, {name: 'Pidgey'}, {name: 'Ivysaur'}, {name: 'Bulbasaur'}];

const inputEqual = [{name: 'Bulbasaur'}, {name: 'Venusaur'}, {name: 'Venusaur'}, {name: 'Ivysaur'}, {name: 'Pidgey'}];
const outputEqual = [{name: 'Bulbasaur'}, {name: 'Ivysaur'}, {name: 'Pidgey'}, {name: 'Venusaur'}, {name: 'Venusaur'}];
const outputEqualZA = [{name: 'Venusaur'}, {name: 'Venusaur'}, {name: 'Pidgey'}, {name: 'Ivysaur'}, {name: 'Bulbasaur'}];

const orden = 'Az';

const orden1 = 'Za';

describe('pokemon.ordenarPorNombre', () => {
  it('ordenar por nombre deberia ser una funcion', () => {
    expect(typeof window.pokemon.ordenarPorNombre).toBe('function');
  });
  it('ordena de la A-Z', () => {
    expect(window.pokemon.ordenarPorNombre(inputSort, orden)).toEqual(outputSortAZ);
  });
  it('ordena de la Z-A', () => {
    expect(window.pokemon.ordenarPorNombre(inputSort, orden1)).toEqual(outputSortZA);
  });
  it('ordenar array iguales de A-Z', () => {
    expect(window.pokemon.ordenarPorNombre(inputEqual, orden)).toEqual(outputEqual);
  });
  it('ordenar array iguales Z-A', () => {
    expect(window.pokemon.ordenarPorNombre(inputEqual, orden1)).toEqual(outputEqualZA);
  });
});

// testear para la funcion del filtar por tipo //

const inputFiltrar = [
  {id: '7', name: 'Squirtle', img: 'http://www.serebii.net/pokemongo/pokemon/007.png',
    type: ['Water']},
  {id: '11', name: 'Metapod', img: 'http://www.serebii.net/pokemongo/pokemon/011.png',
    type: ['Bug']},
  {id: '18', name: 'Pidgeot', img: 'http://www.serebii.net/pokemongo/pokemon/018.png',
    type: ['Normal', 'Flying']}
];

const type = 'Water';

const outputFiltrar = [{id: '7', name: 'Squirtle', img: 'http://www.serebii.net/pokemongo/pokemon/007.png',
  type: ['Water']},
];

describe('pokemon.filtrarPokemones', () => {
  it('Muestra a los pokemones que son del mismo tipo', () => {
    expect(typeof window.pokemon.filtrarPokemones).toBe('function');
  });
  it('deberia ser el mismo array mostrado', () => {
    expect(window.pokemon.filtrarPokemones(inputFiltrar)).not.toEqual(inputFiltrar);
  });
  it('deberia filtar a los pokemones por tipo', () => {
    expect(window.pokemon.filtrarPokemones(inputFiltrar, type)).toEqual(outputFiltrar);
  });
});


