const title = document.getElementById("title");
console.log(title);

const text = document.getElementsByClassName("text");
console.log(text);

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);

const prac = document.querySelector("#title");
console.log(prac);

const allparas = document.querySelectorAll("p");
console.log(allparas);

title.classList.add("active");

const btn = document.getElementById("myButton");

btn.addEventListener("click", () => {
    alert("button clicked");
    title.textContent = "Button was clicked";
});


document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("myButton");
    const title = document.getElementById("title");

    btn.addEventListener("click", () => {
        alert("button clicked");
        title.textContent = "Button was clicked";
    });
});
