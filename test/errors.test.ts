import { InvalidInternalDefinitionParameterError } from '../src';

describe('Erros testing', () => {

  it('Shoud Error InvalidInternalDefinitionParameterError', () => {
    expect(() => {
      throw new InvalidInternalDefinitionParameterError('param');
    }).toThrow(InvalidInternalDefinitionParameterError);
  });

});
