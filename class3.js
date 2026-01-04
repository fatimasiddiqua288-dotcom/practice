// switch example
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// Simple calculator
let operator = "-";
let a = 5;
let b = 3;

switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    default:
        console.log("Unknown operator");
}

// string methods
let name = "fatima siddiqua";
console.log(name.toUpperCase());

let Sentence = "javascript is good";
console.log(Sentence.includes("good")); // true

// string slicing
let fullname = "fatima siddiqua";
let firstname = fullname.slice(0, 5);
console.log(firstname);

let phone = "03123456789";
let lastdigital = phone.slice(-4);
console.log(lastdigital);

// type conversion vs comparison
console.log(5 == "5");  // true
console.log(5 === "5"); // false

// method chaining
let input = "  hello world  ";
let result = input.trim().toUpperCase();
console.log(result);

// print no's 1 to 5
for (let i = 1; i<=5; i++){
    console.log (i)
}

//print even numbers 1 to 10
for(let i = 1; i<= 10; i ++){
    if (i % 2 === o)
}
