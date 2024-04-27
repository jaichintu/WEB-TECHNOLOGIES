// console.log((document.getElementById = myh1));
var img = document.getElementById("img");
var adr =
  "https://cdn.pixabay.com/photo/2016/07/24/21/01/thermometer-1539191_640.jpg";
img.src = adr;

var aside = document.getElementsByClassName("myaside");
console.log(aside[0]);

console.log(Array.isArray(aside));
// for (let i = 0; i < aside.length; i++) {
//     aside[i].color = random();
    
// }
var arr = Array.from(aside)
arr.forEach(element => { 
    element.color=random()
})

var list = document.getElementsByTagName("aside")
console.log(list);
var list1 = document.querySelector(".myaside")
console.log(list1);
var list2 = document.querySelector("aside")
console.log(list2);
var list3 = document.querySelectorAll(".myaside")
console.log(list3);

for (let i = 0; i < list3.length; i++){
    
    console.log(list3[i]);
}