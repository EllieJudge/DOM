const image = document.getElementById("cat");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    
//image.style.maxWidth=0; <<could do it like this as well



if(image.style.display == "none"){
    image.style.display="block";
    submit.textContent = "hide";
}
else {
    image.style.display = "none";
    GamepadButton.textContent = "show";
}

});