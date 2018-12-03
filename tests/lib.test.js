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

describe('getCurrencies', () => {
  it('should return supported currencies', () => {
    const result = lib.getCurrencies();

    // Too general
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Too specific
    expect(result[0]).toBe('USD');
    expect(result[1]).toBe('AUD');
    expect(result[2]).toBe('EUR');
    expect(result.length).toBe(3);

    // Proper way
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');

    // Ideal way
    expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
  });
});

describe('getProduct', () => {
  it('should return the product with the given id', () => {
    const result = lib.getProduct(1);

    // compares the references of these objects in memory
    // test failed, even though these 2 objects are identical, the both have these properties, id and price
    // expect(result).toBe({ id: 1, price: 10 });

    // too specific
    // expect(result).toEqual({ id: 1, price: 10 }); // test passed

    // ideal way
    expect(result).toMatchObject({ id: 1, price: 10 });
    // or
    expect(result).toHaveProperty('id', 1);
  });
});

describe('registerUser', () => {
  it('should throw if username is falsy', () => {
    // falsy:
    // null
    // undefined
    // NaN
    // ''
    // 0
    // false

    // expect(() => { lib.registerUser(null) }).toThrow();

    const args = [null, undefined, NaN, '', 0, false];
    args.forEach(a => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it('should return a user object if valid username is passed', () => {
    const result = lib.registerUser('herri');
    expect(result).toMatchObject({ username: 'herri' });
    expect(result.id).toBeGreaterThan(0);
  });
});
