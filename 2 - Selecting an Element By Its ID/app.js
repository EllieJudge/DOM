const myHeading = document.getElementById("heading");
const userInput = document.getElementById("input");
const myButton = document.getElementById("button");


myButton.addEventListener("click", () => {
    myHeading.style.color = userInput.value;
});


