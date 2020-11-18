// Print half a square 5 x 5, problem reduce to full square of #, then further to one line

// One line of 5 #'s

// for(let i = 1; i <= 5; i++){
//    process.stdout.write('#')
// }

// For complete square of #'s 5 x 5

// for(let row = 1; row <= 5; row++){
//    for(let hashSymbol = 1; hashSymbol <= 5; hashSymbol++){
//       process.stdout.write('#');
//    }
//    process.stdout.write('\n');
// }

// Reduced problem Count down by counting up

// for(let row = 1; row <= 5; row++){
//    process.stdout.write(6 - row + '\n');
// }

//Final Solution

for(let row = 1; row <= 5; row++){
   for(let hashSymbol = 1; hashSymbol <= 6 - row; hashSymbol++){
      process.stdout.write('#');
   }
   process.stdout.write('\n');
}