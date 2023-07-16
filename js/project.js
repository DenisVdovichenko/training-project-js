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

// Перевірка пароля

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// Перевірка товарів на складі

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   return message;
// }

// Перевірка на входження в діапазон числа

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   return isInRange;
// }

// Проверка подписки

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || 'vip' === subType;

//   return canAccessContent;
// }

// Перевірка перетворення в протилежне

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;

//   return isNotInRange;
// }

// Обчислення знижок у %

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent <= 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }

// Тернарные операторы

// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';
//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
//   return message;
// }

// Перевірка паролю

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;

//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;

//     default:
//       message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// Перевірка і оголошення вартості доставки для країн

// function getShippingCost(country) {
//   let message;

//   switch (country) {
//     case 'China':
//       message = 'Shipping to China will cost 100 credits';
//       break;
//     case 'Chile':
//       message = 'Shipping to Chile will cost 250 credits';
//       break;
//     case 'Australia':
//       message = 'Shipping to Australia will cost 170 credits';
//       break;

//     case 'Jamaica':
//       message = 'Shipping to Jamaica will cost 120 credits';
//       break;

//     default:
//       message = 'Sorry, there is no delivery to your country';
//       break;
//   }
//   return message;
// }

// Звертання до довжини рядка і його елементів

// const courseTopic = 'JavaScript essentials';

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }

// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом(параметр string),
//     і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longestWord = '';
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// }

Напиши функцію getEvenNumbers(start, end),
яка повертає масив усіх парних чисел від start до end.Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).

function getEvenNumbers(start, end) {
  const evenNumbers = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }

  return evenNumbers;
}
