import Team from '../models/Team';

/** Class representing a repository to access Team's data  */
export default class TeamsRepository {
  /**
   * Create a repository
   */
  constructor() {
    this.mongooseRepository = Team;
  }

  /**
   * Receive data and access database to create a new team
   * @param {Object} request - the request data to create a team.
   * @param {string} request.trainer_name - The name of the trainer.
   * @param {string} request.team_name - The name of the team.
   * @param {array} request.pokemons - The list of pokemons
   *
   * @returns {Object} a new team
   */
  async create({ trainer_name, team_name, pokemons }) {
    const team = await this.mongooseRepository.create({
      trainer_name,
      team_name,
      pokemons,
    });

    return team;
  }
}
