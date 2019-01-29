const mostrarPokemones = (data) => {
  let arrayMostrar = [];
  for (let i = 0; i < data.length; i++) {
    arrayMostrar.push({name: data[i].name, img: data[i].img, type: data[i].type});
  }
  return arrayMostrar;
};

const ordenarPorNombre = (data, tipo) => {
  let arrayOrdenar = [];
  for (let i = 0 ; i < data.length ; i++) {
    arrayOrdenar.push({name: data[i].name, img: data[i].img, type: data[i].type});
  }
  arrayOrdenar.sort((prev, next) => {
    if (prev.name > next.name) {
      return 1;
    }
    if (prev.name < next.name) {
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

window.pokemon = {
  mostrarPokemones,
  ordenarPorNombre,
};