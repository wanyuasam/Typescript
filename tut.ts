let id = 4; // js
let num: number = 23; // typescript
let company: string = "Acne corp."
let isTrue: boolean = true

// define array
let position: string[] = ['1','2','3','4','5'];
let x: any  = "pedro";
let xArr: any[] = ["Pedro", 0, true];

// any - defines a variable in any of the types


// defining a function
const concantenateValues = (a:string,b: string): string => {
    return a + b;
}
const result: string = concantenateValues("sam", "wanyua");
console.log(result);

// Creating my own type
type IDField = string | number;
// union
const printId = (id: IDField) => {
    console.log(`Your ID is: ${id}`);
}

printId("sdjds324");

// Intersection in typescript
interface BusinessPartner{
    name: string,
    creditScore: number,
}

interface UserIdentity{
    id: number,
    email: string,
}

type Employee = BusinessPartner & UserIdentity;
const signContract = (employee: Employee): void => {
    console.log(`Contract signed by ${employee.name} with a credit score of ${employee.creditScore}`)
}

signContract({name: "Wanyua", creditScore: 8, id: 3242, email: "wanyua34@wanyua.com"})
