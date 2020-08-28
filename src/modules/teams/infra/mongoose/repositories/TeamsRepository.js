import Team from '../models/Team';

export default class TeamsRepository {
  constructor() {
    this.mongooseRepository = Team;
  }

  async create({ trainer_name, team_name, pokemons }) {
    const team = await this.mongooseRepository.create({
      trainer_name,
      team_name,
      pokemons,
    });

    return team;
  }
}
