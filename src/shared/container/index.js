/* eslint-disable import/no-cycle */
import { createContainer, asClass } from 'awilix';
import ListPokemonsService from '../../modules/pokemons/services/ListPokemonsService';
import CreateTeamService from '../../modules/teams/services/CreateTeamService';

import TeamsRepository from '../../modules/teams/infra/mongoose/repositories/TeamsRepository';
import PokemonsRepository from '../../modules/pokemons/infra/mongoose/repositories/PokemonsRepository';

const container = createContainer();

container.register({
  createTeamService: asClass(CreateTeamService),
  listPokemonsService: asClass(ListPokemonsService),
  pokemonsRepository: asClass(PokemonsRepository),
  teamsRepository: asClass(TeamsRepository),
});

export default container;
