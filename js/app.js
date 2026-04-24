// console.log("Hello World from External Javascript!");

// ECMA International

// ECMASCRIPT

// ES6, ES2015, Ecmascript 2015

// alert("Hello World!");
// document.writeln("Hello World");

// Variables
// var, let and const

// var data1;
// data1 = "Mike";
// let data1 = "Mike";

// let data1 = "Elon";

// console.log(data1);

// const pi = Math.PI;

// pi = pi + 10;

// console.log(pi);

// let data;

// console.log(data);

// JS OPERATOR

// 1. Addtion (+)
// 2. Subtraction (-)
// 3. Multiply (*)
// 4. Modulus (%)
// 5. division (/)

// let x = 10;
// let y = 3;

// console.log(x / y);

// Data Types
// A. Primitive
// 1. String
// let txt = 'Mike';
// console.log(txt);
// console.log(typeof txt);

// 2. Number
// let num = 10.5;

// console.log(num);
// console.log(typeof num);

// 3. Boolean

// let isLoggedIn = true;

// console.log(isLoggedIn);
// console.log(typeof isLoggedIn);

// 4. Null
// let data = null;

// console.log(data);
// console.log(typeof data);

// 5. undefined
// let data;
// console.log(data);
// console.log(typeof data);

// 6. Symbol
// let id1 = Symbol("Elon");
// let id2 = Symbol("Elon");

// console.log(id1);
// console.log(typeof id1);
// console.log(id2);
// console.log(typeof id2);

// console.log(id1 === id2);

// 7. Bigint
// let bigNum = 1233445555555555555555555555555555555543712734646464n;

// console.log(bigNum);
// console.log(typeof bigNum);

// B. Non-primitive
// 1. Object
// let obj = {
//     name: "Mike",
//     class: 10,
// }

// console.log(obj);
// console.log(typeof obj);

// 2. Array
// let arr = [10, 20, "Mike", "Elon"];

// console.log(arr);
// console.log(typeof arr);

// 3. function
// function add(){
//     console.log("Hello World from Function");
// }

// add();

// console.log(typeof add);

// Template Literals (`${}`)

// let name1 = "Elon";

// let money = 1200;

// console.log(`My name is ${name1} and i have ${2 * 5} Cars`);

// console.log("My name is " + name1 + " and i have " +  " Cars");

// Comparison Operators

// 1. Equal to (==)
// let a = 10;
// let b = "10";

// console.log(a == b);

// 2. Equal value and equal type (===)

// let a = 10;
// let b = 10;

// console.log(a === b);

// 3. not equal (!=)
// let a = 10;
// let b = 15;

// console.log(a != b);

// 4. not equal value or not equal type (!==)

// let a = 10;
// let b = "15";

// console.log(a !== b);

// 5. greater than (>)

// 6. less than (<)

// let a = 10;
// let b = 20;

// console.log(a < b);

// 7. greater than or equal to (>=)
// 8. less than or equal to (<=)

// let a = 15;
// let b = 20;

// console.log(a <= b);

// 8. Ternary Operator (?)
// (condition) ? true : false;

// let num = 21;

// let input = (num > 20) ? "True Value" : "False Value";

// console.log(input);

// Logical Operators
// 1. and (&&)

// let a = 10;
// let b = 10;
// let c = 20;
// let d = 20;

// console.log( a == b && c == d);

// 2. or (||)

// let a = 15;
// let b = 10;
// let c = 15;
// let d = 20;

// console.log( a == b || c == d);

// 3. not (!)

// let a = 15;
// let b = 20;

// let c = ! (a == b);

// console.log(c);

// Condition
// 1. if

// if(condition){
//     // code to be execute
// }

// let age = 20;

// if (age >= 18){
//     console.log("You can Vote!");
// }

// 2. if-else
// if(condition){
//     // code to be execute
// }else{
//     // code to be execute
// }

// let age = 10;

// if(age >= 18){
//     console.log("You can Vote!");
// }
// else{
//     console.log("You can not Vote!");
// }

// // 3. else if
// if(condtion 1){
//     // code to be execute
// }
// else if(condition 2){
//     // code to be execute
// }
// else if(condition 3){
//     // code to be execute
// }
// else{
//     // code to be execute
// }

// let age = 16;
// let hasVoterId = "No";

// if(age >= 18 && hasVoterId === "Yes"){
//     console.log("You can vote!");
// }
// else if(age >= 18 && hasVoterId !== "Yes"){
//     console.log("Get your voter id card");
// }
// else{
//     console.log("You can not vote!");
// }

// Switch Statement

// switch(expression){
//     case 1:
//         // code to be executed
//         break;
//     case 2:
//         // code to be executed
//         break;
//     default:
//         // code to be executed
// }

// if input = 1, "Yes", "Y" ------> "You are eligible"
// if input = 0, "No", "N" ------> "You are not eligible"

// let input = 1;

// switch(input){
//     case 1:
//         document.writeln("You are eligible");
//         break;
//     case "Yes":
//         document.writeln("You are eligible");
//         break;
//     case "Y":
//         document.writeln("You are eligible");
//         break;
//     case 0:
//         document.writeln("You are not eligible");
//         break;
//     case "No":
//         document.writeln("You are not eligible");
//         break;
//     case "N":
//         document.writeln("You are not eligible");
//         break;
//     default:
//         document.writeln("WRONG INPUT");
// }

// let input = "Hello";

// switch(input){
//     case 1:
//     case "Yes":
//     case "Y":
//         document.writeln("You are eligible");
//         break;
//     case 0:
//     case "No":
//     case "N":
//         document.writeln("You are not eligible");
//         break;
//     default:
//         document.writeln("WRONG INPUT");
// }

// LOOP
// 1. while loop

// while(condition){
//     // code to be execute
// }

// let counter = 1;

// while(counter <= 10){
//     document.writeln("Hello World " + counter + "<br>");
//     counter++;
// }

// let counter = 1;

// while(counter <= 10){
//     document.writeln(`2 X ${counter} = ${2 * counter}`);
//     document.writeln("<br>");
//     // counter++;
//     // counter = counter + 1;
//     counter +=1;
// }

// Adding even numbers from 0 to 1000

// let counter = 1;
// let sum = 0;

// while(counter <= 1000){
//     if(counter % 2 == 0){
//         sum = sum + counter;
//         // 0 = 0 + 2
//         // 2 = 2 + 6
//         // 6
//     }
//     counter++;
// }

// document.writeln(sum);

// Do - while loop

// do{
//     // code to be execute
// }
// while(condition)

// let counter = 12;

// do{
//     document.writeln("Hello World " + counter + "<br>");
//     counter++;
// }
// while(counter <= 10);

// for loop

// for(expression1 ; expression2; expression3){
//     // code to be execute
// }

// for(let counter = 1; counter <= 10; counter++){
//     document.writeln("Hello World " + counter + "<br>");
// }

// Nested for loop

// for(let counter = 1; counter <= 10; counter++){
//     document.writeln("Hello World "+ counter + "<br>");

//     for(let count = 1; count < 3; count++){
//         document.writeln("Hello from inner loop" + count + "<br>");
//     }
//     document.writeln("<br>");
// }

// Break

// for(let counter = 1; counter <= 10; counter++){

//     if(counter == 5){
//         break;
//     }

//     document.writeln(counter, " Hello World!");
//     document.writeln("<br>");
// }

// continue

// for(let counter = 1; counter <= 10; counter++){

//     if(counter == 5){
//         continue;
//     }

//     document.writeln(counter, " Hello World!");
//     document.writeln("<br>");
// }

// Alert
// document.writeln("Hello world!");
// console.log("Hello World");

// alert("Hello from alert!");

// confirm

// let isBoss = confirm("Are you boss?");

// alert(isBoss);

// Prompt
// let age = prompt("How old are you?", 22);

// alert(`You are ${age} years old.`);

// typeof

// Converting data types

// let type = 10;
// console.log(type);
// console.log(typeof type);

// let newType = String(type);
// console.log(newType);
// console.log(typeof newType);

// let type = false;
// console.log(type);
// console.log(typeof type);

// let newType = Number(type);
// console.log(newType);
// console.log(typeof newType);

// let type = 0;
// console.log(type);
// console.log(typeof type);

// let newType = Boolean(type);
// console.log(newType);
// console.log(typeof newType);

// let type = "Elon";
// console.log(type);
// console.log(typeof type);

// let newType = Number(type);
// console.log(newType);
// console.log(typeof newType);

// 1. Number to string (12345)

// 2. Boolan to Number (true)

// 3. String to Number ("55123")

// JS Strings

// let txt1 = "Hello World";

// let txt2 = 'Hello Elon';

// console.log(txt1);
// console.log(txt2);

// let txt1 = 'Hello Mike, "where" are you?';
// let txt2 = "Hello Mike, 'where' are you?";

// console.log(txt1);
// console.log(txt2);

// Escape Characters
// let txt = "Hello Mike, \'where\' are you?";
// let txt = "Hello Mike, where \\ are you?";
// let txt = "Hello Mike, where \n are you?";
// let txt = "Hello Mike, where \t are you?";

// console.log(txt);

// 1. ""
// 2. ''
// 3. \\
// 4. next line
// 5. 4 characters space

// Concat
// let a = "Hello";
// let b = "Elon";
// let d = "Musk";

// console.log(a + " " + b);

// let c = a.concat(" ", b);
// let c = a.concat(" ", b, " ", d);

// console.log(c);

// Slice
// let txt = "Hello from Elon";

// let res = txt.slice(5, 12);

// index ---> 0
// length ---> 1

// console.log(res);

// Substring
// let res = txt.substring(5, 12);
// console.log(res);

// Replace
// let txt = "Hello Mike";

// let res = txt.replace("Mike", "Elon");

// console.log(res);

// indexOf
// let txt = "This is Javascript Tutorials and my name is Elon";

// let res = txt.indexOf("Tutorials");
// let res = txt.indexOf("is");
// let res = txt.indexOf("is", 8);
// let res = txt.lastIndexOf("is");

// console.log(res);

// trim
// let txt = "     Hello World     ";
// let txt1 = "     Hello World     ";

// let res = txt1.trimStart();
// let res = txt1.trimEnd();
// let res = txt1.trim();

// console.log(txt);
// console.log(res);

// let txt = "This is Javascript Tutorials and my name is Elon";

// let tex1 = txt.toUpperCase();
// let tex1 = txt.toLowerCase();

// console.log(tex1);

// let txt = "This is Javascript Tutorials and my name is Elon";

// let res = txt.includes("Apple");

// console.log(res);

// Array

// let cars = ["Ford", "Ferrieri", "GMC", "Land Rover", "BMW", "Jaguar"];

// console.log(cars);

// let cars = [];
// cars[0] = "Ford";
// cars[1] = "Ferrieri";
// cars[2] = "GMC";
// cars[3] = "Land Rover";

// console.log(cars);

// let cars = new Array("Ford", "Ferrieri", "GMC");

// console.log(cars);

// let cars = ["Ford", "Ferrieri", "GMC", "Land Rover", "BMW", "Jaguar"];
//            0         1         2        3            4      5

// let car = cars[5];
// cars[2] = "Medseries";

// let res = cars.length;

// let car = cars[cars.length - 1];

// let cars = ["Ford", "Ferrieri", "GMC", "Land Rover", "BMW", "Jaguar"];

// cars.push("Austin Martin");
// cars.push("Mini Cooper");

// console.log(cars);

// toString()

// let cars = ["Ford", "Ferrieri", "GMC", "Land Rover", "BMW", "Jaguar"];

// let res = cars.toString();
// cars.pop();
// cars.pop();

// cars.shift();
// cars.shift();

// cars.unshift("Austin Martin");
// cars.unshift("Mini Cooper");
// console.log(cars);

// Adding Arrays
// let cars = ["Ford", "Ferrieri", "GMC", "Land Rover", "BMW", "Jaguar"];

// let fruits = ["Orange", "Banana", "Apple", "Mango", "Lichi"];

// let phones = ["Iphone", "Samsung", "Huwei", "Realme"];

// let res = cars.concat(fruits);
// let res = cars.concat(fruits, phones);

// console.log(res);

// let cars = ["Ford", "Ferrieri", "GMC", "Land Rover", "BMW", "Jaguar"];
// let cars = "Ford Ferrieri GMC Land Rover BMW Jaguar";

// cars.splice(2, 0, "Austin Martin", "Mini Cooper");
// let res = Array.isArray(cars);

// console.log(res);

// console.log(cars);

// let cars = "Ford Ferrieri GMC Land Rover BMW Jaguar";

// let res = cars.split(" ");
// let res = cars.split("r");

// console.log(res);

// let cars = ["Ford", "Ferrieri", "GMC", "Land Rover", "BMW", "Jaguar"];

// let res = cars.join(" and ");

// console.log(res);

// Multi-dimensional Array

// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// const data = [
//   [1, 2, 3], // 0
//   [4, 5, 6], // 1
//   [7, 8, 9], // 2

// 0  1  2
// ];

// console.log(data[0][2]);

// let arry = Array.from("Mike");
// let arry = Array.from({name: "Mike"});

// console.log(arry);

// let b1 = 100;
// let b2 = 200;
// let b3 = 300;
// let b4 = 400;

// console.log(Array.of(b1, b2, b3, b4));

// let cars = ["Ford", "Ferrieri", "GMC", "Land Rover", "BMW", "Jaguar"];

// let carsLength = cars.length;

// for(let i = 0; i < carsLength; i++){
//     console.log(`Element ${i} is ${cars[i]}`);
// }

// function hello(){
//     for(let i = 1; i <= 10; i++){
//         document.writeln(`2 X ${i} = ${2 * i}`);
//         document.writeln("<br>");
//     }
//     document.writeln("======================");
//     document.writeln("<br>");
// }

// hello();
// hello();
// document.writeln("NEXT <br>")
// document.writeln("Hello world! <br>");
// document.writeln("NEXT <br>")
// hello();
// hello();
// hello();

// Function Declaration

// function hello(){
//     console.log("Hello World!");
// }

// hello();

// Function Expression

// let myFun = function (){
//     console.log("Hello World");
// }

// myFun();

// function add(a, b){ // Parameter
//     return a + b;
// }

// console.log(add(10, 5)); // Arguments

// function mulTable(num){
//     for(let i = 1; i <= 10; i++){
//         document.writeln(`${num} X ${i} = ${num * i}`);
//         document.writeln("<br>");
//     }
//     document.writeln("======================");
//     document.writeln("<br>");
// }

// mulTable(2);
// mulTable(3);
// mulTable(4);
// mulTable(5);

// function add(){
//     if(arguments.length == 0){
//         console.log("No arguments Passed!");
//     }
//     else{
//         let sum = 0;
//         for(let i = 0; i < arguments.length; i++){
//             sum = sum + arguments[i];
//             //  =  0 + 2
//             //2 = 2 + 5;
//             //7 = 7 + 12
//             //19 = 19 + 12
//             //29
//         }
//         console.log(sum);
//     }
// }

// add(2, 5, 12, 10);
// add();

// Local and Global Variables

// let car = "Audi"; // Global Variable

// function add(){
//     let result = 100; // Local Variable
//     console.log(result);
//     console.log(car);
// }

// console.log(add);
// add();
// console.log(result);
// console.log(car);

// Anonymous Function
// function(){
//     console.log("Hello World!");
// }

// setTimeout(function(){
//     console.log("Hello World!");
// }, 1000)

// Immediately Invoked Function Expression (IIFE)
// (function(){
//     console.log("Hello World!");
// })();

// Object

// 1. Properties
// (Name, Height, Mobile No., Address, Weight) ----> Human

// 2. Action
// (Eat, Walk, Talk, Run, Study) ----> Action

// const person = {
//     firstName: "Mike",
//     lastName: "Allen",
//     email: "mike@gmail.com",
// };

// const person = {};

// person.firstName = "Mike";
// person.lastName = "Allen";
// person.email = "mike@gmail.com";

// const person = new Object();
// person.firstName = "Mike";
// person.lastName = "Allen";
// person.email = "mike@gmail.com";

// console.log(person);
// console.log(person.firstName);
// console.log(person['email']);

// Changing property value

// const person = {
//     firstName: "Mike",
//     lastName: "Allen",
//     email: "mike@gmail.com",
// };

// person.firstName = "Elon";

// console.log(person.firstName);

// Deleting property value

// const person = {
//     firstName: "Mike",
//     lastName: "Allen",
//     email: "mike@gmail.com",
// };

// delete person.firstName;

// console.log(person);

// for in loop

// const person = {
//     firstName: "Mike",
//     lastName: "Allen",
//     email: "mike@gmail.com",
// };

// for(let key in person){
//     console.log(key);
//     // console.log(person[key]);
// }

// in operator

// const person = {
//     firstName: "Mike",
//     lastName: "Allen",
//     email: "mike@gmail.com",
// };

// console.log('car' in person);

// const person = {
//     firstName: "Mike",
//     lastName: "Allen",
//     email: "mike@gmail.com",
//     sayHello: function(){
//         console.log("Hello World");
//     }
// };

// person.sayHello = function(){
//     console.log("Hello World");
// }

// person.sayHello();

// console.log(person.sayHello());

// const person = {
//     firstName: "Mike",
//     lastName: "Allen",
//     email: "mike@gmail.com",
//     sayHello: function(){
//         // console.log("Hello I am " + person.firstName + " and I have " + car.model + " Car.");
//         console.log("Hello I am " + this.firstName + " and I have " + car.model + " Car.");
//     }
// };

// const car = {
//     brand: "Ford",
//     model: "Mustang",
// };

// person.sayHello();

// Math Object

// console.log(Math);
// console.log(Math.PI);

// let x = Math.round(4.4);
// let x = Math.ceil(4.1);
// let x = Math.floor(4.9);

// console.log(x);

// let x = Math.pow(8, 3);
// let x = Math.sqrt(64);
// let x = Math.abs(-64);

// let x = Math.min(100, 50, 75, -200, 200, 350);
// let x = Math.max(100, 50, 75, -200, 200, 350);

// console.log(x);

// let x = Math.ceil(Math.random() * 10);

// console.log(x);

// const obj1 = {
//     a: 1,
//     b: 2,
// };

// const obj2 = {
//     c: 3,
//     d: 4,
// };

// // const res = Object.assign(obj1, obj2);
// const res = Object.assign({}, obj1, obj2);

// console.log(res);
// console.log(obj1);

// const users = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
// ];

// console.log(users[0].address.geo.lat);

// const person = {
//   firstName: "Mike",
//   lastName: "Allen",
//   email: "mike@gmail.com",
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));

// console.log(person.hasOwnProperty("car"));

// const person = {
//   firstName: "Mike",
//   lastName: "Allen",
//   email: "mike@gmail.com",
// };
// const person = {
//   firstName: "Mike",
//   lastName: "Allen",
//   email: "mike@gmail.com",
// };
// const person = {
//   firstName: "Mike",
//   lastName: "Allen",
//   email: "mike@gmail.com",
// };
// const person = {
//   firstName: "Mike",
//   lastName: "Allen",
//   email: "mike@gmail.com",
// };
// const person = {
//   firstName: "Mike",
//   lastName: "Allen",
//   email: "mike@gmail.com",
// };

// Object Constructors

// function Person(first, last, email){
//   this.firstName = first;
//   this.lastName = last;
//   this.email = email;
// }

// Person("Mike", "Allen", "mike@gmail.com");

// let person1 = new Person("Mike", "Allen", "mike@gmail.com");
// let person2 = new Person("Mike1", "Allen1", "mik1e@gmail.com");
// let person3 = new Person("Mike2", "Allen2", "mike2@gmail.com");
// let person4 = new Person("Mike3", "Allen3", "mike3@gmail.com");
// let person5 = new Person("Mike4", "Allen4", "mike4@gmail.com");

// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4);
// console.log(person5);

// Date Object

// let myDate = new Date();
// let myDate = new Date(2025, 0, 15, 5, 40, 10);
// let myDate = new Date("2025-01-20");

// console.log(myDate);

// Hoisting
// console.log(x);

// let x = 10;

// hello();

// function hello(){
//   console.log("Hello World!");
// }

// DOM (Document Object Model)

// Select Element by id
// let elm = document.getElementById("h1");

// console.log(elm);

// Select element by tag name
// let elm = document.getElementsByTagName("h1");

// console.log(elm);

// Select Element by Class Name
// let elm = document.getElementsByClassName("head");

// console.log(elm);

// Select Element by CSS Selector
// let elm1 = document.querySelector("#h1");

// let elm2 = document.querySelector("h2");
// let elm2 = document.querySelectorAll("h2");

// let elm3 = document.querySelector(".head");
// let elm3 = document.querySelectorAll(".head");

// console.log(elm1);
// console.log(elm2);
// console.log(elm3);

// Select Parent Element
// let elm = document.getElementById("list");

// let parent = elm.parentElement;

// console.log(parent);

// Select Child Element
// let parent = document.getElementById("parent");

// let child1 = parent.firstElementChild;
// let child = parent.lastElementChild;
// let child = parent.children;

// console.log(child);

// Select Sibiling Element
// let elm = document.getElementById("list");

// let node = elm.previousElementSibling;
// let node = elm.nextElementSibling;
// let node = elm.nextElementSibling.nextElementSibling.nextElementSibling;

// console.log(node);

// innerHTML
// let elm = document.getElementById("list");

// let node = elm.innerHTML;

// console.log(node);

// Replacing HTML element using innerHTML
// let elm = document.getElementById("list");

// elm.innerHTML = "<h1>This is Heading 1</h1>";

// Create and Append Element
// let parent = document.getElementById("parent");

// let newElm = document.createElement("h1");
// newElm.className = "dim";
// newElm.id = "head";

// let text = document.createTextNode("This is Heading 1");

// newElm.appendChild(text);
// parent.appendChild(newElm);
// document.body.appendChild(newElm);

// Insert Before
// let parent = document.getElementById("parent");

// let newElm = document.createElement("li");
// newElm.textContent = "This is new List";

// let position = parent.firstElementChild;

// parent.insertBefore(newElm, position);

// Adding element outside parent element

// let pos = document.body;

// let elm = document.createElement("h1");
// elm.textContent = "This is Heading 1";

// let parent = document.getElementById("parent");

// pos.insertBefore(elm, parent)

// Remove Child Element

// let parent = document.getElementById("parent");

// let pos = parent.firstElementChild.nextElementSibling;

// parent.removeChild(pos);

// Clone Element

// let parent = document.getElementById("parent");

// let newElm = parent.cloneNode(true);
// newElm.id = "mobile-menu";

// document.body.appendChild(newElm);

// Replace Element

// let parent = document.getElementById("parent");

// let newElm = document.createElement("li");

// newElm.textContent = "Services";

// let pos = parent.firstElementChild.nextElementSibling;

// parent.replaceChild(newElm, pos);

// insertAdjacentHTML

// let parent = document.getElementById("parent");

// let newElm = "<h1>This is Another Heading</h1>";

// parent.insertAdjacentHTML('beforebegin', newElm);
// parent.insertAdjacentHTML('afterbegin', newElm);
// parent.insertAdjacentHTML('beforeend', newElm);
// parent.insertAdjacentHTML('afterend', newElm);

// Add Attribute
// let btn = document.getElementById("btn");

// btn.setAttribute("name", "form1");

// Get Attributes
// let btn = document.getElementById("btn");

// let value = btn.getAttribute("name");

// console.log(value);

// Remove Attributes
// let btn = document.getElementById("btn");

// let value = btn.removeAttribute("name");

// Check Attribute
// let btn = document.getElementById("btn");

// let value = btn.hasAttribute("class");

// console.log(value);

// Inline CSS
// let btn = document.getElementById("btn");
// btn.style.cssText = "background-color: yellow; padding: 20px; border: none; font-size: 20px;";
// btn.setAttribute("style", "background-color: yellow; padding: 20px; border: none; font-size: 20px;");
// btn.style.color = "red";
// btn.style.padding = "20px";
// btn.style.backgroundColor = "yellow";
// btn.style.border = "none";

// Assignment
// 3 box ---> Height and widht 300px
// background color
// border
// padding

// Height and Widht of Element
// let elm = document.getElementById("box");

// let width1 = elm.offsetWidth;
// let width2 = elm.clientWidth;

// let height1 = elm.offsetHeight;
// let height2 = elm.clientHeight;

// console.log(width1);
// console.log(width2);
// console.log(height1);
// console.log(height2);

// DOM Events

// let btn = document.getElementById("btn");

// btn.addEventListener("click", hello);

// function hello(){
//     alert("Button was Clicked!");
// }

// btn.addEventListener("click", function () {
//   alert("Button was clicked!");
// });

// Using Multiple Events

// let btn = document.getElementById("btn");

// btn.addEventListener("click", click1);
// btn.addEventListener("click", click2);

// function click1(){
//     console.log("Button was clicked!");
// }

// function click2(){
//     console.log("Another Clicked");
// }

// btn.addEventListener("mouseover", function(){
//     console.log("Mouse Over was activated!");
// });

// btn.addEventListener("mouseout", function(){
//     console.log("Mouse Out was activated!");
// });

// Remove event

// let btn = document.getElementById("btn");

// btn.addEventListener("click", click1);
// btn.addEventListener("click", click2);

// function click1(){
//     console.log("Button was clicked!");
// }

// function click2(){
//     console.log("Another Clicked");
// }

// btn.removeEventListener("click", click2 );

// let btn = document.getElementById("btn");

// btn.addEventListener("contextmenu", function(){
//     console.log("Right Clicked!");
// })

// btn.addEventListener("dblclick", function(){
//     console.log("Double Clicked!");
// })

// Input Events

// let elm = document.getElementById("inp");

// elm.addEventListener("focus", function () {
//   elm.style.backgroundColor = "yellow";
// });

// elm.addEventListener("blur", function () {
//   elm.style.backgroundColor = "white";
// });

// elm.addEventListener("change", function () {
//   console.log(this.value);
// });

// elm.addEventListener("input", function () {
//   console.log(this.value);
// });

// Event Bubbling and Event Capturing

// Bubbling ---> False
// Capturing ---> True

// let parent = document.getElementById("parent");
// let btn = document.getElementById("btn");

// parent.addEventListener("click", parentClick, true);
// btn.addEventListener("click", btnClick, true);
// document.body.addEventListener("click", bodyClick, true);

// function parentClick(){
//   console.log("Parent Clicked!");
// }

// function btnClick(){
//   console.log("Button Clicked!");
// }

// function bodyClick(){
//   console.log("Body Clicked!");
// }

//  div ---> section ---> section ---> btn

// BOM (Browser Object Model)
// alert("Hello World");

// window.alert("Hello World");

// Types of BOM
// 1. Window Object
// 2. History Object
// 3. Screen Object
// 4. Navigator Object
// 5. Location Object

// Screen Object
// console.log("Width: ", screen.width);
// console.log("Height: ", screen.height);
// console.log("Available Width: ", screen.availWidth);
// console.log("Available Height: ", screen.availHeight);
// console.log("Color Depth:", screen.colorDepth);
// console.log("Pixel Depth:", screen.pixelDepth);

// Navigator Object
// console.log("Cookies:", navigator.cookieEnabled);
// console.log("App code name:", navigator.appCodeName);
// console.log("Platform:", navigator.platform);

// Location Object
// console.log("Location:", location);
// console.log("HREF:", location.href);
// console.log("Hostname:", location.hostname);
// console.log("Protocol:", location.protocol);

// History Object
// console.log("History:", history);

// PreventDefault();

// let link = document.getElementById("link");

// link.addEventListener("click", function(e){
//   console.log("Link Clicked!...");
//   e.preventDefault();
// })

// setTimeout and setTimeinterval

// setTimeout(function, time in milisecond);

// function hello(){
//   console.log("Hello World");
// }

// setTimeout(hello, 1000);

// let time = setInterval(hello, 2000);

// function hello(){
//   console.log("Hello World!");
// }

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function(){
//   clearInterval(time);
// })

// Arrow Function

// const hello = () => {
//   console.log("Hello World!");
// };

// hello();

// const nums = (x, y, z) => {
//   console.log(x + y + z);
// }

// nums(10, 20, 30);

// const nums = (x, y, z) => console.log(x + y + z);

// nums(10, 20, 30);

// Map method
// const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const res = nums.map((val) => val + 10);

// console.log(res);

// Multiple map methods

// const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const res = nums.map((val) => val + 10).map((val) => val * 2);

// console.log(res);

// const map = new Map();

// map.set("IN", "India");
// map.set("US", "United State");
// map.set("FR", "France");
// map.set("DE", "Germany");
// map.set("IN", "India");

// for(const key of map){
//   console.log(key);
// }

// for(const [key, value] of map){
//   console.log(key, "->", value);
// }

// console.log(map);

// Foreach Method
// const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let length1 = nums.length;

// for(let i = 0; i < length1; i++){
//   console.log(nums[i]);
// }

// nums.forEach((val) => console.log(val));

// Filter Method
// const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const res = nums.filter((val) => val > 40);

// console.log(res);

// const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const res = nums
//   .map((val) => val + 10)
//   .map((val) => val * 2)
//   .filter((val) => val > 100);

// console.log(res);

// 1 array (1 to 10)

// 1. multiply by 2
// 2. 10 add
// 3. 50 > print

// Reduce Method

// Syntax:-
// reduce(function(total, currentValue), initialValue);

// total ---> empty Variable
// initial Value ---> 0

// let arry = [100, 200, 400, 500, 600];

// let sum = arry.reduce(function (total, currentValue) {
//   return total + currentValue;
// }, 0);

// console.log(sum);

// const cart = [
//   {
//     itemName: "Iphone 17 pro max",
//     price: 5999,
//   },
//   {
//     itemName: "Iphone 16 pro max",
//     price: 5559,
//   },
//   {
//     itemName: "Iphone 15 pro max",
//     price: 4999,
//   },
//   {
//     itemName: "Samsung s26 ultra",
//     price: 5999,
//   },
// ];

// const res = cart.reduce((total, currentValue) => total + currentValue.price, 0);

// console.log(res);

// Find Method

// const cart = [
//   {
//     itemName: "Iphone 17 pro max",
//     price: 5999,
//   },
//   {
//     itemName: "Iphone 16 pro max",
//     price: 5559,
//   },
//   {
//     itemName: "Iphone 15 pro max",
//     price: 4999,
//   },
//   {
//     itemName: "Samsung s26 ultra",
//     price: 5999,
//   },
// ];

// let res = cart.find((item) => {
//   return item.itemName === "Iphone 17 pro max";
// });

// console.log(res);

// Spread Operator (...)

// let a = [1, 2, 3, 4, 5, 6];

// let b = [7, 8, 9, 10, 11, 12];

// let c = [13, 14, 15, 16, 17, 18];

// let res = [...a, ...b, ...c];

// console.log(res);

// Rest Parameter (...)

// let a = [10, 20, 30, 40, 50];

// let [x, y, ...z] = a;

// console.log(z);

// Synchronous (Javascript by Default)
// console.log("Hello World 1");
// console.log("Hello World 2");
// console.log("Hello World 3");
// console.log("Hello World 4");
// console.log("Hello World 5");
// console.log("Hello World 6");
// console.log("Hello World 7");
// console.log("Hello World 8");
// console.log("Hello World 9");
// console.log("Hello World 10");

// Asynchronous

// console.log("Hello World 1");
// console.log("Hello World 2");

// setTimeout(()=>{
//   console.log("Hello World 3");
// }, 3000);

// console.log("Hello World 4");
// console.log("Hello World 5");
// console.log("Hello World 6");
// console.log("Hello World 7");

// setTimeout(()=>{
//   console.log("Hello World 8");
// }, 0);

// console.log("Hello World 9");
// console.log("Hello World 10");

// Promise
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("My Task is Completed!");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Promise Comsumed!");
// });

// myPromise.then(() => {
//   console.log("Promise Comsumed!");
// });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Elon", email: "elon@gmail.com" });
//   }, 1000);
// }).then((user) => {
//   console.log(user);
// });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Elon", email: "elon@gmail.com" });
//     } else {
//       reject("ERROR: something went wrong!");
//     }
//   }, 1000);
// })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(()=> {
//     console.log("The Promise is either resolve or rejected!");
//   })

// Async and Await

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Elon", email: "elon@gmail.com" });
//     } else {
//       reject("ERROR: something went wrong!");
//     }
//   }, 1000);
// });

// async function consumePromise() {
//   try {
//     const response = await myPromise;
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
//   finally{
//     console.log("The Promise is either resolve or rejected!");
//   }
// }

// consumePromise();

// API (Application Programming Interface)

// https://jsonplaceholder.typicode.com/posts

// async function posts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// posts();

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// OOPS (Object oriented programming system)

// Class (Blueprint)

// Object (Bottel)

// Parts of OOP
// 1. Constructor Function
// 2. Prototypes
// 3. Classes
// 4. Instances

// 4 Piller of OOP
// 1. Encapulation
// 2. Inheritance
// 3. Abstraction
// 4. Polymorphism

// Prototypes

// function Person(name, email){
//   this.name = name;
//   this.email = email;
// }

// Creating a new Object
// let person = Object.create(Person.prototype);

// Adding a method in new Object
// Person.prototype.sayHello = function(){
//   console.log("Hello World");
// }

// person.sayHello();

// function SetUser(username){
//   this.username = username;
//   console.log("Called!");
// }

// function CreateUser(username, email, address){
//   SetUser.call(this, username)
//   this.email = email;
//   this.address = address;
// }

// const person = new CreateUser("Mike", "mike@gmail.com", "Toronto");

// console.log(person);

// Class

// class User{
//   constructor(username, email, address){
//     this.username = username;
//     this.email = email;
//     this.address = address;
//   }

//   // Creating Method
//   updateUserName(){
//     return `${this.username.toUpperCase()}`
//   }

//   updateAddress(){
//     return `${this.address.toLowerCase()}`
//   }
// }

// let user1 = new User("Mike", "mike@gmail.com", "Toronto");

// console.log(user1);
// console.log(user1.updateAddress());
// console.log(user1.updateUserName());


git config --global user.name "Your Name"
git config --global user.email "abc@gmail.com"

git config --global user.name "Your Name"
git config --global user.email "abc@gmail.com"

git config --global user.name "Your Name"
git config --global user.email "abc@gmail.com"

git config --global user.name "Your Name"
git config --global user.email "abc@gmail.com"

git config --global user.name "Your Name"
git config --global user.email "abc@gmail.com"


