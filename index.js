const prompt = require('prompt');
const fizzBuzz = require('./src/fizzbuzz.js');

//Schema to validate prompt
const schema = {
    properties: {
      number: {
        pattern: /^(0|[1-9][0-9]*)$/,
        message: 'Invalid Input',
        required: true
      }
    }
};

console.log('================');
console.log('=== FizzBuzz ===');
console.log('================ \n');

console.log('**** Introduce a number for the FizzBuzz ****\n');

prompt.start();
prompt.get(schema, (err, result) => {
    
    const arr = [];
    for(let i = 1; i <= result.number; i++){
        arr.push(fizzBuzz(i));
    }

    console.log(arr.join());
})