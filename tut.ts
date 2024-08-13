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

const printId = (id: any) => {
    console.log(`Your ID is: ${id}`);
}

printId("sdjds324");
