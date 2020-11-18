// Setup for node stdin

const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   terminal: false
});

let digit;

rl.question('Enter a single digit number, 0-9', doubleDigitValue);

// Initial checking of how to treat doubled numbers in the validation sequence

// Function to doubling numbers

function doubleDigitValue(digit){
   let doubledDigit = digit * 2;
   let sum;
   if(doubledDigit >= 10) {
      sum = 1 + doubledDigit % 10 
   } else {
      sum = doubledDigit;
   }
   process.stdout.write('Sum of digits in doubled number: '+ sum + '\n');
   return sum
}



// process.stdout.write('Enter a single digit number, 0-9');

