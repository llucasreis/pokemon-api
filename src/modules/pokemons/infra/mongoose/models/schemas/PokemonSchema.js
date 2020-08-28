import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  height: Number,
  weight: Number,
  xp: Number,
  types: Array,
  image: String,
});

export default PokemonSchema;
