'use strict'
// 1. Реализовать возведение в целую степень. (pow(base, exponent) => base**exponent, где base любое число, exponent - натуральное (1, 2, 3) или * целое число(-2, -1, 0, 1, 2)).

function pow(base, exponent) {

   if (exponent > 1) {
      return base * pow(base, exponent - 1);
   } else if (exponent < 0) {
      return 1 / (base * pow(base, Math.abs(exponent) - 1));
   } else if (exponent === 0) {
      return 1;
   } else {
      return base;
   }
}

// 2. Реализовать вывод в консоль скобок (// bracketWrapper3(3); // => сразу в консоль)

function bracketWrapper3(n) {
   function count(n) {
      if (n === 1) {
         return '()';
      } else {
         return `(${count(n - 1)})`;
      }
   }
   console.log(count(n));
}

bracketWrapper3(3);