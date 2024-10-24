import {
  DeprecatedParameterUsageError,
  InvalidHostingBucketDomainFormatError, InvalidHostingBucketDomainLabeFormatError, InvalidInternalDefinitionParameterError,
} from '../src';

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

  it('Should Error InvalidHostingBucketDomainLabeFormatError', () => {
    expect(() => {
      throw new InvalidHostingBucketDomainLabeFormatError('example.com');
    }).toThrow(InvalidHostingBucketDomainLabeFormatError);
  });

  it('Should Error InvalidHostingBucketDomainFormatError', () => {
    expect(() => {
      throw new InvalidHostingBucketDomainFormatError('example?1.com');
    }).toThrow(InvalidHostingBucketDomainFormatError);
  });

});
