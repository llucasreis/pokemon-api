import FakePokemonsRepository from '../../pokemons/infra/mongoose/repositories/fakes/FakePokemonsRepository';
import FakeTeamsRepository from '../infra/mongoose/repositories/fakes/FakeTeamsRepository';

import CreateTeamService from './CreateTeamService';
import AppValidationError from '../../../shared/errors/AppValidationError';

let fakePokemonsRepository;
let fakeTeamsRepository;
let createTeam;

describe('CreateTeam', () => {
  beforeEach(() => {
    fakePokemonsRepository = new FakePokemonsRepository();
    fakeTeamsRepository = new FakeTeamsRepository();

    createTeam = new CreateTeamService(
      fakeTeamsRepository,
      fakePokemonsRepository,
    );
  });

  it('should be able to create a team', async () => {
    const team = await createTeam.execute({
      trainer_name: 'Lucas',
      team_name: 'MonoFire',
      pokemons: [
        {
          id: 59,
          name: 'arcanine',
        },
        {
          id: 257,
          name: 'blaziken',
        },
        {
          id: 663,
          name: 'talonflame',
        },
        {
          id: 609,
          name: 'chandelure',
        },
        {
          id: 485,
          name: 'heatran',
        },
        {
          id: 494,
          name: 'victini',
        },
      ],
    });

    expect(team).toHaveProperty('_id');
  });

  it('should not be able to create a team with more than 6 pokemons', async () => {
    await expect(
      createTeam.execute({
        trainer_name: 'Lucas',
        team_name: 'MonoFire',
        pokemons: [
          {
            id: 59,
            name: 'arcanine',
          },
          {
            id: 257,
            name: 'blaziken',
          },
          {
            id: 663,
            name: 'talonflame',
          },
          {
            id: 609,
            name: 'chandelure',
          },
          {
            id: 485,
            name: 'heatran',
          },
          {
            id: 494,
            name: 'victini',
          },
          {
            id: 256,
            name: 'combusken',
          },
        ],
      }),
    ).rejects.toBeInstanceOf(AppValidationError);
  });

  it('should not be able to create a team with trainer_name less than 5 characters', async () => {
    await expect(
      createTeam.execute({
        trainer_name: 'Lu',
        team_name: 'MonoFire',
        pokemons: [
          {
            id: 59,
            name: 'arcanine',
          },
          {
            id: 257,
            name: 'blaziken',
          },
          {
            id: 663,
            name: 'talonflame',
          },
          {
            id: 609,
            name: 'chandelure',
          },
          {
            id: 485,
            name: 'heatran',
          },
          {
            id: 494,
            name: 'victini',
          },
        ],
      }),
    ).rejects.toBeInstanceOf(AppValidationError);
  });

  it('should not be able to create a team with team_name less than 5 characters', async () => {
    await expect(
      createTeam.execute({
        trainer_name: 'Lucas',
        team_name: 'Mo',
        pokemons: [
          {
            id: 59,
            name: 'arcanine',
          },
          {
            id: 257,
            name: 'blaziken',
          },
          {
            id: 663,
            name: 'talonflame',
          },
          {
            id: 609,
            name: 'chandelure',
          },
          {
            id: 485,
            name: 'heatran',
          },
          {
            id: 494,
            name: 'victini',
          },
        ],
      }),
    ).rejects.toBeInstanceOf(AppValidationError);
  });

  it('should not be able to create a team if all pokemons cannot be found', async () => {
    await expect(
      createTeam.execute({
        trainer_name: 'Lucas',
        team_name: 'MonoFire',
        pokemons: [
          {
            id: 'non-valid-id',
            name: 'arcanine',
          },
          {
            id: 'non-valid-id',
            name: 'blaziken',
          },
          {
            id: 'non-valid-id',
            name: 'talonflame',
          },
          {
            id: 'non-valid-id',
            name: 'chandelure',
          },
          {
            id: 'non-valid-id',
            name: 'heatran',
          },
          {
            id: 'non-valid-id',
            name: 'victini',
          },
        ],
      }),
    ).rejects.toBeInstanceOf(AppValidationError);
  });

  it('should not be able to create a team if some pokemons cannot be found', async () => {
    await expect(
      createTeam.execute({
        trainer_name: 'Lucas',
        team_name: 'MonoFire',
        pokemons: [
          {
            id: 59,
            name: 'arcanine',
          },
          {
            id: 257,
            name: 'blaziken',
          },
          {
            id: 663,
            name: 'talonflame',
          },
          {
            id: 609,
            name: 'chandelure',
          },
          {
            id: 'non-valid-id',
            name: 'heatran',
          },
          {
            id: 'non-valid-id',
            name: 'victini',
          },
        ],
      }),
    ).rejects.toBeInstanceOf(AppValidationError);
  });
});
