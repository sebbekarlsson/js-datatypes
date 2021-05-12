const person = {
    firstname: "John",
    lastname: "Doe"
};

const pet = {
    name: "Boo"
}

/*console.log(typeof person);
console.log(typeof person.firstname);*/

const result = person + pet;

console.log(result); // "[object Object][object Object]"