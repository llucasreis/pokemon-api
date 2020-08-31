/** Class represeting a service to List Pokemons */
export default class ListPokemonsService {
  /**
   * Create a service
   * @param {PokemonsRepository} pokemonsRepository - The repository of pokemons
   */
  constructor(pokemonsRepository) {
    this.pokemonsRepository = pokemonsRepository;
  }

  /**
   * Validate data received and list pokemons
   * @param {Object} request - the data to find or filter pokemons
   * @param {string} request.name - The name of pokemon to filter
   * @param {string} request.type - The type of pokemon to filter
   *
   * @returns {Object} a list of pokemons
   */
  async execute({ name, type }) {
    let types = null;
    if (type) {
      types = type.split(',');
    }
    const pokemons = await this.pokemonsRepository.find({ name, types });

    return pokemons;
  }
}
