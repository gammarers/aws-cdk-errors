import { InvalidInternalDeifinitionParameterError } from '../src';

describe('Erros testing', () => {

  it('Shoud Error InvalidInternalDeifinitionParameterError', () => {
    expect(() => {
      throw new InvalidInternalDeifinitionParameterError('param');
    }).toThrow(InvalidInternalDeifinitionParameterError);
  });

});
