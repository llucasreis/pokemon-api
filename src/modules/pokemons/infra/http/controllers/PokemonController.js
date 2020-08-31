import ListPokemonsService from '../../../services/ListPokemonsService';
import PokemonsRepository from '../../mongoose/repositories/PokemonsRepository';

const pokemonsRepository = new PokemonsRepository();

/** Class represeting a controller to manage Pokemons */
export default class PokemonController {
  /**
   * Receive data from request to list pokemons
   * @param {Express.Request} req - the express request
   * @param {Express.Response} res - the express response
   *
   * @returns {Express.Response} a json with a list of pokemons
   */
  async index(req, res) {
    const { name, type } = req.query;

    const listPokemons = new ListPokemonsService(pokemonsRepository);

    const pokemons = await listPokemons.execute({ name, type });

    return res.json(pokemons);
  }
}
