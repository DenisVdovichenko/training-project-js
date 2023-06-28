// // Data types

// // String
// const greetings = 'Hello world!';
// console.log(typeof greetings);

// // String
// const num = 100;
// console.log(typeof num);

// // Boolean
// const BoolTrue = true;
// const BoolFalse = false;
// console.log(typeof BoolTrue);
// console.log(typeof BoolFalse);

// const someNullValue = null;
// console.log(someNullValue);

// let someUndefinedValue;
// console.log(someUndefinedValue);

// let userImg = null;

//object
// const obj = {};
// const obj2 = new Object();
// console.log(typeof obj);
// console.log(typeof obj2);

// const buttonADD = document.getElementById('buttonADD');
// document.body.innerHTML = buttonADD;
// console.log(buttonADD);

// const x = 12.5;
// const y = 15;
// const c = x + y + true;
// console.log(c);

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
//   const result = a + b + c;
//   console.log(`Addition result equals ${result}`);
// }

function add(a, b, c) {
  return a + b + c;
}

// let result = add;
// result();

add();
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));
