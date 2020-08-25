// import container from '../container';
import AppError from '../errors/AppError';

export default class CreateTeamService {
  constructor(teamsRepository, pokemonsRepository) {
    this.teamsRepository = teamsRepository;
    this.pokemonsRepository = pokemonsRepository;
  }

  async execute({ trainer_name, team_name, pokemons }) {
    if (trainer_name.length < 5) {
      throw new AppError(
        "Trainer's Name must be equal or more than 5 characters.",
      );
    }

    if (pokemons.length !== 6) {
      throw new AppError('Team must have 6 pokemons.');
    }

    const existentPokemons = await this.pokemonsRepository.findAllById(
      pokemons,
    );

    if (!existentPokemons) {
      throw new AppError('Could not found any pokemon.');
    }

    const existentPokemonsIds = existentPokemons.map(pokemon => pokemon.id);

    const checkInexistentPokemons = pokemons.filter(
      pokemon => !existentPokemonsIds.includes(pokemon.id),
    );

    if (checkInexistentPokemons.length > 0) {
      throw new AppError('Some pokemons could not be found.');
    }

    const team = await this.teamsRepository.create({
      trainer_name,
      team_name,
      pokemons,
    });

    return team;
  }
}
