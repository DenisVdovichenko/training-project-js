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

// function add(a, b, c) {
//   return a + b + c;
// }

// add();
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// }

// Функция проверка возраста

// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }

// Функция проверки указаного и сохраненного паролей!

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === SAVED_PASSWORD;
//   return isMatch;
// }

// Сравнение количества в заказе и реального количества товаров на складе

// function checkStorage(available, ordered) {
//   let message;
//   if (available <= ordered) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you.';
//   }
//   return message;
// }

// Комбіновані оператори

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// Перевірка кошти на рахунку - мінус баланс на карті!

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   return message;
// }
