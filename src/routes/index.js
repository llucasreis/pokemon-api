import Router from 'express';
import pokemonsRouter from './pokemon.routes';

const routes = Router();

routes.use('/pokemons', pokemonsRouter);

export default routes;
