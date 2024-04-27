var arr = ["123", "456", "789"];

let ans = 0;

for (let i = 0; i < arr.length; i++) {
  ans += arr[i].split("").reduce((acc, cv) => acc + Number(cv), 0);
  console.log(ans);
}
console.log(ans);
