import mongoose from 'mongoose';
import { Joi } from 'celebrate';

export const TeamSchemaValidation = {
  body: {
    trainer_name: Joi.string().required(),
    team_name: Joi.string().required(),
    pokemons: Joi.array().required(),
  },
};

const TeamSchema = new mongoose.Schema({
  trainer_name: {
    type: String,
    required: true,
  },
  team_name: {
    type: String,
    required: true,
  },
  pokemons: {
    type: [],
    required: true,
  },
});

export default TeamSchema;
