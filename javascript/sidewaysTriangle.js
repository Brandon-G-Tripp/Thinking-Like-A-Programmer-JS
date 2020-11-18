// Write a program that produces a sideways triangle of hashes

for(let row = 1; row <= 7; row++){
   for(let hashSymbol = 1; hashSymbol <= 4 - Math.abs(4- row); hashSymbol++){
      process.stdout.write('#');
   }
   process.stdout.write('\n');
}