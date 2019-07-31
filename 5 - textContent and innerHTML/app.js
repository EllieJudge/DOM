const placeholder = document.getElementById("placeholder");
const inputBox = document.getElementById("input");
const submitButton = document.getElementById("submit");
const list = document.getElementById("list");

submitButton.addEventListener("click", () => {
    placeholder.style.color = "red";
    // placeholder.textContent = input.value;
    // placeholder.textContent = `<li>${input.value}</li>`
    
   list.innerHTML = `<li>${input.value}</li>`
});


