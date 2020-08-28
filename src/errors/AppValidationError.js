export default class AppValidationError {
  constructor(errors = [], status = 400) {
    this.errors = errors;
    this.status = status;
  }
}
