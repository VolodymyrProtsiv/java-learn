// a = 5;
// b = 6;
// console.log(a + b);


// const a = 'xnc nxzmcnmcn zmzc';
// console.log(a.length);

// console.log('mango' && 'fpple' || null);


// створити змінні:
// freands;
// online;
// !off;

// const isOnline = true;
// const isFreand = true;
// const isOff = false;

// const canOpenChat = isOnline && isFreand && !isOff;
// console.log('can open chat', canOpenChat);
// for (i = 0; i < 500; i+= 3){
//     console.log(i);
// }

// let a = 5;
// const b = true;


//     if (a !== b) {
//         console.log(`no`);
//     } else {
//         console.log(`tes`);
//     }

// //  1 module 18/36
// const a = 1000; //pricePerDroid
// const b= 10; //orderedQuantity
// const  c = 1000; //customerCredits
// let message;
    
//     // Change code below this line
//     const totalPrice = b * a;
//    if (c >= totalPrice ){
//       message = `You ordered ${totalPrice} droids, you have ${c} credits left`;
//    } else{
//      message = `Insufficient funds!`;
//    }
  
// // console.log(message);
  
//     // Change code above this line
//     return message;


// let name;
// name = 'jdsfaKf';
// const b = name.slice(0, 1);
// const c = name.slice(1, name.length);

// // console.log (name.slice(0).includes('o'));
// console.log(b);
// console.log((b.toUpperCase())+(c.toLowerCase()));

// const a = ['gog', "vfvf", "ljwz"];
// a[1] = 'dog';
// console.log(a[1]);

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }


// Перебирання масиву по чотним числам та їх сума
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 31, 18, 14];
// let total = 0;

// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(numbers[i]);

// //  if (numbers[i] % 2 === 0){
// //    console.log('Парне число');
// //    total += numbers[i];
// //   }
// // }

// for (const number of numbers) {
//   // console.log(number);

//   if (number % 2 === 0){
//        console.log('Парне число');
//        total += number;
//       }
// }
// console.log('Total; ', total);



// Правильний логін --найти
// const logins = ['nsadoxicuxc', 'sdfghcjGCJCH', 'chjdscjhsdchjc'];
// const loginToFind = 'sdfghcjGCJCH';
// // let  message = 'error';

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log(login);
// }
// //   if (login === loginToFind) {
// //     message='Welcome!!';
// //     break;
// //   }
   
 
  
// // }
// // console.log(message);

// // for (const login of logins) {
// //   if (login === loginToFind) {
// //         message='Welcome!!';
// //         break;
// //       }
// // }

// // console.log(message);



// const message = logins.includes(loginToFind) ? 'Welcome!!!' : 'Not found';
// console.log(message);
//
// const freands = ['vova', 'alina', 'maria'];
 
// console.log(freands);


// const string = freands.join(' + ').toUpperCase();
// console.log(string);



// const arey=[2, 20, 50, 40];
// const arey1 = [2, 12, 45, 50, 70];
// let total = 0;

// const summers = arey.concat(arey1);
// for (const summer of summers) {
//     total += summer;
// }


// console.log(total);




// const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5',];
// console.table(cards);

// let cardToRemove = ' ';
// const index = cards.indexOf(cardToRemove);

// // console.log(index);
// // cards.splice(index,5);
// // console.table(cards);


// cards.splice(2, 2,'card-88');
// console.table(cards);



// const add = function (x, y) {

//     if (x > y) {
//         return 'cool'
//     }
//     return 'no';
// }

// const r = add(10, 5);
// console.log(r);


// const arrey = [1, 2, 3, 2, 3,5];
// console.log(arrey[0],arrey[arrey.length-1]);


// let add = ('mango is vegeteble cool',totalPriceWord);
// const totalPriceWord = 10;
// // let totalPrice;
// // const mass = add.split(' ');
// // console.log(mass);
// // totalPrice = (mass.length  * totalPriceWord);
// // console.log(totalPrice);

// add = add.split(' ');
// console.log(add.length *  totalPriceWord);

// pricePerWord * message.lenght.split(' ')



//  2 module task 12
// let totalPrice;

// totalPrice = message.split(" ").length * pricePerWord;
// return totalPrice;

//  2 module task 13

// let tittle;

// tittle = "Arrays for begginers";

// console.log(tittle);

// const normalizToLowerCase = tittle.toLowerCase();
// console.log(normalizToLowerCase);

// const slugify = normalizToLowerCase.split(' ').join('-');
// console.log(slugify);

//2 module task 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);


//2 module task 16
const firstArray = ["Mango", "Poly", "Houston"];
const secondArray = ["Ajax", "Chelsea", "Poly", "Houston"];
const maxLength = 5;

const newMass = firstArray.concat(secondArray);
console.log(newMass);

const newArray = newMass.slice(0, maxLength);
console.log(newArray);

// const newMass = firstArray.concat(secondArray);
// const newArray = newMass.slice(0, maxLength);
// return newArray;





