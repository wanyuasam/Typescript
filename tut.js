"use strict";
let id = 4; // js
let num = 23; // typescript
let company = "Acne corp.";
let isTrue = true;
// define array
let position = ['1', '2', '3', '4', '5'];
let x = "pedro";
let xArr = ["Pedro", 0, true];
// any - defines a variable in any of the types
// defining a function
const concantenateValues = (a, b) => {
    return a + b;
};
const result = concantenateValues("sam", "wanyua");
console.log(result);
// union
const printId = (id) => {
    console.log(`Your ID is: ${id}`);
};
printId("sdjds324");
const signContract = (employee) => {
    console.log(`Contract signed by ${employee.name} with a credit score of ${employee.creditScore}`);
};
signContract({ name: "Wanyua", creditScore: 8, id: 3242, email: "wanyua34@wanyua.com" });
