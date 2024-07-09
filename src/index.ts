
abstract class BaseError {
  name: string;
  message: string;

  constructor(message: string) {
    this.name = 'BaseError';
    this.message = message;
    Object.setPrototypeOf(this, Error.prototype);
  }
}

export class InvalidInternalDefinitionParameterError extends BaseError {
  constructor(parameterName: string, message: string = `${parameterName} is invalid, because it is defined internally.`) {
    super(message);
    this.name = 'InvalidInternalDefinitionParameterError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
