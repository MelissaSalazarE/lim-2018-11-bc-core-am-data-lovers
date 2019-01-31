const mostrarPokemones = (data) => {
  let arrayMostrar = [];
  for (let i = 0; i < data.length; i++) {
    arrayMostrar.push({name: data[i].name, img: data[i].img, type: data[i].type});
  }
  return arrayMostrar;
};
//la función es para ordenar alfabeticamente 

const ordenarPorNombre = (data, tipo) => {
  let arrayOrdenar = [];
  for (let i = 0 ; i < data.length ; i++) {
    arrayOrdenar.push({name: data[i].name, img: data[i].img, type: data[i].type});
  }
  arrayOrdenar.sort((prevNom, nextNom) => {
    if (prevNom.name > nextNom.name) {
      return 1;
    }
    if (prevNom.name < nextNom.name) {
      return -1;
    }
    return 0;
  });
  if (tipo === 'Az'){
    return arrayOrdenar;
  }
  if (tipo === 'Za'){
    return arrayOrdenar.reverse();
  }
};

//filtar por tipo

const filtrarPokemones = (data, tipo) => {
  let arrayFiltrar = [];
  arrayFiltrar = data
    .filter((elemento) => {
      for (let i = 0 ; i < elemento.type.length ; i++) {
        if (elemento.type[i] === tipo) {
          return 1;
        }
      }
    });
  return arrayFiltrar;
};
// filtrar por debilidad y crear la funcion contar

const filtrarPorDebilidad = (data, tipo) => {
  let arrayFiltrarDeb = [];
  arrayFiltrarDeb = data.filter((elemento) => {
    for (let i = 0; i < elemento.weaknesses.length; i++) {
     if (elemento.weaknesses[i] === tipo) {
       return 1;
     } 
    }
  });
  return arrayFiltrarDeb;
};

window.pokemon = {
  mostrarPokemones,
  ordenarPorNombre,
  filtrarPokemones,
  filtrarPorDebilidad,
};