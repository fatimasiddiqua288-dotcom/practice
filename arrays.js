const person = {
  firstName: "Munim",
  lastName: "Usmani",
  age: 21,
  isEmployed: false,
  talk: function () {
    console.log("yes i can talk");
  },
  eat: function () {
    console.log("i like eating burgers");
  },
};

console.log(person.firstName);
console.log(person.age);
person.talk();
person.eat();

const person1 = {
  firstName: "Spongebob",
  lastName: "SquarePants",
  age: 26,
  isEmployed: true,
  talk: () => {
    console.log("hey I am patrick");
  },
  eat: () => {
    console.log("yes i eat pizza's");
  },
};
 
person.age = 22;
person.isEmployed = true;

console.log(person);

let fruits = ["apple", "orange" , "banana"];
console.log("Initial array:", fruits);


fruits[0] = "coconut";
console.log ("After updating index 0:", fruits);

fruits.push("coconut");
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:" , fruits);

fruits.unshift("mango");
console.log("After unshift:", fruits);


fruits.shift("mango");
console.log("After shift:", fruits);

let numOfFruits = fruits.length;
console.log("Number of fruits:", numOfFruits);





 
