//var a=10;
//console.log(a);
function letTest() {
    let x = 1;
    if (true) {
      var x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }
  var arr = [1, 4, 5, 9];
  console.log(arr);
  console.log(arr.map(function (a) {
    return a * a;
}));
console.log(arr.map(cube));

function square(a) {
    return a * a;
}

function cube(a) {
    return square(a) * a;
}
function isMultipleOf2(a) {
    return !(a % 2);
}
function isMultipleOf3(a) {
    return !(a % 3);
}
function sum(a, b) {
    return a + b;
}
function multiply(a,b){
    return a*b;
}
console.log(arr.filter(isMultipleOf2));
console.log(arr.filter(isMultipleOf3));
console.log('Reduce');
console.log(arr.reduce(sum));
console.log(arr.reduce(multiply));
