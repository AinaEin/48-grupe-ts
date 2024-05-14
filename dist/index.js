"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Labas rytas, Lietuva!");
let name = "Jonas";
console.log(name);
name = "5";
console.log(name);
const lastname = "Jonaitis";
const age = 99;
const isMarried = true;
console.log(lastname, age, isMarried);
const marks = [10, 2, 8, 4, 6];
const x = marks.join("");
console.log(x);
const students = ["Jonas", "Maryte"];
students.push("Petras", "Ona");
function sum(a, b) {
    return a + b;
}
sum(7, 5);
// sum('labas', 5); // 'labas5'
function diff(a, b, convertToString) {
    if (convertToString === true) {
        return "" + (a + b);
    }
    else {
        return a + b;
    }
}
const c = diff(7, 5, true);
const d = diff(7, 5, false);
console.log(c, d);
if (typeof c === "string") {
    console.log("C skaitmenu turi:", c.length);
}
if (typeof d === "string") {
    console.log("D skaitmenu turi:", d.length);
}
// const mix = ["asd", 184];
// const mix2: (number | string | boolean)[] = [
//   45518,
//   "asd",
//   5148,
//   "ewrgs",
//   true,
//   false,
// ];
// const mix3: (number | string)[] = [152, 1485, 485, 'dfsd'];
// const mix3: (number | string)[] = ['fds', 'wewr', 'der', 2514];
// const mix3: number[] | string[] = ['fds', 'wewr', 'der', 2514];
const mix3 = [145, 4851, 4895];
console.log(mix3);
// const str = "Labas rytas".split("").map((x) => x * 2);
// console.log(str);
// function suma(a: number, b: number) {
//   return a + b;
// }
// console.log(suma(7, 5));
// console.log(suma(7, "asd"));
// console.log(suma("asd", 5));
// console.log(suma("asd", "asd"));
// function random(a: number, b: string, c: boolean, d: number[]) {
//   return null;
// }
// console.log(random(1, 2, 3, 4));
