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

// Simple Checksum for any number of even length 


// rl.question('Enter a six-digit number: ', function(num){
//    let checksum = 0;
//    // Splits String from input into array
//    let numString = num.split('');
//    // Iterate through the array of individual digits
//    for(let digitPosition = 0; digitPosition < num.length; digitPosition++){
//       // Transform string of number in number type
//       let digitInt = parseInt(numString[digitPosition]);
//       // Check if digit needs to be doubled // Only for even numbered inputs
//       if ((digitPosition + 1) % 2 === 0) {
//          checksum += digitInt; 
//       } else {
//          checksum += doubleDigitValue(digitInt);
//       }
//    }
//    // Output the checksum and result of validity
//    process.stdout.write('Checksum is ' + checksum + '\n');
//    if (checksum % 10 === 0){
//       process.stdout.write('Checksum is divisible by 10. Valid. \n');
//    } else {
//       process.stdout.write('Checksum is not divisible by 10. Invalid. \n');
//    }
// })

// Full Problem Solution 

rl.question('Enter a number: ', function(num){
   console.log('input type', typeof(num));
   console.log("num length", num.length);
   let checksum = 0;
   // Splits String from input into array
   let numString = num.split('');
   console.log(numString);
   console.log('num split string length', numString.length);
   for(let digitPosition = 0; digitPosition < num.length; digitPosition++){
      let digitInt = parseInt(numString[digitPosition]);
      // Checking if input is even or odd length
      if(numString.length % 2 === 0) {
         // This checks if number is in the odd postion to double for an even length input
         if ((digitPosition + 1) % 2 === 0) {
            checksum += digitInt; 
         } else {
            checksum += doubleDigitValue(digitInt);
         }
      } else {
         if ((digitPosition + 1) % 2 === 0) {
            checksum += doubleDigitValue(digitInt);
         } else {
            checksum += digitInt; 
         }
      }
   }
   process.stdout.write('Checksum is ' + checksum + '\n');
   if (checksum % 10 === 0){
      process.stdout.write('Checksum is divisible by 10. Valid. \n');
   } else {
      process.stdout.write('Checksum is not divisible by 10. Invalid. \n');
   }
})

