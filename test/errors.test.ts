import { DeprecatedParameterUsageError, InvalidInternalDefinitionParameterError } from '../src';

describe('Erros testing', () => {

  it('Shoud Error InvalidInternalDefinitionParameterError', () => {
    expect(() => {
      throw new InvalidInternalDefinitionParameterError('param');
    }).toThrow(InvalidInternalDefinitionParameterError);
  });

  it('Should Error DeprecatedParameterUsageError', () => {
    expect(() => {
      throw new DeprecatedParameterUsageError('param');
    }).toThrow(DeprecatedParameterUsageError);
  });

});
