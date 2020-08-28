import Pokemon from '../models/Pokemon';

export default class PokemonsRepository {
  constructor() {
    this.mongooseRepository = Pokemon;
  }

  async find({ name, types }) {
    if (name && types) {
      return this.mongooseRepository
        .find({
          name: { $regex: name, $options: 'i' },
          types: { $in: types },
        })
        .sort('id');
    }

    if (name) {
      return this.mongooseRepository
        .find({
          name: { $regex: name, $options: 'i' },
        })
        .sort('id');
    }

    if (types) {
      return this.mongooseRepository.find({ types: { $in: types } }).sort('id');
    }

    return this.mongooseRepository.find().sort('id');
  }

  async findAllById(pokemons) {
    const pokemonIds = pokemons.map(pokemon => pokemon.id);

    return this.mongooseRepository.find({
      id: { $in: pokemonIds },
    });
  }
}
