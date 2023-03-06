"use strict";
//Операторы
//Математические
let x;
//Сложение
x = 5 + 8;
console.log(x);
//Вычитание
x = 5 - 8;
console.log(x);
//Умножение 
x = 5 * 8;
console.log(x);
//Деление
x = 5 / 8;
console.log(x);
//Взятие остатка от деления
x = 13 % 3;
console.log(x);
//Возведение в степень 
x = 5 ** 8;
console.log(x);
//Сложение строк 
let resultOne = "Я" + " " + "Толя";
console.log(resultOne);
//Сложение строк и чисел
let resultTwo = 22 + "Нос";
console.log(resultTwo);
let resultThree = 2 + '2';
console.log(resultThree);
let resultFour = 2 + 2 + "Tolia";
console.log(resultFour);
//Преобразовывает типы данных только оператор сложения
let resultNum = +"2";
console.log(resultNum);
let us = "25";
let adm = "10";
console.log(us + adm);
console.log(+us + +adm);
//Остальные операторы приводят все значения к типу Number
let resultFive = 2 - "2";
console.log(resultFive);
//Оператор присвоения (=)
let users = 5;
users = users + 3;
console.log(users);
//OR
users += 3;
console.log(users);
users *= 3;
console.log(users);
//Инкремент и Дикремент
let user11 = 5;
user11++;
console.log(user11);
user11--;
console.log(user11);
//Префиксная и Постфиксная формы
let resultSix = 0;
let six;
let seven = 0;
six = resultSix++;
console.log(six);
six = ++seven;
console.log(six);
//Операторы сравнения
console.log(2 > 1);
console.log(2 < 1);
console.log(2 == 1); // равно
console.log(2 != 1); //не равно
//Сравнение строк
console.log("Б" > "А");
console.log("Скрипт" > "Скрипка");
console.log("А" > "а"); //Маьенькая буква считается > большой
console.log("007" == 7);
console.log(true == 1);
//Операторы сравнеия >< == != приравнивают строки с числок к числу
//Операторы строгого сравнения !== === оставляют тип данных в оригинале
console.log(1 === true); // false
console.log("007" !== 7); //true
//Логические операторы
console.log(true || false);
console.log(false || false);
console.log(1 || 0);//true
console.log("tolia" || 0); //true
console.log(null || 0); //false
let userName = "Tolia";
let userNick = "";
let user = userName || userNick || "Без имени";
console.log(user);
//Оператор "И" (&&) Проходит по ряду до false и выводит
console.log(true && false);//false
console.log(true && true);//true
console.log(45 && 0 && 5);// 0
console.log(5 && "42" || null && "is"); //42 
//Оператор Не (!) Приводим значение к булевому и меняет его 
console.log(!true); //false
console.log(!0); //true
console.log(!!"Tolia"); //Два раза оператор Не меняет знаечение на Булевое, вместо Boolean
//Оператор сравнение с 0 (null) - ?? 
let name;
console.log(name ?? "Без имени");
