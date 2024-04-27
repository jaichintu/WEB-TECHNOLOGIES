function outer(num1) {
  var a = 10;
  inner(5);
  function inner(num2) {
    console.log(num1 + num2);
  }
  return inner;
}

var res = outer(10);
res();



