import Router from 'express';
import pokemonsRouter from '../../../../modules/pokemons/infra/http/routes/pokemon.routes';
import teamsRouter from '../../../../modules/teams/infra/http/routes/team.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Welcome to PokemonAPI' });
});

routes.use('/pokemons', pokemonsRouter);
routes.use('/teams', teamsRouter);

export default routes;
