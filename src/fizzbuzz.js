function fizzBuzz(value) {
    
    if ((typeof value) !== 'number') {
        throw new TypeError(`${value} is not a valid input`);
    }

    if (value % 15 === 0) {           //multiples of 3 and 5
        return 'Fizz Buzz';
    } else if (value % 3 === 0) {     //multiples of 3 
        return 'Fizz';
    } else if (value % 5 === 0) {     //multiples of 5
        return 'Buzz';
    }
    return value;
}

module.exports = fizzBuzz;
