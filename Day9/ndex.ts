let username: string = "Abhinandan";
let result: number | string;
result = 45;
result = "success";
console.log(username, result);
 
function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}
 
console.log(add(5, 10));

interface Person {
    id: number;
    name: string;
    age: number;
    role: Role; // using enum for role
    isAdmin?: boolean; // optional property ?
}

interface Person {
    email: string; // merge interface to add email property
}

enum Role {
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPER_ADMIN"
} // USER, user, User, ADMIN, Admin, admin, SUPER_ADMIN, SuperAdmin, superAdmin

const user: Person = {
    id: 1,
    name: "Abhinandan",
    age: 25,
    role: Role.User,
    email: "abhinandan@gmail.com"
};

const admin: Person = {
    id: 2,
    name: "Dhruv",
    age: 30,
    email: "dhruv@gmail.com",
    role: Role.Admin,
    isAdmin: true
};

console.log(user, admin);

let coordinates: [number, string] = [40.7128, "-74.0060"]; // Tuple for latitude and longitude
console.log("Coordinates:", coordinates);

let arr: number[] = [1, 2, 3]; // array of numbers
console.log("Array:", arr);

// function identity<T>(arg: T): T {
//     return arg;
// }

// let output = identity<number>(10);
// let outpu1 = identity<string>("Aaryan");
// let outpu2 = identity<boolean>(true);

// console.log(output, outpu1, outpu2);

// Generic interface for a bag that can hold any type of content
// interface Bag<T> {
//     content: T;
// }

// const stringBag: Bag<string> = {content: "Apple"};
// const numberBag: Bag<number> = {content: 5};

// console.log(stringBag, numberBag);

class ItemStorage<T> {
    private items: T[] = [];

    addItems(item: T): void { // no return type
        this.items.push(item);
    }

    getItem(index: number): T | undefined {
        return this.items[index];
    }
}

const names = new ItemStorage<string>();
names.addItems("Abhinandan");
names.addItems("Dhruv");
names.addItems("Rohan");

console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); // undefined for index 3



//Generics_with_constraints_with_extends_keyword
//generics helps us for reusability 
interface HasLength{
    length: number;
}

function logLength<T extends HasLength>(args: T): void{
    console.log(args.length);
}
//extends means: T must contain a length property

logLength("Abhinandan");
logLength([1,2,3,4,5,6]);
// logLength(1); // would give us an error, as number doesn't have any length