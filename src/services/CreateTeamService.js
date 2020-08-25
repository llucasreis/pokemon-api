import AppError from '../errors/AppError';

export default class CreateTeamService {
  constructor(teamsRepository) {
    this.teamsRepository = teamsRepository;
  }

  async execute({ trainer_name, team_name, pokemons }) {
    if (trainer_name.length < 5) {
      throw new AppError("Trainer's Name must be more than 5 caracters");
    }

    if (pokemons.length !== 6) {
      throw new AppError('Team must have 6 pokemons');
    }

    const team = await this.teamsRepository.create({
      trainer_name,
      team_name,
      pokemons,
    });

    return team;
  }
}
