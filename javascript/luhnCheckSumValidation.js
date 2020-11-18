// Setup for node stdin

const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   terminal: false
});


// rl.question('Enter a single digit number, 0-9', doubleDigitValue);

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
   console.log(sum);
   return sum;
}


// Simple Checksum fixed length
let checksum = 0;

rl.question('Enter a six-digit number: ', function(num){
   let numString = num.toString(7).split('');
   for(let digitPosition = 0; digitPosition < 6; digitPosition++){
      let digitInt = parseInt(numString[digitPosition]);
      if ((digitPosition + 1) % 2 === 0) {
         checksum += digitInt; 
      } else {
         checksum += doubleDigitValue(digitInt);
      }
   }
   process.stdout.write('Checksum is ' + checksum + '\n');
   if (checksum % 10 === 0){
      process.stdout.write('Checksum is divisible by 10. Valid. \n');
   } else {
      process.stdout.write('Checksum is divisible by 10. Invalid. \n');
   }
})



