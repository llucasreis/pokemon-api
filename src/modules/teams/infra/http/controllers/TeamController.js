import CreateTeamService from '../../../services/CreateTeamService';
import TeamsRepository from '../../mongoose/repositories/TeamsRepository';
import PokemonsRepository from '../../../../pokemons/infra/mongoose/repositories/PokemonsRepository';

const teamsRepository = new TeamsRepository();
const pokemonsRepository = new PokemonsRepository();

/** Class representing a controller to manage Teams */
export default class TeamController {
  /**
   * Receive data from request and create a team
   * @param {Express.Request} req - the express request
   * @param {Express.Response} res - the express response
   *
   * @returns {Express.Response} a json with a new team
   */
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
