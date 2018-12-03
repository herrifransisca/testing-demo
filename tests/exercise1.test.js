const exercise1 = require('../exercise1');

describe('fizzBuzz', () => {
  it('should throw an exception if input not a number', () => {
    // expect(() => {
    //   exercise1.fizzBuzz('a');
    // }).toThrow();

    const args = [null, undefined, '', false];

    args.forEach(a => {
      expect(() => {
        exercise1.fizzBuzz(a);
      }).toThrow();
    });
  });

  it('should throw an exception if input is a string', () => {
    expect(() => {
      exercise1.fizzBuzz('test');
    }).toThrow();
  });

  it('should return Fizz if input can be divided by 3', () => {
    const result = exercise1.fizzBuzz(3);
    expect(result).toBe('Fizz');
  });

  it('Should return Buzz if input can be divided by 5', () => {
    const result = exercise1.fizzBuzz(5);
    expect(result).toBe('Buzz');
  });

  it('should return FizzBuzz if input can be both divided by 3 and 5', () => {
    const result = exercise1.fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });

  it('should return input value if input cannot be divided by 5 and 3, or by 5, or by 3', () => {
    const result = exercise1.fizzBuzz(7);
    expect(result).toBe(7);
  });
});
