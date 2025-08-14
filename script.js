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
    }
  }
  return result
    .map((el) => el.at(0).toUpperCase().concat(el.slice(0, -1)))
    .join('-');
}

// console.log(accum('abcd'));
// console.log(accum('RqaEzty'));
// // console.log('cwAt');

//! task 44
// function accum(s) {
//   return s
//     .split('')
//     .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
//     .join('-');
// }

// console.log(accum('abcd'));
// console.log(accum('RqaEzty'));

//! task 45
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// Goal Scorer
// game.scored.map((player, i) => console.log(`Goal ${i + 1}: ${player}`));
// for (const [i, score] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${score}`);
// }

//avarage odds

// const values = (
//   Object.values(game.odds).reduce((acc, cur) => acc + cur) / 3
// ).toFixed(2);

// const odds = Object.values(game.odds);
// let avarage = 0;

// for (const odd of odds) avarage += odd;
// avarage /= odds.length;
// console.log(avarage.toFixed(2));

// for (const [teams, odds] of Object.entries(game.odds)) {
//   const teamStr = teams === 'x' ? 'draw' : `victory ${game[teams]}`;
//   console.log(`Odd of ${teamStr} ${odds}`);
// }

// let scorrers = {};
// for (const [i, player] of Object.entries(game.scored)) {
//   if (!scorrers[player]) {
//     scorrers[player] = 1;
//   } else {
//     scorrers[player] += 1;
//   }
//   console.log(scorrers);
// }

//! task 46

// function greeting() {
//   return (name) => {
//     console.log(`Hello ${name}`);
//   };
// }

// const user = greeting();
// user('Dato');
// user('Beka');

//! task 47

// function makeMultiplier(multiplier) {
//   return function multiply(number) {
//     console.log(number * multiplier);
//   };
// }

// const number = makeMultiplier(5);
// number(10);
// number(2);
// number(3);

//! task 48
// function counter() {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//     },
//     decrement() {
//       count--;
//     },
//     getCount() {
//       console.log(count);
//     },
//   };
// }

// const result = counter();
// result.increment();
// result.increment();
// result.getCount();
// result.decrement();
// result.getCount();

//! task 49

// function createLogger(message) {
//   return function logger() {
//     console.log(message);
//   };
// }

// const message = createLogger('WHats up brother');
// message();

//! task 50

// function checkAge(age) {
//   if (age < 13) {
//     return 'child';
//   }

//   if (age >= 13 && age <= 19) {
//     return 'Teenager';
//   }

//   return 'Adult';
// }

// console.log(checkAge(18));
// console.log(checkAge(25));
// console.log(checkAge(13));

//! task 51

// function checkNumber(num) {
//   if (num % 2 === 0) {
//     return 'even';
//   }

//   return 'odd';
// }

// console.log(checkNumber(10));
// console.log(checkNumber(34));
// console.log(checkNumber(31));

//! task 52

// function gradingSystem(num) {
//   if (num < 60) return 'F';
//   if (num < 70) return 'D';
//   if (num < 80) return 'C';
//   if (num < 90) return 'B';
//   return 'A';
// }

// console.log(gradingSystem(43));
// console.log(gradingSystem(73));
// console.log(gradingSystem(80));
// console.log(gradingSystem(92));

//! task 53

// function logicSimulation(userName, password) {
//   if (userName !== 'admin') return 'User not found';
//   if (userName === 'admin' && password !== '1234') return 'Wrong password';
//   return 'Login Successful';
// }

// console.log(logicSimulation('admin', '1234'));
// console.log(logicSimulation('admin', '3234'));
// console.log(logicSimulation('admi1n', '3234'));

//! task 54
// function checkSign(num) {
//   if (typeof num !== 'number') return 'please enter the number';
//   if (num < 0) return 'Negative';
//   if (num > 0) return 'Positive';
//   return 'Zero';
// }

// console.log(checkSign(10));
// console.log(checkSign(-1));
// console.log(checkSign('ab'));

//! task 55

// function getDayOfWeek(num) {
//   console.log(num === 1);
//   switch (num) {
//     case 1:
//       console.log('monday');
//       break;
//     case 2:
//       console.log('tusday');
//       break;
//     case 3:
//       console.log('wednesday');
//       break;
//     case 4:
//       console.log('thursday');
//       break;
//     case 5:
//       console.log('friday');
//       break;
//     case 6:
//       console.log('saturday');
//       break;
//     case 7:
//       console.log('sunday');
//       break;
//     default:
//       console.log('somthing went wrong');
//   }
// }

// getDayOfWeek(1);
// getDayOfWeek(6);
// getDayOfWeek(12);

//! task 56

// function calculator(num1, num2, operator) {
//   switch (operator) {
//     case '+':
//       console.log(num1 + num2);
//       break;
//     case '-':
//       console.log(num1 - num2);
//       break;
//     case '/':
//       console.log(num1 / num2);
//       break;
//     case '*':
//       console.log(num1 * num2);
//       break;
//     default:
//       console.log('somthing wrong');
//   }
// }

// calculator(1, 2, '+');
// calculator(10, 2, '-');
// calculator(10, 3, '*');

//! task 56

// function trafficLight(color) {
//   switch (color) {
//     case 'red':
//       console.log('stop');
//       break;
//     case 'yellow':
//       console.log('Slow down');
//       break;
//     case 'green':
//       console.log('go');
//       break;
//     default:
//       console.log('invalid color');
//   }
// }

// trafficLight('red');

//! task 57

// function fruitPriceChecker(fruit) {
//   switch (fruit) {
//     case 'apple':
//       console.log('$1');
//       break;
//     case 'banana':
//       console.log('$0.5');
//       break;
//     case 'orange':
//       console.log('$0.8');
//       break;
//     default:
//       console.log('Not available');
//   }
// }

// fruitPriceChecker('apple');
// fruitPriceChecker('banana');
// fruitPriceChecker('banaa');

// function gradeMessage(grade) {
//   switch (grade) {
//     case 'A':
//       console.log('Excellent');
//       break;
//     case 'B':
//       console.log('Good');
//       break;
//     case 'C':
//       console.log('Average');
//       break;
//     case 'D':
//       console.log('Poor');
//       break;
//     case 'F':
//       console.log('Fail');
//       break;
//     default:
//       console.log('Invalid grade');
//   }
// }

// gradeMessage('A');
// gradeMessage('D');
// gradeMessage('B');

//! task 59

// let num = 0;
// let condition = false;

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     if (i === 6 && j === 6) {
//       console.log('first');
//       condition = true;
//       break;
//     }

//     num++;
//   }
//   console.log(i);
// }
// console.log(condition);

// console.log(num, 'num');

// let num = 0;
// let condition = false;

// outher: for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     if (i === 5 && j === 5) {
//       console.log('first');
//       condition = true;
//       break outher;
//     }

//     num++;
//   }
// }
// console.log(condition);

// console.log(num, 'num');

// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

// let i = 0;

// while (i < 10) {
//   i++;
//   if (i === 3) continue;
//   console.log(i);
// }
// let num = 0;
// let condition = false;
// label: for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     if (i === 5 && j === 5) {
//       condition = true;
//       console.log(j);
//       continue label;
//     }
//     num++;
//   }
//   // console.log(i);
// }
// console.log(num);

//! task 59

// console.log(Number('2025') + 10); // 2035
// console.log(100 + ' points'); // 100 points
// console.log('10' - '3' - 2 + '5'); // 55
// console.log(Number('Hello')); // NaN
// console.log(true + 5); // 6
// console.log(false + 5); // NaN
// console.log('20' + 5 + 10); // 20510
// console.log(Boolean('0')); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(1)); //true
// console.log(Boolean('')); // false
// console.log(Boolean('hello')); //true
// console.log(Boolean(undefined)); //false
// console.log(Boolean(null)); //false

// do {
//   console.log('hello');
// } while (1 > 5);

// main task

// function StopWatch() {
//   let time = { x: 0 };

//   this.start = function () {
//     time = new Date().getTime();
//   };
//   this.stop = function () {
//     let newTime = new Date().getTime();

//     console.log(newTime - time);
//   };
//   this.reset = function () {
//     console.log('reset');
//   };
//   this.pause = function () {
//     console.log('pause');
//   };

//   Object.defineProperty(this, time, {
//     get: function () {
//       return 'hello';
//     },
//   });
// }
// const sw = new StopWatch();
// sw.start();
// console.log(sw.time());
// // sw.stop();

// function Book(title, author, pages) {
//   let rating = 3;
//   (this.title = title), (this.author = author), (this.pages = pages);
//   this.getSummary = function () {
//     console.log(`Book: ${this.title} by ${this.author}, ${this.pages} pages`);
//   };

//   Object.defineProperty(this, 'rating', {
//     get: function () {
//       return rating;
//     },
//     set: function (value) {
//       if (typeof value !== 'number' || value < 0 || value > 5)
//         throw new Error('invalid rating');

//       rating = value;
//     },
//   });
// }

// const AnnaKarenina = new Book('Anna Karenina', 'Lev Tolstoi', 400);
// AnnaKarenina.getSummary();
// console.log(AnnaKarenina.rating);
// AnnaKarenina.rating = 6;
// console.log(AnnaKarenina.rating);

// function BankAccount(accountHolder, currency) {
//   let balance = 0;
//   this.accountHolder = accountHolder;
//   this.currency = currency;
//   this.deposit = function (amount) {
//     if (typeof amount !== 'number' || amount < 0)
//       throw new Error('Invalid Amount for Deposit');
//     balance += amount;
//   };

//   this.withdraw = function (amount) {
//     if (typeof amount !== 'number' || amount > balance || amount < 0)
//       throw new Error('Invalid Amount for Withdraw');
//     balance -= amount;
//   };

//   Object.defineProperty(this, 'balance', {
//     get: function () {
//       return `${balance}${this.currency}`;
//     },
//     set: function (amount) {
//       throw new Error('Use deposit/withdraw methods.');
//     },
//   });
// }

// const account1 = new BankAccount('Beka Tavkhelidze', 'USD');
// // account1.deposit(-111);
// console.log(account1.balance);

//! factory

// function user(name, age) {
//   return {
//     name,
//     age,
//     isAdult: age >= 18,
//   };
// }

// const beqa = user('Beka', 22);
// console.log(beqa);
// const dato = user('Dato', 13);
// console.log(dato);

// function createCar(color, year) {
//   return {
//     color,
//     year,
//     getAge: function () {
//       return 2025 - year;
//     },
//   };
// }

// const bmw = createCar('BMW', 2015);
// console.log(bmw.getAge());
// const mercedec = createCar('MERCEDES', 2024);
// console.log(mercedec);
// console.log(mercedec.getAge());

//! factory bank

// function bank() {
//   let balance = 1000;
//   return {
//     deposit: function (amount) {
//       if (amount > 0) return (balance += amount);
//       throw new Error('invalid deposit number');
//     },
//     withdraw: function (amount) {
//       if (amount < 0 || amount > balance)
//         throw new Error('invalid withdraw amount');
//       return (balance -= amount);
//     },
//     getBalance: () => {
//       return balance;
//     },
//   };
// }

// const myBank = bank();
// myBank.deposit(100);
// console.log(myBank.getBalance());
// myBank.withdraw(50);
// console.log(myBank.getBalance());
// myBank.withdraw(1000);
// console.log(myBank.getBalance());

//! construction function

// function CreateCar(color, year) {
//   (this.color = color),
//     (this.year = year),
//     (this.getAge = function () {
//       return new Date().getFullYear() - year;
//     });
// }

// const bmw = new CreateCar('BMW', 2020);
// console.log(bmw.getAge());

// function Bank() {
//   let balance = 1000;
//   this.deposit = function (amount) {
//     if (amount < 0) throw new Error('Invalid deposit Withdraw');
//     balance += amount;
//   };
//   this.withdraw = function (amount) {
//     if (amount < 0 || amount > balance)
//       throw new Error('Invalid withdraw amount');
//     balance -= amount;
//   };
//   Object.defineProperty(this, 'balance', {
//     get: function () {
//       return balance;
//     },
//     set: function (amount) {
//       console.log('what');
//     },
//   });
// }

// const myAccount = new Bank();
// myAccount.balance = 10;
// myAccount.deposit(100);
// myAccount.withdraw(1200);
// console.log(myAccount.balance);

// var twoSum = function (nums, target) {
//   let res = [];
//   output: for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j && nums[i] + nums[j] === target) {
//         res.push(i);
//         res.push(i);

//         console.log(nums[i] + nums[j] === target);
//         console.log(nums[i]);
//         console.log(nums[j]);
//         console.log(i);
//         console.log(j);
//         break output;
//       }
//     }
//   }
//   return res;
// };

// twoSum([3, 2, 4], 6);

//! oop

//!class

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }

//   start() {
//     console.log(`The ${this.brand} car started`);
//   }
// }

// const BMW = new Car('Bmw', 2016);
// BMW.start();

//! object

// const car = {
//   brand: 'BMW',
//   year: 2016,
//   start() {
//     console.log(`THe ${this.brand} car started`);
//   },
// };

// car.start();

//! rectangle 1

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     console.log(`area is ${this.width * this.height}`);
//   }
// }

// const ract1 = new Rectangle(4, 5);
// ract1.getArea();

//! calc 2
// const calculator = {
//   add(a, b) {
//     console.log(a + b);
//   },
//   subtract(a, b) {
//     console.log(a - b);
//   },

//   multiply(a, b) {
//     console.log(a * b);
//   },

//   divide(a, b) {
//     console.log(a / b);
//   },
// };

// calculator.add(2, 4);
// calculator.subtract(4, 2);

// ! user 3

// class User {
//   constructor(name, email) {
//     this.email = email;
//     this.name = name;
//   }

//   getInfo() {
//     console.log(`user ${this.name} has email ${this.email}`);
//   }
// }

// const beka = new User('beka', 'bekaTav4Gmail.com');
// beka.getInfo();

// ! object 4

// const book = {
//   title: 'book title',
//   author: 'book author',
//   describe() {
//     console.log(`book ${this.title} is written by ${this.author}`);
//   },
// };

// book.describe();

// ! ენკაფსულაცია

// class Person {
//   #name;
//   constructor(name) {
//     this.#name = name;
//   }

//   get name() {
//     return this.#name;
//   }

//   set name(input) {
//     if (input.length < 3) throw new Error('Name too short');
//     this.#name = input;
//   }
// }

// const p = new Person('Beka');

// ! account class

// class Account {
//   #password;
//   constructor(password) {
//     this.#password = password;
//   }

//   checkPassword(input) {
//     if (input !== this.#password) return 'Invalid password';
//     return 'Correct password';
//   }
// }

// ! bank class

// class BankAccount {
//   #owner;

//   #balance;
//   constructor(owner, balance) {
//     this.#owner = owner;
//     this.#balance = balance;
//   }

//   get balance() {
//     return this.#balance;
//   }
//   deposit(amount) {
//     if (amount < 0) throw new Error('Invalid amount');
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     if (amount < 0) throw new Error('Invalid amount');
//     if (amount > this.#balance) throw new Error('Insufficient funds');
//     this.#balance -= amount;
//   }
// }

// const acc = new BankAccount('Beka', 100);
// acc.deposit(50);
// acc.withdraw(30);
// console.log(acc.balance); // → 120
// acc.withdraw(20);
// console.log(acc.balance); // → 120

// ! inheritance

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     return `${this.name} make a noise`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
//   speak() {
//     return `${this.name} barks, age: ${this.age}`;
//   }
// }

// const Leqsi = new Dog('Leqsi', 5);
// console.log(Leqsi.speak());

// ! vehicle

// class Vehicle {
//   constructor(brand) {
//     this.brand = brand;
//   }

//   describe() {
//     return `This is a  vehicle from ${this.brand}`;
//   }
// }

// class Car extends Vehicle {
//   constructor(brand, model) {
//     super(brand);
//     this.model = model;
//   }

//   describe() {
//     return `This is a ${this.model} from ${this.brand}`;
//   }
// }

// const myCar = new Car('Toyota', 'Corolla');
// console.log(myCar.describe());

// ! Person

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHello() {
//     return `Hi, I'm ${this.name}`;
//   }
// }

// class Student extends Person {
//   constructor(name, university) {
//     super(name);
//     this.university = university;
//   }
//   sayHello() {
//     return ` ${super.sayHello()} and I study at ${this.university} `;
//   }
// }
// const anna = new Student('Anna', 'Tbilisi State University');
// console.log(anna.sayHello());

// ! class liberty book

// class LibraryBook {
//   #title;
//   #autor;
//   isAvailable = true;
//   constructor(title, autor) {
//     this.#title = title;
//     this.#autor = autor;
//   }

//   getDetails() {
//     return `Title ${this.#title}, Author: ${this.#autor}`;
//   }

//   borrowBook() {
//     if (!this.isAvailable) {
//       return `Book is not available`;
//     }
//     this.isAvailable = false;
//     return 'You borrowed the book.';
//   }

//   returnBook() {
//     if (this.isAvailable) return 'You cant return the book';
//     this.isAvailable = true;
//     return 'Thank you for returning the book.';
//   }
// }

// const myBook = new LibraryBook('War and pease', 'Leo Tolstoy');
// console.log(myBook.getDetails());
// console.log(myBook.returnBook());
// console.log(myBook.borrowBook());
// console.log(myBook.returnBook());

// ! oop class

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   getInfo() {
//     return `User: ${this.name}, Email: ${this.email}`;
//   }
// }

// class Admin extends User {
//   constructor(name, email, permissions) {
//     super(name, email);
//     this.permissions = permissions;
//   }

//   getInfo() {
//     return `${super.getInfo()}, Permission: ${this.permissions}`;
//   }
// }

// const Beka = new User('Beka', 'Beka@gamil.com');
// console.log(Beka.getInfo());

// const admin = new Admin('Beka', 'Beka@gamil.com', ['read', 'write', 'delete']);
// console.log(admin.getInfo());

// class CoffeeMachine {
//   #boilWater() {
//     console.log('Boiling water...');
//   }
//   #brawCoffe() {
//     console.log('Brewing coffee...');
//   }

//   makeCoffee() {
//     this.#boilWater();
//     this.#brawCoffe();
//     return 'Your coffee is ready!';
//   }
// }

// const makeCoffee = new CoffeeMachine();

// var isPalindrome = function (x, y) {
//   // if(res !== x){
//   // return false
//   // }
//   //     return true

//   return [...x, ...y].sort((a, b) => a - b);
// };

// console.log(isPalindrome([1, 2], [2]));

// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
//   drive() {
//     console.log('Vroom!, Vroom!');
//   }
// }

// class ElectricCar extends Car {
//   constructor(brand, model, year, batteryCapacity) {
//     super(brand, model, year);
//     this.batteryCapacity = batteryCapacity;
//   }

//   drive() {
//     console.log('click... silent drive');
//   }

//   charge() {
//     console.log('Charging..., Done!');
//   }
// }

// const Tesla = new ElectricCar('Tesla', 'xs', 2018, 84);

// Tesla.charge();
// Tesla.drive();

// class Array {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//   }

//   pop() {
//     if (this.length <= 0) {
//       throw new Error('No element to remove');
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }

//   delete(index) {
//     const item = this.data[index];
//     this.shiftindex(index);
//   }
//   get(index) {
//     return this.data[index];
//   }

//   shiftindex(item) {
//     console.log(item);

//     for (let i = item; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new Array();
// newArray.push(1);
// newArray.push(2);

// newArray.push(3);
// newArray.unshift(4);
// // newArray.delete(0);
// // // newArray.delete(1);

// console.log(newArray);

// function reverseString(str) {
//   let reversedString = '';
//   const splitText = str.split('');

//   for (let i = splitText.length - 1; i >= 0; i--) {
//     reversedString += splitText[i];
//   }
//   console.log(reversedString);
// }

// console.log(reverseString('Hi my name is Andrei'));

// function reverseString(str) {
//   const arr = [];

//   for (let i = str.length - 1; i >= 0; i--) {
//     arr.push(str[i]);
//   }
//   return arr.join('');
// }

// console.log(reverseString('Hi my name is Andrei'));

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString('Hi my name is Andrei'));

// const reverseString = (str) => str.split('').reverse().join('');

// console.log(reverseString('Hi my name is Andrei'));

// const margeSortedArrys = (arr1, arr2) => [...arr1, ...arr2].sort((a,b) => a-b)

// console.log(margeSortedArrys([0,3,4,41], [4,6,30]))

// var maxProfit = function (prices) {
//   var buyStock = prices[0];
//   var sellStock = prices[0];
//   var result = null;
//   if (!result) {
//     sellStock - buyStock;
//   }
//   for (var i = 0; i <= prices.length - 1; i++) {
//     if (prices[i] < buyStock && i !== prices.length - 1) {
//       buyStock = prices[i];
//       sellStock = prices[i];
//     }
//     if (sellStock < prices[i]) {
//       sellStock = prices[i];
//       if (result < sellStock - buyStock) {
//         result = sellStock - buyStock;
//       }
//       console.log(result);
//     }
//     console.log(result);
//   }
//   if (result > sellStock - buyStock) {
//     return result;
//   }
//   console.log(result, 'res');
//   if (buyStock === sellStock) {
//     return 0;
//   }

//   return sellStock - buyStock;
// };

// // console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// // console.log(maxProfit([7, 6, 4, 3, 1]));
// // console.log(maxProfit([2, 4, 1]));
// // console.log(maxProfit([2, 1, 2, 0, 1]));
// // console.log(maxProfit([3, 2, 6, 5, 0, 3]));
// // console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
// console.log(maxProfit([4, 7, 2, 1]));

//! sort

// function reverseArr(arr) {
//   for (let i = 0; i < arr.length / 2; i++) {
//     let firstEl = arr[i];
//     arr[i] = arr[arr.length - i - 1];

//     arr[arr.length - i - 1] = firstEl;
//   }
//   console.log(arr);
// }

// reverseArr([1, 2, 3, 4, 5]);

//! remove duplicat

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 3, 4, 4, 2, 5, 4, 5]));

// ! move 0 to end

// function moveZero(arr) {
//   let noneZeroFoundAt = 0;

//   let lastIndex = arr.length - 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== noneZeroFoundAt) {
//       let lastEl = arr[noneZeroFoundAt];
//       arr[noneZeroFoundAt] = arr[i];
//       arr[i] = lastEl;
//       noneZeroFoundAt++;
//     }
//   }
//   return arr;
// }

// console.log(moveZero([0, 1, 0, 3, 12]));

// function reverseArr(arr) {
//   for (let i = 0; i < arr.length / 2; i++) {
//     [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
//   }
//   console.log(arr);
// }

// reverseArr([1, 2, 3, 4, 5]);

//! selection sort

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
// }

// selectionSort([64, 25, 12, 22, 11]);

//! revers Selection sort

// function reverseSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let maxIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[maxIndex] < arr[j]) {
//         maxIndex = j;
//       }
//     }
//     if (maxIndex !== i) {
//       [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
//     }
//   }
//   return arr;
// }

// console.log(reverseSort([5, 2, 9, 1, 5, 6, 10]));

//! selecteion sort

// function sortArr(arr) {
//   // let alpabet = ['a', 'b', 'o', 'm'];
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] > arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }

// console.log(sortArr([64, 25, 12, 22, 11]));

// function sortArr(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j].age < arr[minIndex].age) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }

// console.log(
//   sortArr([
//     { name: 'Beka', age: 23 },
//     { name: 'Avto', age: 25 },
//     { name: 'Nino', age: 20 },
//   ])
// );
// function selectionSortStrings(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }

// // ტესტი
// console.log(selectionSortStrings(['banana', 'apple', 'cherry', 'date']));

//! bubble sort

function sortArr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(sortArr([64, 25, 12, 22, 11]));
