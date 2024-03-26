//----------------------------------------------------------HW-2------------------------------------
/*
//-----------task 1--------------
let a = 10;
alert(a);
a = 20;
alert(a);

//-----------task 2--------------
const yearFirstIPhone = 2007;
alert(yearFirstIPhone);

//--------------task 3-----------
const nameCreatorJavaScript = 'Брендан Эйх';
alert(nameCreatorJavaScript);

/* P.S. JavaScript был создан компанией Netscape в 1995 году
и быстро стал одним из самых популярных языков
программирования благодаря своей простоте и
широкому применению.JavaScript
был создан Бренданом Эйком,
который работал над разработкой языка,
названного Mocha. Американский программист,
создатель языка программирования JavaScript.
Родился 4 июля 1961 года в Питтсбурге, штат Пенсильвания.
Эйх начал карьеру в Silicon Graphics, где проработал семь лет.
Следующие три года проработал в MicroUnity Systems Engineering.
Больше всего известен своей работой в Netscape и Mozilla.
Он начал работу в Netscape в апреле 1995 года,
где разработал язык программирования,
изначально называвшийся «Mocha», затем переименованный
в «LiveScript» и наконец переименованный в JavaScript
для браузера Netscape Navigator.*/

//---------------task 4------------
/*
let number1 = 10;
let number2 = 2;
let summa = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
let quotient = number1 / number2;
alert("Сумма number1 и number2 равна " + summa + ";\n" + "Разность number1 и number2 равна " + difference + ";\n" +
    "Произведение number1 и number2 равно " + product + ";\n" + "Кратное при делении number1 на number2 равно " +
    quotient);

//--------------------task 5-----------
let result = 2 ** 5;
alert(result);

//------------------task 6---------------
a = 9;
let b = 2;
alert(a % b);

//-------------task 7--------------
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//-------------task 8-------------
let age = prompt('Сколько вам лет?');
alert(age);

//------------task 9.0-------------
let user = {
    name: "Oleg",
    age: 36,
    usAdmin: true
};

//-----------task 9.1--------------
user['city of residence'] = 'Murmansk region';

//-----------task 9.2--------------
user['age'] = 8;

//-----------task 9.3--------------
delete user['city of residence'];

//------------task 9.4-----------
let info = prompt('Какую информацию хотите узнать о пользователе?', 'name');
alert(user[info]);

//-----------task 10-----------
let whatsYourName = prompt('Введите Ваше имя');
alert('Привет, ' + whatsYourName.toUpperCase() + '!');


//-----------------------------------------------------------HW 3------------------------------------------

//------------task 1--------------------
let password = 'пароль';
let password2 = 'password';
let userPassword = prompt('Введите пароль');
if (password == userPassword || password2 == userPassword) {
    alert('Пароль введен верно');
}
else {
    alert('Пароль введен неправильно');
}

//--------------task 2---------------------
let c = 2;
if (c > 0 && c < 10) console.log('Верно');
else console.log('Не верно');

//--------------task 3--------------------
let d = 300;
let e = 700;
if (d > 100 || e > 100) console.log('Верно');
else console.log('Не верно');

//-----------------task 4------------------
a = '2';
b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

//-----------------task 5-----------------
let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    case (monthNumber >= 13):
        alert('Не правильно указан номер месяца');
        break;
    default: ('Извините, что-то пошло не так');
}

//-------------task-7-----------------
let num1 = Number(prompt('Пожалуйста, введите любое число'));
if (isNaN(num1)) {
    alert('Введенное значение не является числом');
}
else {
    if (num1 % 2 == 0) {
        alert('Число четное');
    }
    else {
        alert('Число нечетное');
    }
}

//-------------task-8---------------
let clientOS = 1;
if (clientOS == 0) console.log('Установите версию приложения для iOS по ' + "<a href=\"#\">" + 'ссылке' + "</a>");
if (clientOS == 1) console.log('Установите версию приложения для Android по ' + "<a href=\"#\">" + 'ссылке' + "</a>");

//------------task-9--------------
let clientDeviceYear = 2015;
if (clientOS = 0 && clientDeviceYear < 2015) console.log('Установите облегченную версию приложения для iOS по ' + "<a href=\"#\">" + 'ссылке' + "</a>");
else if (clientOS = 1 && clientDeviceYear < 2015) console.log('Установите облегченную версию приложения для Android по ' + "<a href=\"#\">" + 'ссылке' + "</a>");
else if (clientOS == 0) console.log('Установите версию приложения для iOS по ' + "<a href=\"#\">" + 'ссылке' + "</a>");
else console.log('Установите версию приложения для Android по ' + "<a href=\"#\">" + 'ссылке' + "</a>");

//--------------------------------------------------------HW 4----------------------------------------------------

//-----------task-1--------------
for (let i = 1; i <= 2; i++) {
    console.log('Привет');
}

//-----------task-2----------------
let i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

//-------------task-3-----------------
for (i = 1; i < 23; i++) {
    if (i < 7) continue;
    console.log(i);
}

//---------------task-4--------------
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}

for (key in obj) {
    console.log(key + " — зарплата " + obj[key] + " долларов");
}

//---------------task - 5-------------
let n = 1000;
let num2 = 0;
do {
    n /= 2;
    num2++;
}
while (n > 50);
console.log(n + '\n' + num);

//---------------task-6--------------
for (let numFirstFriday = 2; numFirstFriday <= 31; numFirstFriday += 7) {
    console.log("Сегодня пятница, " + numFirstFriday + "-е число. Необходимо подготовить отчет.");
}

//--------------------------------HW-5---------------------------
//-------------------task-1------------------------
function min(a, b) {
    if (a <= b) {
        return a;
    }

    else {
        return false;
    }
}

console.log(min(5, 2));

//---------------------task-2------------------
function checkingTheNumber(n) {
    if (n % 2 == 0) {
        return "Число четное";
    }
    else {
        return "Число не четное";
    }
}

//-----------------------task-3--------------------
//1
function quadroNumber(x) {
    console.log(Math.pow(x, 2));
}

//2
let resFunc = (x) => Math.pow(x, 2);

//------------------------task-4------------------
function userAge() {
    let age = prompt('Сколько Вам лет, уважаемый user');
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    }
    else if (age < 12) {
        alert('Привет, друг!');
    }
    else {
        alert('Добро пожаловать!');
    }
}

//---------------------task-5---------------------
function checkNumber(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом'
    }

    else {
        return a * b;
    }
}

//--------------------task-6----------------------
function quad() {
    let n = Number(prompt('Введите число'));
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    }
    else {
        return n + ' в кубе равняется ' + Math.pow(n, 3);
    }
}

let userNum = quad();
alert(userNum);

//----------------------task -7-------------------
let circle1 = {
    radius: 10,
    getArea() {
        Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter() {
        2 * Math.PI * this.radius;
    }
}

let circle2 = {
    radius: 20,
    getArea() {
        Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter() {
        2 * Math.PI * this.radius;
    }
}

//-----------------task-8--------------------
function userMonthCheck() {
    let numMonth = Number(prompt('Введите номер месяца'));
    if (numMonth >= 1 && numMonth <= 12) {
        if (numMonth == 12 || numMonth == 1 || numMonth == 2) {
            return 'Зима';
        }

        else if (numMonth >= 3 && numMonth <= 5) {
            return 'Весна';
        }

        else if (numMonth >= 6 && numMonth <= 8) {
            return 'Лето';
        }

        else {
            return 'Осень';
        }
    }

    else {
        alert('Введен не корректный номер месяца');
    }
}


//--------------------HW-6-----------------------
//-----------------task-1-------------------
let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] == 10) {
        break;
    }
}

//-------------------task-2--------------------
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
        console.log(i);
    }
}

//-------------------task-3--------------------
let arr1 = [1, 3, 5, 10, 20];
console.log(arr1.join(' '));

//-------------------task-4----------------------
let arr2 = [];
for (let i = 0; i < 3; i++) {
    arr2[i] = [];

    for (let j = 0; j < 3; j++) {
        arr2[i].push(1);
    }
}
console.log(arr2);


//-----------------task-5---------------------
let arr3 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    arr3.push(2);
}
console.log(arr3);

//-----------------task-6------------------
let arr4 = [9, 8, 7, 'a', 6, 5];
arr4.sort();
arr4.pop();
console.log(arr4);

//--------------------task-7------------------
let arr5 = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Введите любое число'));
let resultSearch;
for (let i = 0; i < arr5.length; i++) {
    if (arr5.includes(userNumber) == true) {
        resultSearch = 'Угадал';
        break;
    }
    else {
        resultSearch = 'Не угадал';
        continue;
    }
}
alert(resultSearch);

//-------------------------task-8------------------------
let str = 'abcdef';
let strSplit = str.split('');
let strRev = strSplit.reverse();
str = strRev.join('');
console.log(str);

//---------------------------task-9---------------------------------
let arr7 = [[1, 2, 3], [4, 5, 6]];
let newArr = [].concat(...arr7);
console.log(newArr);

//------------------------task-9-----------------------
let arr6 = [[1, 2, 3], [4, 5, 6]];
function enumerationArray(arr6) {
    let result = [];
    for (let i = 0; i < arr6.length; i++) {
        const currentValue = arr6[i];
        if (Array.isArray(currentValue)) {
            result = [...result, ...(enumerationArray(currentValue))];
        } else {
            if (currentValue != null) {
                result.push(currentValue);
            }
        }
    }
    return result;
}
result = enumerationArray(arr6);
console.log(result);

//--------------------task-10---------------------------
let arr8 = [7, 3, 9, 1, 8, 2, 4, 6, 10];
let sum = [];
for (let i = 0; i < arr8.length; i++) {
    if (i % 2 == 0) {
        if (i == (arr8.length - 1)) {
            break;
        }
        else {
            sum = arr8[i] + arr8[i + 1];
            console.log(sum);
        }
    }
    else {
        continue;
    }
}

//-----------------------task-11-------------------------
let newArr1 = [5, 7, 10, 2, 1, 15];
let newArr2 = [];
function square(x) {
    for (let i = 0; i < x.length; i++) {
        let squareNewArr1 = Math.pow(x[i], 2);
        newArr2.push(squareNewArr1);
    }
    return newArr2;
}
console.log(square(newArr1));

//-------------------------task-12---------------------
let strArr = ['Привет', 'язык', 'JavaScript'];
let strNewArr = [];
function widthStrArr(x) {
    return strNewArr = x.map((y) => y.length);
}
console.log(widthStrArr(strArr));

//----------------------task-13--------------------
let arrInt = [10, -15, 7, -2, 9, -1, 3, -20];
let arrBelowZero = [];
function belowZero(zero) {
    return arrBelowZero = zero.filter((x) => x < 0);
}
console.log(belowZero(arrInt));

//-----------------------task-14-------------------
let arrRan = [];
let arrEvenNumbers = [];
function arrRandom(arr) {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random(1, 10) * 10));
    }
    return arr;
}
function arrayEvenNumbers(x, y) {
    y = x.filter((z) => z % 2 == 0);
    return y;
}
console.log(arrRandom(arrRan));
console.log(arrayEvenNumbers(arrRan, arrEvenNumbers));

//----------------------task-15----------------------
let arrArif = [];
let summaArrValues;
let res;
for (let i = 0; i < 6; i++) {
    arrArif.push(Math.floor(Math.random(1, 10) * 10));
    summaArrValues = arrArif.reduce((accum, currentValue) => accum + currentValue);
}
res = summaArrValues / arrArif.length;

console.log(arrArif);
console.log(summaArrValues);
console.log(res);






//--------------------------------HW-7----------------------------------------
//--------------------task-1------------------------------
console.log('js'.toUpperCase());
console.log('-------------------------');

//---------------------------task-2------------------------
let arr15 = ['Привет Юрий', 'Василий привет', 'Привет Иван', 'Василий как дела?'];
let str10 = 'Василий';
let arr16 = [];
function secondStr(str17, str18) {
    arr15.forEach((str17) => {
        if (str17.toLowerCase().startsWith(str18.toLowerCase())) {
            arr16.push(str17);
            return arr16;
        }
    });
    return arr16;
}
console.log(secondStr(arr15, str10));
console.log('-------------------------');

//--------------------------task-3---------------------------
let integer = 32.58884;
console.log(Math.floor(integer));
console.log(Math.ceil(integer));
console.log(Math.round(integer));
console.log('-------------------------');

//---------------------------task-4--------------------------
let arr17 = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...arr17));
console.log(Math.max(...arr17));
console.log('-------------------------');

//----------------------task-5---------------------------------
function randomDigit() {
    console.log(Math.floor(Math.random() * 10));
}
randomDigit();
console.log('-------------------------');

//---------------------task-6--------------------------
randomArr = [];
let count = 10;
function randomDigitals(chislo) {
    for (let i = 0; i < (chislo / 2); i++) {
        randomArr.push(Math.floor(Math.random() * chislo));
    }
    console.log(randomArr);
}
randomDigitals(count);
console.log('-------------------------');

//----------------------task-7--------------------------
let firstDigit = 10;
let secondDigit = 20;
function randomChislo(num1, num2) {
    num1 = Math.floor(num1);
    num2 = Math.ceil(num2);
    console.log(Math.floor(Math.random() * (num2 - num1) + num1));
}
randomChislo(firstDigit, secondDigit);
console.log('-------------------------');

//---------------------task-8----------------------------
console.log(new Date());
console.log('-------------------------');

//---------------------task-9---------------------------
let currentDate = new Date();
let days = 73 * 24 * 60 * 60 * 1000;
let date = +currentDate;
let date73 = date + days;
let newDate = new Date(date73);
console.log(newDate);
console.log('-------------------------');

//------------------------task-10---------------------
let date1 = new Date();
function rusDate(d) {
    let day = d.getDay();
    let date = d.getDate().toString().padStart(2, '0');
    let month = d.getMonth();
    let year = d.getFullYear();
    let hours = d.getHours().toString().padStart(2, '0');
    let minutes = d.getMinutes().toString().padStart(2, '0');;
    let seconds = d.getSeconds().toString().padStart(2, '0');;

    daysArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    monthArray = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    return `Дата: ${date} ${monthArray[month]} ${year} - это ${daysArray[day]}\nВремя: ${hours}:${minutes}:${seconds}`;
}

console.log(rusDate(date1));
console.log('-------------------------');

//-----------------------task-11------------------------------------
function randomUserGame() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let sortWords = words.sort(func);
    function func() {
        return 0.5 - Math.random();
    }
    alert(sortWords);
    let firstWord = prompt('Введите первое слово');
    let secondWord = prompt('Введите последнее слово');
    if (firstWord.toLowerCase() === sortWords[0].toLowerCase()) {
        alert('Первое слово угадано верно');
    }
    else {
        alert('Первое слово названо не верно');
    }
    if (secondWord.toLowerCase() === sortWords[sortWords.length - 1].toLowerCase()) {
        alert('Второе слово угадано верно');
    }
    else {
        alert('Второе слово названо не верно');
    }
}

randomUserGame();

*/

//-------------------------HW-8-----------------------
//-------------task-1----------------------
const peoples = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(peoples.sort((a, b) => a.age - b.age));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]

console.log('-------------------------');

//--------------------------task-2----------------
/*function map(arr, ruleFunction) {
   const output = [];
   console.log('ruleFunction', ruleFunction);

   for (let i = 0; i < arr.length; i++) {
      output.push(ruleFunction(arr[i]));
   }
   return output;
}*/

function isPositive(num) {
    return num < 0 ? false : true;
}

function isMale(arrPeople) {
    if (arrPeople.gender === 'male') return true;
}

function filter(resArray, ruleFunction) {
    const result = [];
    for (let i = 0; i < resArray.length; i++) {
        if (ruleFunction(resArray[i])) result.push(resArray[i]);
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

console.log('-------------------------');

//---------------task-3---------------------
function timer() {
    let timerId = setInterval(() => console.log(Date()), 3000);
    setTimeout((func) => {
        clearInterval(timerId);
        console.log('30 секунд прошло');
    }, 30000);
}
timer();

//----------------task-4----------------------
function delayForSecond(callback) {
    setTimeout(() => { callback() }, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

console.log('-------------------------');

//---------------task-5-----------------
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log('Привет, ${name}!');
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));

console.log('-------------------------');