"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jonas = {
  name: "Jonas",
  age: 99,
  isMarried: true,
  favoriteColor: "red",
};
const maryte = {
  name: "Maryte",
  age: 88,
  isMarried: false,
  marks: [10, 2, 8, 4, 6],
};
function studentMarksAverage(student) {
  if (!Array.isArray(student.marks)) {
    return `Studentas (${student.name}) neturi pazymiu.`;
  }
  if (student.marks.length === 0) {
    return `Studentas (${student.name}) turi tuscia pazymiu masyva.`;
  }
  let sum = 0;
  for (const mark of student.marks) {
    sum += mark;
  }
  return sum / student.marks.length;
}
console.log(studentMarksAverage(jonas));
console.log(studentMarksAverage(maryte));
