import Pokemon from '../models/Pokemon';

/** Class represeting a repository to access Pokemon's data */
export default class PokemonsRepository {
  /**
   * Create a repository
   */
  constructor() {
    this.mongooseRepository = Pokemon;
  }

  /**
   * Receive data and access database to find or filter pokemons
   * @param {Object} request - the data to find or filter pokemons
   * @param {string} request.name - The name of pokemon to filter
   * @param {string} request.type - The type of pokemon to filter
   *
   * @returns {array} a list of pokemons
   */
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

  /**
   * Receive data and access database to find pokemons by a list of ids
   * @param {array} pokemons - the list of pokemons to find
   *
   * @returns {array} a list of pokemons found
   */
  async findAllById(pokemons) {
    const pokemonIds = pokemons.map(pokemon => pokemon.id);

    return this.mongooseRepository.find({
      id: { $in: pokemonIds },
    });
  }
}
