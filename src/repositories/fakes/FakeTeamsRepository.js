import { ObjectID } from 'mongodb';

export default class TeamsRepository {
  constructor() {
    this.fakeRepository = [];
  }

  async create({ trainer_name, team_name, pokemons }) {
    const team = {
      _id: new ObjectID(),
      trainer_name,
      team_name,
      pokemons,
    };

    this.fakeRepository.push(team);

    return team;
  }
}
