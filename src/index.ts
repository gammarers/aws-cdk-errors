
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

export class InvalidHostingBucketDomainLabeFormatError extends BaseError {
  constructor(buketName: string, message: string = `The bucket name "${buketName}" is invalid domain label format. Each label must consist of alphanumeric characters or hyphens, must not begin or end with a hyphen, and must be between 1 and 63 characters long.`) {
    super(message);
    this.name = 'InvalidHostingBucketDomainLabeFormatError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class InvalidHostingBucketDomainFormatError extends BaseError {
  constructor(buketName: string, message: string = `The bucket name "${buketName}" is invalid domain format. Invalid domain format. The domain must consist of valid labels, each separated by a dot, and the total length must not exceed 64 characters.`) {
    super(message);
    this.name = 'InvalidHostingBucketDomainFormatError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}