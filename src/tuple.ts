let tuple: [string, number] = ["foo", 0];
tuple = ["aiueo", -555];

console.log(`${tuple[0]}: ${typeof tuple[0]}`);
console.log(`${tuple[1]}: ${typeof tuple[1]}`);

type User = [name: string, age: number];
const test: User = ["test", 30];
console.log(test[0]);
// console.log(test[name]);
// console.log(test.name);
