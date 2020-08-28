import fs from 'fs';
import { pokemonJSONDatabase } from '~config/database';

export default class PokemonsRepository {
  constructor() {
    const data = JSON.parse(fs.readFileSync(pokemonJSONDatabase, 'utf-8'));

    const pokemons = Array.from(data);

    this.fakeRepository = pokemons;
  }

  async find({ name, types }) {
    let pokemons = this.fakeRepository;

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

    return this.fakeRepository.filter(pokemon =>
      pokemonIds.includes(pokemon.id),
    );
  }
}
