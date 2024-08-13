
interface UserInterface{
    id: number,
    name: string,
    age?: number // age now is optional
    greet(message: string): void // we're not returning anything
}
const User: UserInterface ={
    id: 2,
    name: 'sam',
    age: 23,
    greet(message: string): void {
        console.log(message)
    }
};

User.age = 34;

User.greet("I am a TS developer");

if(!User.age){
    console.log("Age not found!")
}
else{
console.log(User.age);
}




