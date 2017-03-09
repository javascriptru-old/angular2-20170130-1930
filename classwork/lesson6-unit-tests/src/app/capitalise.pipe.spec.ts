import { CapitalisePipe } from './capitalise.pipe';

describe('CapitalisePipe', () => {
  let pipe:CapitalisePipe;

  beforeEach(() => {
    pipe = new CapitalisePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should work with empty string', () => {
    expect(pipe.transform('')).toEqual('');
  });

  it('should Capitalise', () => {
    expect(pipe.transform('wow')).toEqual('WOW');
  });

  it('should throw Error if not a string', () => {
    expect(() => pipe.transform(null)).toThrow();
    expect(() => pipe.transform(undefined)).toThrow();
    expect(() => pipe.transform(null)).toThrowError('Should be string!');
  });
});
