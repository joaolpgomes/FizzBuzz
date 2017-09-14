const fizzBuzz = require('./fizzbuzz.js');

describe('FizzBuzz Test', () => {
  
    it('return Fizz for multiples of 3', () => {      
      [3, 6, 9, 12, 18, 21, 24, 27, 33].forEach((value) => {
        expect(fizzBuzz(value)).toBe('Fizz');
      });
    });

    it('return Fizz for multiples of 3 and 5', () => {
      [15, 30, 45, 60, 75, 90, 105].forEach((value) => {
        expect(fizzBuzz(value)).toBe('Fizz Buzz');
      });
    });

    it('return Fizz for multiples of 5', () => {
      [5, 10, 20, 25, 35, 40, 45, 50].forEach((value) => {
        expect(fizzBuzz(value), 'Buzz');
     });
    });

    it('return value when not multiple of 3 or 5', () => {
      [1, 2, 4, 7, 8, 11, 13, 14].forEach((value) => {
        expect(fizzBuzz(value), value);
      });
    });

    it('should throw error for non numerical input', () => {
      expect(() => { fizzBuzz('not a number') }).toThrowError(TypeError, "not a number is not a valid input");
    });

});
