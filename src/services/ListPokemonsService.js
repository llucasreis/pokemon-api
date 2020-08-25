export default class ListPokemonsService {
  constructor(pokemonsRepository) {
    this.pokemonsRepository = pokemonsRepository;
  }

  async execute({ name, type }) {
    let types = null;
    if (type) {
      types = type.split(',');
    }
    const pokemons = await this.pokemonsRepository.find({ name, types });

    return pokemons;
  }
}
