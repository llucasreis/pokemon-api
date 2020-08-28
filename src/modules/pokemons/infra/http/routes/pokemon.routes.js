import { Router } from 'express';
import PokemonController from '../controllers/PokemonController';

const pokemonsRouter = Router();
const pokemonController = new PokemonController();

pokemonsRouter.get('/', pokemonController.index);

export default pokemonsRouter;
