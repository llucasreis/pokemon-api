// import container from '../container';
import AppValidationError from '../../../shared/errors/AppValidationError';

export default class CreateTeamService {
  constructor(teamsRepository, pokemonsRepository) {
    this.teamsRepository = teamsRepository;
    this.pokemonsRepository = pokemonsRepository;
  }

  async execute({ trainer_name, team_name, pokemons }) {
    const badRequestErrors = [];
    const notFoundErrors = [];

    if (trainer_name.length < 5) {
      badRequestErrors.push({
        field: 'trainer_name',
        message: 'trainer_name length must be at least 5 characters long.',
      });
      // throw new AppValidationError(
      //   'trainer_name',
      //   'trainer_name length must be at least 5 characters long.',
      // );
    }

    if (team_name.length < 5) {
      badRequestErrors.push({
        field: 'team_name',
        message: 'team_name length must be at least 5 characters long',
      });
      // throw new AppValidationError(
      //   'team_name',
      //   'team_name length must be at least 5 characters long',
      // );
    }

    if (pokemons.length === 0 || pokemons.length > 6) {
      badRequestErrors.push({
        field: 'pokemons',
        message: 'pokemons must contain less than or equal to 6 items.',
      });
      // throw new AppValidationError(
      //   'pokemons',
      //   'pokemons must contain less than or equal to 6 items.',
      // );
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
      // throw new AppValidationError(
      //   'pokemons',
      //   'Could not found any pokemon',
      //   404,
      // );
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
        // throw new AppValidationError(
        //   'pokemons',
        //   'Some pokemons could not be found.',
        //   404,
        // );
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
