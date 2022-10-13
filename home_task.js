/*
Задание 1

Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.

Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. 
Добавьте отдельную проверку для этого значения.
*/


let number = prompt("Введите число: ");
number = +number;

if (typeof number === 'number' && !isNaN(number)) {
   if (number % 2 === 0) {
     alert('Число чётное.');
   } else {
     alert('Число нечётное.');
   }
} else {
  alert('Упс, кажется, вы ошиблись.');
}

/*
Задание 2

Дана переменная x, которая может принимать любое значение. Написать программу, 
которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».

Опишите три случая: когда х = числу, строке или логическому типу. В других случаях 
выводите сообщение: «Тип x не определён».

Примечание: в этом задании использовать promt не нужно.
*/

let x = 100;

switch (typeof x) {
  case 'number':
    alert('x — число');
    break;
  case 'string':
    alert('x — строка');
    break;
  case 'boolean':
    alert('x - булево значение');
    break;
  default:
    alert('Тип x не определён');
}


/*
Задание 3

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
Например, "Hello" -> "olleH".
*/

let str = 'Hello';

console.log(`${str} -> ${str.split("").reverse().join("")}`);


/*
Задание 4

Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let x = getRandomIntInclusive(0, 100);
console.log(x);



/*
Задание 5

Дан произвольный массив. Необходимо вывести количество элементов массива, 
затем перебрать его и вывести в консоль каждый элемент массива.
*/


let array = [1, 2, 3, 4];

console.log(array.length);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}


/*
Задание 6

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true 
или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые.
*/


const array = [1, 1, 1, 1];
const firstElem = array[0];
let flag = true;
    
for (let i = 1; i < array.length; i++) {
  if (firstElem !== array[i]) {
    flag = false;
    break;
  }
}

console.log(flag);


/*
Задание 7

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее.
*/

const array = [1, 2, 3, 4, 5, 0, null, NaN, NaN, "qwer"];

let countOdd = 0;
let countEven = 0;
let countNull = 0;
let countNaN = 0;
let conutOther = 0;

for (let i = 0; i < array.length; i++) {
  let item = array[i];
  switch (typeof item) {
    case "number":
      if (isNaN(item)) {
        countNaN += 1;
      } else {
        if (item % 2 === 0) {
          countEven += 1;
        } else {
          countOdd += 1;
        }
        break;        
      }
    case "object":
      if (item === null) {
        countNull += 1;
      }
      break;
    default:
      conutOther += 1;
  }
}

console.log(`countOdd = ${countOdd}, countEven = ${countEven}, 
    countNull = ${countNull}, countNaN = ${countNaN}, conutOther = ${conutOther}`);



/*
Задание 8

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения 
в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
*/

let map = new Map();

map.set("first", 10);
map.set("second", 20);
map.set("third", 30);

for (let items of map) {
  console.log(`ключ - ${items[0]}, значение - ${items[1]}`);
}

