// let add = (a, b) => {
//   c = a + b;
//   console.log(c);
// };

// add(10, 30);

// var a = "b";
// console.log(a.charCodeAt());
// console.log(a);

// var a = function name(params) {
//   console.log("im");
// };
// a();
// var arrow = () => {
//   console.log("im");
// };
// arrow();

// let arr = [
//   12,
//   "hi",
//   null,
//   undefined,
//   12n,
//   true,
//   Symbol(30),
//   () => console.log("iam array"),
// ];

// console.log(arr);

// console.log(arr[7]);


var testCase = "HELLO WORLD";

const result = [];
for (let c of testCase) {
  if (c.charCodeAt() >= 65 && c.charCodeAt() <= 90)
    result.push(String.fromCharCode(c.charCodeAt() + 32));
  else result.push(c);
}

console.log(result.join(""));


