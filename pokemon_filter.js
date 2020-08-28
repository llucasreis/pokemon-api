const pokemons = [
  { id: 1, name: 'rattata', types: ['normal'] },
  { id: 2, name: 'pidgey', types: ['normal', 'flying'] },
  { id: 3, name: 'braviary', types: ['flying'] },
];

const ids = [1, 2, 100];

// const types = ['normal', 'flying'];

// const filterData = pokemons.filter(pokemon => {
//   return pokemon.types.some(type => types.indexOf(type) >= 0);
// });

// console.log(filterData);

const filterData = pokemons.filter(pokemon => {
  return ids.includes(pokemon.id);
});

console.log(filterData);
