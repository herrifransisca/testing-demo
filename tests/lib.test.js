const lib = require('../lib');

describe('absolute', () => {
  it('should return a positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it('should return a positive number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it('should return a 0 if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe('greet', () => {
  // this test is too specific and can easily break
  // it('should return the greeting message', () => {
  //   const result = lib.greet('Herri');
  //   expect(result).toBe('Welcome Herri');
  // });

  it('should return the greeting message', () => {
    const result = lib.greet('Herri');
    expect(result).toMatch(/Herri/);
    //or
    expect(result).toContain('Herri');
  });
});
