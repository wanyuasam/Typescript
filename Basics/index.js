"use strict";
const User = {
    id: 2,
    name: 'sam',
    age: 23,
    greet(message) {
        console.log(message);
    }
};
User.age = 34;
User.greet("I am a TS developer");
if (!User.age) {
    console.log("Age not found!");
}
else {
    console.log(User.age);
}
