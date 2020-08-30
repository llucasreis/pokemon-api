import CreateTeamService from '../../../services/CreateTeamService';
import TeamsRepository from '../../mongoose/repositories/TeamsRepository';
import PokemonsRepository from '../../../../pokemons/infra/mongoose/repositories/PokemonsRepository';

const teamsRepository = new TeamsRepository();
const pokemonsRepository = new PokemonsRepository();

export default class TeamController {
  async create(req, res) {
    const { trainer_name, team_name, pokemons } = req.body;

    const createTeam = new CreateTeamService(
      teamsRepository,
      pokemonsRepository,
    );

    const team = await createTeam.execute({
      trainer_name,
      team_name,
      pokemons,
    });

    return res.json(team);
  }
}
