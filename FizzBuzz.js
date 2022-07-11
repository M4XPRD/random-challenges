// Solution №1:

const firstFizzBuzz = () => {
  for (let number = 1; number <= 100; number += 1) {
    switch (true) {
      case (number % 3 === 0 && number % 5 === 0):
        console.log('FizzBuzz');
        break;
      case (number % 3 === 0):
        console.log('Fizz');
        break;
      case (number % 5 === 0):
        console.log('Buzz');
        break;
      default:
        console.log(number);
    }
  }
};

firstFizzBuzz();

// Solution №2:

const secondfizzBuzz = () => {
  for (let number = 1; number <= 100; number += 1) {
    let output = '';
    if (number % 3 === 0) {
      output += 'Fizz';
    } if (number % 5 === 0) {
      output += 'Buzz';
    }
    console.log(output || number);
  }
};

secondfizzBuzz();
