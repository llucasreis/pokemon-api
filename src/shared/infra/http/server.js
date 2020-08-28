import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import validateErrors from './middlewares/validateErrors';
import { createMongooseConnection } from '../../../config/database';

const app = express();
const port = process.env.APP_PORT || 3333;

createMongooseConnection();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(validateErrors);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
