import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import routes from './routes';
import validateErrors from './middlewares/validateErrors';

const app = express();
const port = process.env.APP_PORT || 3333;

mongoose
  .connect(process.env.APP_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB is connected.');
  })
  .catch(() => console.log('MongoDB is not connected. Check your database'));

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(validateErrors);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
