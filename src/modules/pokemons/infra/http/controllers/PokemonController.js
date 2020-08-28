import ListPokemonsService from '../../../services/ListPokemonsService';
import PokemonsRepository from '../../mongoose/repositories/PokemonsRepository';
// import container from '../container';

const pokemonsRepository = new PokemonsRepository();

export default class PokemonController {
  async index(req, res) {
    const { name, type } = req.query;
    // const listPokemons = container.resolve('listPokemonsService');
    const listPokemons = new ListPokemonsService(pokemonsRepository);

    const pokemons = await listPokemons.execute({ name, type });

    return res.json(pokemons);
  }
}
