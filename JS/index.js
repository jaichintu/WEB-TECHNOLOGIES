// var a = 10;
// let b = "hi";
// const c = true;

// let str = "      trim from start";
// let final = ""; //for storing
// let flag = true; // for condition
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " " && flag === true) {
//     continue;
//   } else {
//     flag = false;
//     final = final + str[i];
//   }
// }
// console.log(final);
// var num = Infinity;
// var str = "      ";

// var flag = false;

// console.log(typeof Number(num));
// console.log(typeof Number(str));
// console.log();

// var one = 1;
// var two = 2;

// function add(x, y) {
//   var a = x;
//   var b = y;

//   return a + b;
//   console.log(a + b);
// }

// var three = 3;
// console.log(one);
// console.log(two - 10);
// console.log(three + NaN);
// console.log(add(10, 40));
// add(60, 40);
// console.log("100");
// console.log(typeof NaN);

// var a = 12;
// var b = 100;
// if (1) {
//   var c = 200;
//   let d = 300;
// }
// function test() {
//   var x = 400;
//   let y = 500;
//   console.log(x, y);
// }
// test();
// console.log(a, b);
// console.log(c, d);

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

function isPrime(num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

for (let i = 1; i <= 10; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversed;
}

console.log(reverseNumber(12345)); // Output: 54321

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello")); // Output: olleh

function getPrimeFactors(num) {
  let primeFactors = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      primeFactors.push(i);
      num /= i;
    }
  }
  return primeFactors;
}

for (let i = 1; i <= 20; i++) {
  console.log(`Prime factors of ${i}: ${getPrimeFactors(i)}`);
}
