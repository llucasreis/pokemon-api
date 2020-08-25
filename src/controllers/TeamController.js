// index, show, store, update, destroy
import CreateTeamService from '../services/CreateTeamService';
import TeamsRepository from '../repositories/TeamsRepository';

const teamsRepository = new TeamsRepository();

export default class TeamController {
  async create(req, res) {
    const { trainer_name, team_name, pokemons } = req.body;

    const createTeam = new CreateTeamService(teamsRepository);

    const team = await createTeam.execute({
      trainer_name,
      team_name,
      pokemons,
    });

    return res.json(team);
  }
}
