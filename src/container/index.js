/* eslint-disable import/no-cycle */
import { createContainer, asClass } from 'awilix';
import ListPokemonsService from '../services/ListPokemonsService';
import CreateTeamService from '../services/CreateTeamService';

import TeamsRepository from '../repositories/TeamsRepository';
import PokemonsRepository from '../repositories/PokemonsRepository';

const container = createContainer();

container.register({
  createTeamService: asClass(CreateTeamService),
  listPokemonsService: asClass(ListPokemonsService),
  pokemonsRepository: asClass(PokemonsRepository),
  teamsRepository: asClass(TeamsRepository),
});

export default container;
