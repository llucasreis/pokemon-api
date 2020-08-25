const pokemons = [
  { name: 'rattata', types: ['normal'] },
  { name: 'pidgey', types: ['normal', 'flying'] },
  { name: 'braviary', types: ['flying'] },
];

const types = ['normal', 'flying'];

const filterData = pokemons.filter(pokemon => {
  return pokemon.types.some(type => types.indexOf(type) >= 0);
});

console.log(filterData);
