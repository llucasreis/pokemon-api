import mongoose from 'mongoose';
import path from 'path';

export const pokemonJSONDatabase = path.resolve(
  __dirname,
  '..',
  '..',
  'pokemon.json',
);

export const createMongooseConnection = () => {
  mongoose
    .connect(process.env.APP_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB is connected.');
    })
    .catch(() => console.log('MongoDB is not connected. Check your database'));
};
