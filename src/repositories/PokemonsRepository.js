import fs from 'fs';
import pokemonDatabase from '../config/pokemonDatabase';

export default class PokemonsRepository {
  constructor() {
    const data = JSON.parse(
      fs.readFileSync(pokemonDatabase.pokemonJSONFolder, 'utf-8'),
    );

    const pokemons = Array.from(data.pokemon);

    this.jsonRepository = pokemons;
  }

  async find({ name, types }) {
    let pokemons = this.jsonRepository;

    if (name) {
      pokemons = pokemons.filter(pokemon => pokemon.name.includes(name));
    }

    if (types) {
      pokemons = pokemons.filter(pokemon =>
        pokemon.types.some(type => types.indexOf(type) >= 0),
      );
    }

    return pokemons;
  }

  async findAllById(pokemons) {
    const pokemonIds = pokemons.map(pokemon => pokemon.id);

    return this.jsonRepository.filter(pokemon =>
      pokemonIds.includes(pokemon.id),
    );
  }
}
