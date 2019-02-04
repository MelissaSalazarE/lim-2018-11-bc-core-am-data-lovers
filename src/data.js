const mostrarPokemones = (data) => {
  let arrayMostrar = [];
  for (let i = 0; i < data.length; i++) {
    arrayMostrar.push({name: data[i].name, img: data[i].img, type: data[i].type});
  }
  return arrayMostrar;
};

// la función es para ordenar alfabeticamente //

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
  if (tipo === 'Az') {
    return arrayOrdenar;
  }
  if (tipo === 'Za') {
    return arrayOrdenar.reverse();
  }
};

// filtar por tipo //

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

// funcion estadistica  nos permia contar cuantos poquemones hay por tipo //

const mostrarPromedio = (informacion) => {
  let suma = 0;
  if (informacion.length != 0) {
    for (let i = 0; i < informacion.length; i++) {
      let str = informacion[i].weight;
      let peso = str.split(" ");
      suma += parseFloat(peso[0]);
    }
    return (suma / informacion.length).toFixed(2) 
  }else
  {
    return 0
  }   
};


window.pokemon = {
  mostrarPokemones,
  ordenarPorNombre,
  filtrarPokemones,
  mostrarPromedio,
};