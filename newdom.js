const btn = document.getElementById("myButton");
const title = document.getElementById("title");
const nameInput = document.getElementById("nameInput");

btn.addEventListener("click", () => {
    const name = nameInput.value;

    if (name === "") {
        alert("Please enter your name");
    } else {
        title.textContent = "Hello " + name;
    }
});
