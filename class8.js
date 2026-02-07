//creating a date in js

const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay())
const today = new Date();

const formatted = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
console.log(formatted);

//setTimeout(() => {
// console.log(("this runs after 2 seconds");
//} , 5000);


let count = 1;
const intervalId = setInterval(() => {
    console.log(`Count: ${count}`);
    count++;

    if (count > 5) {
        clearInterval(intervalId);
    }
}, 1000);