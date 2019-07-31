const image = document.getElementById("image");
const submitButton = document.getElementById("submit");
const input = document.getElementById("input");


submitButton.addEventListener("click", () => {
    image.src = input.value;

});

