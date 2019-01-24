const mostrarPokemon = (data) => {
  let arrayMostrar = [];
  for (let i = 0; i < data.length; i++) {
    arrayMostrar.push({ name: data[i].name, img: data[i].img, type: data[i].type}); 
  }
  return arrayMostrar;
};

window.pokemon = {
mostrarPokemon
};