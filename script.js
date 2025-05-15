//! 'task 1';

// function createCounter(n) {
//   return function (array) {
//     for (let i = 0; i < array.length; i++) {
//       console.log(n++);
//     }
//   };
// }

// const counter = createCounter(10);

// counter(['a', 'b', 'c', 'd']);

//! task 2

// function Reducer(nums, fn, init) {
//   let val = init;
//   console.log(val, '1');
//   if (nums.length < 1) return init;
//   for (let i = 0; i < nums.length; i++) {
//     val = fn(val, nums[i]);
//   }
//   console.log(val, '3');
//   return val;
// }

// console.log(
//   Reducer(
//     [1, 2, 3, 4],
//     function sum(accum, curr) {
//       return accum + curr * curr;
//     },
//     100
//   )
// );

//! task 3 closure

// function outerFunction(greeting) {
//   function innerFunction(name) {
//     console.log(`${greeting} ${name}`);
//   }
//   return innerFunction;
// }

// const beqa = outerFunction('Hello');
// beqa('Beqa');

// const tamuna = outerFunction('Hi');
// tamuna('Tamuna');

//! task 4 closure

// function outerFunction(num) {
//   function innerFunction(num2) {
//     console.log(num + num2);
//   }
//   return innerFunction;
// }

// const result = outerFunction(5);
// result = (num2) { console.log(5 + num2) }
// result(10); // console.log(5 + 10)   = 15

//! task 5 closure

// function greeting(gretin) {
//   return function (name) {
//     console.log(`${gretin} ${name}`);
//   };
// }

// const person1 = greeting('hello');
// person1('dato');

// const person2 = greeting('hi');
// person2('tamuna');

// hi dato
// hello giorgi

//! task 6 closure

// function outerFunction() {
//   let num = 0;
//   return {
//     increase: function () {
//       num++;
//       console.log('increase', num);
//     },
//     reset: function () {
//
//        console.log(num);
//       num = 0;
//       console.log('reset');
//     },
//   };
// }

// const result = outerFunction();

// result.increase();
// result.increase();
// result.increase();

// result.reset();
// result.increase();

//! task 7
// function romanToInt(s) {
//   const roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
//       result -= roman[s[i]];
//     } else {
//       result += roman[s[i]];
//     }
//   }

//   return result;
// }

// console.log(romanToInt('III')); // 3
// console.log(romanToInt('LVIII')); // 58
// console.log(romanToInt('MCMXCIV')); // 1994

//! task 8

// const taxRate = 0.3;
// const phonePrice = 900;
// const spendingTrashold = 1300;
// const bankAccountBalance = Number(prompt('what is bank acount'));

// function price() {
//   const tax = phonePrice * taxRate;
//   const total = phonePrice + tax;
//   console.log(total);
//   if (bankAccountBalance > total && total < spendingTrashold) {
//     console.log('You can buy the phone');
//     return;
//   }

//   console.log('You can not buy the phone');
// }

// price();

//! task 9

// function composition(fn, x) {
//   if (fn.length < 1) return console.log(x, 'empty');

// let res = 0;
// for (let i = +fn.length - 1; i >= 0; i--) {
//   if (i == fn.length - 1) {
//     res += fn[i](x);
//     console.log(res);
//   } else {
//     res = fn[i](res);
//     console.log(res);
//   }
// }
// console.log(res, 'final');
//   const res = fn.reduceRight((acc, func) => func(acc), x);
//   console.log(res, 'final');
// }

// composition([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4);
// composition([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x], 1);
// composition([], 42);

//! task 10

// function filteredArray(arr, fn) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//     }
//     if (fn(arr[i], i)) {
//       res.push(arr[i]);
//     }
//   }
//   console.log(res);
// }

// filteredArray([0, 10, 20, 30], function greaterThan10(n) {
//   return n > 10;
// });
// filteredArray([1, 2, 3], function firstIndex(n, i) {
//   return i === 0;
// });

// filteredArray([-2, -1, 0, 1, 2], function plusOne(n) {
//   return n + 1;
// });

//! task 11

// function circle(r) {
//   return (2 * Math.PI * r).toFixed(6);
// }

// console.log(circle(5));
// console.log(circle(10));
// console.log(circle(3));
// console.log(circle(16));

//! task 12

// function removeExclamationMarks(word) {
//   return word.replace(/[?_]+$/, '');
// }

// console.log(removeExclamationMarks('Hi!????__'));
// console.log(removeExclamationMarks('Hi!!!!!'));
// console.log(removeExclamationMarks('!Hi!!!!!'));

//! task 13

// const data1 = [3, 5, 2, 12, 7];
// const data2 = [9, 16, 6, 8, 3];

// const shalloCopy = data1.slice(1, -1);

// const concat = [...data1, ...data2];

// concat.forEach((el, i) => {
//   if (el > 3) {
//     console.log(`Dog ${1} is an adult `);
//     return;
//   }
//   console.log(`Dog ${i + 1} is a puppy `);
// });

//! task 14

// const user = 'Steven Thomas Whilliams Beka'; // stw
// const userName = user.slice().split(' ');

// function result(word) {
//   const newArr = [];
//   word.forEach((el) => {
//     newArr.push(el[0].toLowerCase());
//   });
//   return newArr.join('');
// }

// console.log(result(userName));
// const userName2 = user
//   .toLowerCase()
//   .split(' ')
//   .map((el) => el[0])
//   .join('');
// console.log(userName2);

//! task 15

// const arr1 = [1, 5, 3, 9];
// const arr2 = [4, 2, 4, 3];

// function calculate(arr, sum) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + arr[i + 1] === sum) {
//       res.push(arr[i], arr[i + 1]);
//     }
//   }
//   if (res.length < 1) return 'no result';
//   return res;
// }

// console.log(calculate(arr1, 8));
// console.log(calculate(arr2, 8));

//! task 15

// function createCounter(int) {
//   let num = int;

//   return {
//     increment: function () {
//       num++;
//       console.log(num);
//     },
//     decrement: function () {
//       num--;
//       console.log(num);
//     },
//     reset: function () {
//       num = int;
//       console.log(num);
//     },
//   };
// }

// const counter = createCounter(5);
// counter.increment();
// counter.reset();
// counter.decrement();

//! task 16

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverage = (arr1) => {
//   const humanAge = arr1.map((dog) => (dog <= 2 ? 2 * dog : 16 + dog * 4));

//   const adult = humanAge.filter((dog) => dog >= 18);

//   return adult.reduce((acc, cur) => acc + cur, 0) / adult.length;
// };

// const avg1 = calcAverage(data1);
// const avg2 = calcAverage(data2);
// console.log(avg1, avg2);

// //! task 16

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverage = (data) =>
//   data
//     .map((dog) => (dog <= 2 ? 2 * dog : 16 + dog * 4))
//     .filter((dog) => dog >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// const avg1 = calcAverage(data1);
// const avg2 = calcAverage(data2);
// console.log(avg1, avg2);

// //! task 17

// function createHelloWorld() {
//   return (data) => {
//     console.log('Hello World');
//   };
// }

// const f = createHelloWorld();
// f({}, null, 42);
// const y = createHelloWorld();
// y([]);

//! task 18

// import puppeteer from 'puppeteer';

// async function getProductData() {
//   let browser;
//   try {
//     // Launch browser with visible UI for debugging
//     browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();

//     await page.setViewport({ width: 1280, height: 800 });
//     page.setDefaultNavigationTimeout(60000);

//     // Navigate to main page
//     await page.goto('https://2nabiji.ge', {
//       waitUntil: 'networkidle2',
//     });

//     // Strategy 1: Try clicking by text content (Georgian text)
//     try {
//       const [popLink] = await page.$x(
//         "//a[contains(., 'პოპულარული') or contains(., 'პოპულარული პროდუქტები')]"
//       );
//       if (popLink) {
//         await Promise.all([
//           popLink.click(),
//           page.waitForNavigation({ waitUntil: 'networkidle2' }),
//         ]);
//       } else {
//         throw new Error('Link not found by text');
//       }
//     } catch (err) {
//       console.log('Text click failed, trying alternative methods...');

//       // Strategy 2: Try finding the link by partial href match
//       const links = await page.$$eval('a', (anchors) =>
//         anchors
//           .map((a) => a.href)
//           .find((h) => h.includes('67c8433a876e40c579c31647'))
//       );

//       if (links) {
//         await page.goto(links, { waitUntil: 'networkidle2' });
//       } else {
//         // Strategy 3: Look for visual button (take screenshot to debug)
//         await page.screenshot({ path: 'before-click.png' });
//         const button = await page.$(
//           '.popular-products-button, .btn-popular, .more-products'
//         );
//         if (button) {
//           await button.click();
//           await page.waitForNavigation({ waitUntil: 'networkidle2' });
//         } else {
//           throw new Error('Could not find popular products link');
//         }
//       }
//     }

//     // Wait for products to load (with multiple possible selectors)
//     await page.waitForSelector(
//       '.ProductCard_container__7IE0M, .product-item, .product-card',
//       {
//         timeout: 15000,
//       }
//     );

//     // Extract product data with more resilient selectors
//     const productData = await page.evaluate(() => {
//       const products = [];
//       const cards = document.querySelectorAll('.ProductCard_container__7IE0M');

//       cards.forEach((card) => {
//         products.push({
//           name: card
//             .querySelector(
//               '.ProductCard_productInfo__o003P > .ProductCard_title__Rpp75 > span'
//             )
//             ?.textContent?.trim(),
//           price: card
//             .querySelector(
//               '.ProductCard_productInfo_priceDetails__cLnm0 > .ProductCard_productInfo__price__NyCJR > span'
//             )
//             ?.textContent?.trim(),
//           image: card.querySelector('img')?.src,
//           link: card.querySelector('a')?.href,
//         });
//       });

//       return products.filter((p) => p.name && p.price);
//     });

//     console.log(`Found ${productData.length} products`);
//     console.log(productData);

//     return productData;
//   } catch (error) {
//     console.error('Scraping failed:', error);
//     await page?.screenshot({ path: 'error.png' });
//     return [];
//   } finally {
//     await browser?.close();
//   }
// }

// getProductData();

// import puppeteer from 'puppeteer';
// import { setTimeout } from 'timers/promises';

// async function scrapeSparGeorgia() {
//   const browser = await puppeteer.launch({
//     headless: false, // Set to true in production
//     defaultViewport: { width: 1280, height: 800 },
//     args: ['--no-sandbox', '--disable-setuid-sandbox'],
//   });
//   const page = await browser.newPage();

//   try {
//     // Configure browser settings
//     await page.setUserAgent(
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     );
//     page.setDefaultNavigationTimeout(60000);

//     // Navigate to SPAR Georgia's Georgian site
//     await page.goto('https://spargeorgia.com/ka', {
//       waitUntil: 'networkidle2',
//       timeout: 60000,
//     });

//     // Handle cookie consent if it appears
//     try {
//       await page.waitForSelector('.cookie-modal .btn-primary', {
//         timeout: 3000,
//       });
//       await page.click('.cookie-modal .btn-primary');
//       await setTimeout(1000);
//     } catch (e) {
//       console.log('No cookie consent found');
//     }

//     // Find and click on "პოპულარული" (Popular) section
//     try {
//       const popularLinkSelector =
//         'a:has-text("პოპულარული"), a[href*="popular"], .popular-products a';
//       await page.waitForSelector(popularLinkSelector, { timeout: 10000 });
//       await page.click(popularLinkSelector);
//       await page.waitForNavigation({ waitUntil: 'networkidle2' });
//     } catch (e) {
//       console.log('Popular link not found, trying alternative approach');
//       await page.click('a[href*="/products"]');
//       await page.waitForSelector('.product-list', { timeout: 10000 });
//     }

//     // Wait for products to load with multiple possible selectors
//     await page.waitForSelector(
//       '.product-item, .product-card, [data-product-id]',
//       {
//         timeout: 15000,
//       }
//     );

//     // Scroll to load all products (for lazy loading)
//     await autoScroll(page);

//     // Extract product data with robust selectors
//     const products = await page.evaluate(() => {
//       const productCards = Array.from(
//         document.querySelectorAll(
//           '.product-item, .product-card, [data-product-id]'
//         )
//       );

//       return productCards
//         .map((card) => {
//           const priceElement = card.querySelector(
//             '.price, .product-price, [data-price]'
//           );
//           const oldPriceElement = card.querySelector('.old-price, .price--old');

//           return {
//             name: card
//               .querySelector('.product-title, .name, .title')
//               ?.textContent?.trim(),
//             currentPrice: priceElement?.textContent?.trim(),
//             originalPrice: oldPriceElement?.textContent?.trim(),
//             discount: card
//               .querySelector('.discount, .sale-tag')
//               ?.textContent?.trim(),
//             image:
//               card.querySelector('img[src], img[data-src]')?.src ||
//               card.querySelector('img[src], img[data-src]')?.dataset.src,
//             link: card.querySelector('a[href]')?.href,
//             unit: card
//               .querySelector('.unit, .measurement')
//               ?.textContent?.trim(),
//           };
//         })
//         .filter((p) => p.name && p.currentPrice);
//     });

//     console.log(
//       `Successfully scraped ${products.length} products from SPAR Georgia`
//     );
//     console.log('Sample products:', products.slice(0, 3));

//     return products;
//   } catch (error) {
//     console.error('SPAR Georgia scraping failed:', error);
//     await page.screenshot({ path: 'spar-georgia-error.png' });
//     return [];
//   } finally {
//     await browser.close();
//   }
// }

// // Auto-scroll function for lazy-loaded content
// async function autoScroll(page) {
//   await page.evaluate(async () => {
//     await new Promise((resolve) => {
//       let totalHeight = 0;
//       const distance = 300;
//       const scrollDelay = 200;

//       const timer = setInterval(() => {
//         const scrollHeight = document.body.scrollHeight;
//         window.scrollBy(0, distance);
//         totalHeight += distance;

//         if (totalHeight >= scrollHeight - window.innerHeight) {
//           clearInterval(timer);
//           setTimeout(resolve, 1000); // Extra second after reaching bottom
//         }
//       }, scrollDelay);
//     });
//   });
// }

// // Run the scraper
// scrapeSparGeorgia();

//! task 19

// function countArgs(arg) {
//   console.log(arg.length);
// }

// countArgs([{}, null, '3']);

//! task 20
// function expect(val) {
//   return {
//     toBe: (val2) => {
//       if (val === val2) return console.log('To Be Equal');
//       return console.log('Not To Be Equal');
//     },
//     notTOBe: (val2) => {
//       if (val !== val2) return console.log('Not To Be Equal');
//       return console.log('To Be Equal');
//     },
//   };
// }

// expect(5).toBe(-5);

//! task 21

// function sortedarr(arr, fn) {
//   return arr.sort((a, b) => fn(a) - fn(b));
// }

// let res1 = sortedarr([5, 4, 1, 2, 3], (x) => x);
// let res2 = sortedarr(
//   [
//     [3, 4],
//     [5, 2],
//     [10, 1],
//   ],
//   (x) => x[1]
// );
// let res3 = sortedarr([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x);
// console.log(res1);
// console.log(res2);
// console.log(res3);

//! task22

// function isObjectEmpty(obj) {
//   console.log(Object.keys(obj).length);
//   if (Object.keys(obj).length > 0) {
//     return false;
//   }
//   return true;
// }

// isObjectEmpty({ x: 5, y: 42 });
// isObjectEmpty([null, false, 0]);
// isObjectEmpty([]);
// isObjectEmpty({ y: 10 });

//! task23

// const sleep = async (ts) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res();
//     }, ts);
//   });
// };

// async function main() {
//   for (let i = 0; i < 10; i++) {
//     await sleep(1000);
//     console.log(i);
//   }
// }
// main();

//! task24

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

// Promise.all([promise1, promise2]).then((res) => {
//   const result = res.reduce((acc, cur) => acc + cur, 0);
//   console.log(result);
// });

// ! task 25

// function removeExlamationMark(str) {
//   const res = str
//     .split('')
//     .filter((el, i) => el !== '!')
//     .join('');

//   console.log(res);
// }

// removeExlamationMark('what!!!!');
// removeExlamationMark('!!!HelloWorld!!!');

// ! task 26

// function maxMinRange(age) {
//   let min;
//   let max;

//   if (age <= 14) {
//     min = age - 0.1 * age;
//     max = age + 0.1 * age;
//     return console.log(`(${min}-${max})`);
//   }
//   min = age / 2 + 7;
//   max = 2 * (age - 7);

//   console.log(`(${min}-${max})`);
// }

// maxMinRange(22);
// maxMinRange(14);
// maxMinRange(40);

// ! task 27

// function oddOrEven(num) {
//   const res = num % 2 === 0 ? console.log('even') : console.log('odd');
// }

// oddOrEven(20);
// oddOrEven(14);
// oddOrEven(213);

// ! task 28

// function removeEverySecondElement(arr) {
//   const res = arr.filter((el, i) => i % 2 === 0);
//   console.log(res);
// }

// removeEverySecondElement([
//   'Keep',
//   'Remove',
//   'Keep',
//   'Remove',
//   'Keep',
//   'Remove',
//   'Keep',
//   'Remove',
//   'Keep',
//   'Remove',
// ]);

// ! task 29

// function square(num) {
//   return num ** 2;
// }

// console.log(square(2));
// console.log(square(4));
// console.log(square(3));
// console.log(square(5));
// console.log(square(1));

// ! task 30

// function countTo(num) {
//   const arr = [];
//   for (let i = 1; i <= num; i++) {
//     arr.push(i);
//   }
//   console.log(arr);
// }

// countTo(1);
// countTo(10);

// ! task 31

// function removeDuplicant(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicant([1, 1, 2]));
// console.log(removeDuplicant([1, 2, 1, 1, 3, 2]));

// ! task 32

// function repeatWort(n, s) {
//   const word = [];
//   for (let i = 0; i < n; i++) {
//     word.push(s);
//   }
//   console.log(word.join(''));
// }

// repeatWort(6, 'what');

// ! task 33
// function repeatWort(n, s) {
//   if (n < 0) {
//     console.error('Number must be a non-negative integer');
//   }
//   console.log(s.repeat(n));
// }

// repeatWort(6, 'what');

// ! task 34

// function replaceAllVowel(word) {
//   const vowel = 'aeiouAEIOU';
//   const res = word.split('').map((l) => {
//     if (vowel.includes(l)) {
//       return '!';
//     }
//     return l;
//   });
//   return res.join('');
//   return word.replace(/[aeiouAEIOU]/gi, '!');
// }

// console.log(replaceAllVowel('Hi!'));
// console.log(replaceAllVowel('!Hi! Hi!'));
// console.log(replaceAllVowel('aeiou'));

// ! task 35

// function greeting(name, owner) {
//   return name === owner ? `Hello boss` : 'Hello Guest';
// }

// console.log(greeting('boss', 'boss'));
// console.log(greeting('boss', 'Beqa'));
// console.log(greeting('Beqa', 'Beqa'));

// ! task 36

// function remove(s) {
//   const split = s.split('');
//   const arrNon = [];
//   for (let i = 0; i < split.length; i++) {
//     // console.log(split[i]);
//     if (split[i] !== '!') {
//       arrNon.push(i);
//     }
//     // consolelog(split[i]);
//   }

//   split.splice(arrNon.at(-1) + 1, split.length);
//   return split;
// }

// console.log(remove('hi!!!'));
// console.log(remove('!hi!'));

// ! task 37

// function result(char) {
//   if (char === 'H') {
//     return 'Hello World';
//   }
//   if (char === 'Q') {
//     return char;
//   }
//   if (char === '9') {
//     return `99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.`;
//   }
//   return 'somthing wrong';
// }

// console.log(result('H'));
// console.log(result('9'));

// ! task 38

// function getDrinkByProfession(param) {
//   switch (param.toLowerCase()) {
//     case 'jabroni':
//       return 'Patron Tequila';

//     case 'school counselor':
//       return 'Anything with Alcohol';
//     case 'programmer':
//       return 'Hipster Craft Beer';
//     case 'bike gang member':
//       return 'Moonshine';
//     case 'politician':
//       return 'Your tax dollars';
//     case 'rapper':
//       return 'Cristal';
//     default:
//       return 'Beer';
//   }
// }

// console.log(getDrinkByProfession('Jabroni'));
// console.log(getDrinkByProfession('ss'));
// console.log(getDrinkByProfession('Rapper'));

//! task 39

// let websites = [];
// function addElement() {
//   websites.push('codewars');
// }
// addElement();
// console.log(websites);

//! task 40

// function findAverage(array) {
//   if (array.length > 0) {
//     return (array.reduce((acc, cur) => acc + cur) / array.length).toFixed(2);
//   }
//   return 0;
// }

// console.log(findAverage([10, 30, 12]));
// console.log(findAverage([1, 3, 4]));
// console.log(findAverage([]));

//! task 41
// function removeSmallest(numbers) {
//   let copyArr = [...numbers];
//   let arr = [...numbers];
//   let smallestNum = numbers.at(0);
//   //   console.log(arr.length);
//   if (arr.length > 0) {
//     arr.sort((a, b) => a - b);
//     if (arr.at(0) < smallestNum) smallestNum = arr.at(0);
//     copyArr.splice(copyArr.indexOf(smallestNum), 1);
//     return copyArr;
//   }
//   return [];
// }
// function removeSmallest(numbers) {
//   if (numbers.length === 0) return numbers;

//   const index = numbers.indexOf(Math.min(...numbers));
//   console.log(index);
//   return [...numbers.slice(0, index), ...numbers.slice(index + 1)];
// }

// console.log(removeSmallest([1, 6, 2, 3, 4, 5]));
// console.log(removeSmallest([5, 3, 2, 1, 4]));

//! task 42

// function longest(s1, s2) {
//   const arr = [...s1, ...s2].sort();
//   const res = new Set(arr);
//   return [...res].join('');
// }

// console.log(longest('xyaabbbccccdefww', 'xyaabbbccccdefww'));

// ! task 43

function accum(s) {
  const word = s.split('');
  //   console.log(word);
  const result = [];
  for (let i = 0; i < word.length; i++) {
    // console.log(i);
    for (let j = i; j < word.length; j++) {
      if (i + 1 < j + 1) {
        break;
      }
      result.push(word[i].repeat(i + 1));

      //   if (j === 0) {
      //     result.push(word[j].toUpperCase());
      //   } else {
      //     result.push(word[j].toLowerCase());
      //   }
    }
  }
  return result
    .map((el) => el.at(0).toUpperCase().concat(el.slice(0, -1)))
    .join('-');
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
// console.log('cwAt');
