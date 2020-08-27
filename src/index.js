import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import { errors } from 'celebrate';
import routes from './routes';
import AppError from './errors/AppError';

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
app.use(errors());

app.use((err, req, res, _next) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: 'error',
    message: 'Interval Server Error',
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
