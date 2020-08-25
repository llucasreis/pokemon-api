import ListPokemonsService from '../services/ListPokemonsService';
import PokemonsRepository from '../repositories/PokemonsRepository';

const pokemonsRepository = new PokemonsRepository();

export default class PokemonController {
  async index(req, res) {
    const { name, type } = req.query;
    const listPokemons = new ListPokemonsService(pokemonsRepository);

    const pokemons = await listPokemons.execute({ name, type });

    return res.json(pokemons);
  }
}
