
export class InvalidInternalDeifinitionParameterError extends Error {
  constructor(parameterName: string, message: string = `${parameterName} is invalid, because it is defined internally.`) {
    super(message);
    this.name = 'InvalidInternalDeifinitionParameterError';
  }
}