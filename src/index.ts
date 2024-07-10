
abstract class BaseError {
  name: string;
  message: string;

  protected constructor(message: string) {
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

export class DeprecatedParameterUsageError extends BaseError {
  constructor(parameterName: string, message: string = `The parameter "${parameterName}" is deprecated and will be removed in future versions. Please update your code to use the recommended parameters.`) {
    super(message);
    this.name = 'DeprecatedParameterUsageError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}