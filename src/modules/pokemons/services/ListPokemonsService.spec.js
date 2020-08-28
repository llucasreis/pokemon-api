import FakePokemonRepository from '../infra/mongoose/repositories/fakes/FakePokemonsRepository';
import ListPokemonsService from './ListPokemonsService';

let fakePokemonRepository;
let listPokemons;

describe('ListPokemons', () => {
  beforeEach(() => {
    fakePokemonRepository = new FakePokemonRepository();
    listPokemons = new ListPokemonsService(fakePokemonRepository);
  });

  it('should be able to list the pokemons', async () => {
    const pokemons = await listPokemons.execute({ name: null, type: null });

    expect(pokemons).toEqual(
      expect.arrayContaining([
        {
          id: 3,
          name: 'venusaur',
          height: 2.0,
          weight: 100.0,
          xp: 236,
          types: ['poison', 'grass'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        },
        {
          id: 807,
          name: 'zeraora',
          height: 1.5,
          weight: 44.5,
          xp: 270,
          types: ['electric'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png',
        },
      ]),
    );
  });

  it('should be able to filter pokemons by name', async () => {
    const pokemons = await listPokemons.execute({ name: 'cha', type: null });

    expect(pokemons).toEqual(
      expect.arrayContaining([
        {
          id: 4,
          name: 'charmander',
          height: 0.6,
          weight: 8.5,
          xp: 62,
          types: ['fire'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        },
        {
          id: 113,
          name: 'chansey',
          height: 1.1,
          weight: 34.6,
          xp: 395,
          types: ['normal'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
        },
        {
          id: 441,
          name: 'chatot',
          height: 0.5,
          weight: 1.9,
          xp: 144,
          types: ['flying', 'normal'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png',
        },
      ]),
    );
  });

  it('should be able to filter pokemons by type', async () => {
    const pokemons = await listPokemons.execute({ name: null, type: 'fire' });

    expect(pokemons).toEqual(
      expect.arrayContaining([
        {
          id: 467,
          name: 'magmortar',
          height: 1.6,
          weight: 68.0,
          xp: 243,
          types: ['fire'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png',
        },
        {
          id: 485,
          name: 'heatran',
          height: 1.7,
          weight: 430.0,
          xp: 270,
          types: ['steel', 'fire'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png',
        },
      ]),
    );
  });

  it('should be able to filter pokemons by multiple types', async () => {
    const pokemons = await listPokemons.execute({
      name: null,
      type: 'fire,dragon',
    });

    expect(pokemons).toEqual(
      expect.arrayContaining([
        {
          id: 610,
          name: 'axew',
          height: 0.6,
          weight: 18.0,
          xp: 64,
          types: ['dragon'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png',
        },
        {
          id: 59,
          name: 'arcanine',
          height: 1.9,
          weight: 155.0,
          xp: 194,
          types: ['fire'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
        },
      ]),
    );
  });

  it('should be able to filter pokemons by name and type', async () => {
    const pokemons = await listPokemons.execute({ name: 'cha', type: 'fire' });

    expect(pokemons).toEqual(
      expect.arrayContaining([
        {
          id: 6,
          name: 'charizard',
          height: 1.7,
          weight: 90.5,
          xp: 240,
          types: ['flying', 'fire'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        },
        {
          id: 390,
          name: 'chimchar',
          height: 0.5,
          weight: 6.2,
          xp: 62,
          types: ['fire'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png',
        },
      ]),
    );
  });

  it('should be able to filter pokemons by name and multiple types', async () => {
    const pokemons = await listPokemons.execute({
      name: 'ch',
      type: 'fire,dragon',
    });

    expect(pokemons).toEqual(
      expect.arrayContaining([
        {
          id: 445,
          name: 'garchomp',
          height: 1.9,
          weight: 95.0,
          xp: 270,
          types: ['ground', 'dragon'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
        },
        {
          id: 609,
          name: 'chandelure',
          height: 1.0,
          weight: 34.3,
          xp: 234,
          types: ['fire', 'ghost'],
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png',
        },
      ]),
    );
  });
});
