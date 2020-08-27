import Router from 'express';
import pokemonsRouter from './pokemon.routes';
import teamsRouter from './team.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Welcome to PokemonAPI' });
});

routes.use('/pokemons', pokemonsRouter);
routes.use('/teams', teamsRouter);

export default routes;
