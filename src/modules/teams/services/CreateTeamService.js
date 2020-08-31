import AppValidationError from '../../../shared/errors/AppValidationError';

/** Class representing a service to Create a Team */
export default class CreateTeamService {
  /**
   * Create a service
   * @param {TeamsRepository} teamsRepository - The repository of teams
   * @param {PokemonsRepository} pokemonsRepository - The repository of pokemons
   */
  constructor(teamsRepository, pokemonsRepository) {
    this.teamsRepository = teamsRepository;
    this.pokemonsRepository = pokemonsRepository;
  }

  /**
   * Validate data received and create a new team
   * @param {Object} request - the request data to create a team.
   * @param {string} request.trainer_name - The name of the trainer.
   * @param {string} request.team_name - The name of the team.
   * @param {array} request.pokemons - The list of pokemons
   *
   * @returns {Object} a new team
   */
  async execute({ trainer_name, team_name, pokemons }) {
    const badRequestErrors = [];
    const notFoundErrors = [];

    if (trainer_name.length < 5) {
      badRequestErrors.push({
        field: 'trainer_name',
        message: 'trainer_name length must be at least 5 characters long.',
      });
    }

    if (team_name.length < 5) {
      badRequestErrors.push({
        field: 'team_name',
        message: 'team_name length must be at least 5 characters long',
      });
    }

    if (pokemons.length === 0 || pokemons.length > 6) {
      badRequestErrors.push({
        field: 'pokemons',
        message: 'pokemons must contain less than or equal to 6 items.',
      });
    }

    if (badRequestErrors.length) throw new AppValidationError(badRequestErrors);

    const existentPokemons = await this.pokemonsRepository.findAllById(
      pokemons,
    );

    if (existentPokemons.length === 0) {
      notFoundErrors.push({
        field: 'pokemons',
        message: 'Could not found any pokemon in given array',
      });
    } else {
      const existentPokemonsIds = existentPokemons.map(pokemon => pokemon.id);

      const checkInexistentPokemons = pokemons.filter(
        pokemon => !existentPokemonsIds.includes(pokemon.id),
      );

      if (checkInexistentPokemons.length > 0) {
        notFoundErrors.push({
          field: 'pokemons',
          message: 'Some pokemons could not be found',
        });
      }
    }

    if (notFoundErrors.length)
      throw new AppValidationError(notFoundErrors, 404);

    const team = await this.teamsRepository.create({
      trainer_name,
      team_name,
      pokemons: existentPokemons,
    });

    return team;
  }
}
