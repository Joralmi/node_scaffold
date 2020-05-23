class CustomError extends Error {
  constructor({ message, name, statusCode }) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, CustomError);
  }
}

class ErrorBadRequest extends CustomError {
    constructor(message) {
      super({
        message,
        name: "HttpBadRequest",
        statusCode: 400,
      });
    }
  }

  module.exports = {
    CustomError,
    ErrorBadRequest
  }