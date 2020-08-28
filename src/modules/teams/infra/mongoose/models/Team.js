import mongoose from 'mongoose';
import TeamSchema from './schemas/TeamSchema';

const Team = mongoose.model('team', TeamSchema);

export default Team;
