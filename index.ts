
interface UserInterface{
    id: number,
    name: string,
    age?: number // age now is optional
}
const User: UserInterface ={
    id: 2,
    name: 'sam',
    age: 23,
};User.age = 34;


console.log(User.age);




