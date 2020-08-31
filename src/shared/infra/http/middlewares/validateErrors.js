import { isCelebrate } from 'celebrate';
import AppError from '../../../errors/AppError';
import AppValidationError from '../../../errors/AppValidationError';

/**
 * A middleware to intercept and return custom errors
 * @export
 * @param {(Error | CelebrateError | AppError | AppValidationError)} err
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Express.NextFunction} _next
 * @returns {Express.Response} An array of errors each one with field and message
 */
export default function validateErrors(err, req, res, _next) {
  if (isCelebrate(err)) {
    const celebrateErrors = [];

    err.joi.details.forEach(details => {
      const error = {
        field: details.context.key,
        message: details.message.replace(/['"]+/g, ''),
      };
      celebrateErrors.push(error);
    });
    return res.status(400).json({ errors: celebrateErrors });
  }

  if (err instanceof AppValidationError) {
    return res.status(err.status).json({ errors: err.errors });
  }

  if (err instanceof AppError) {
    return res.status(err.status).json({
      error: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    message: 'Interval Server Error',
    error: err,
  });
}
