import mongoose from 'mongoose';
import PokemonSchema from './schemas/PokemonSchema';

const Pokemon = mongoose.model('pokemon', PokemonSchema);

export default Pokemon;
