const input = document.getElementById("input");//input box
const button = document.getElementById("submit");//submit button
let list = document.getElementsByTagName("ul")[0];//unordered list, [0] indicates 
//this is the first unordered list on the html page we want to access (assumes there will/are more?)
const hide = document.getElementById("showhide-btn");//hide button
const remove = document.getElementById("remove");


//don't quite understand this, why index 0?
remove.addEventListener("click", () => {
    list.removeChild(list.childNodes[0]); //can use literally just this line and it removes the items

    //leonas way:
    // let lastItem = document.querySelector('li:last-child');
    // list.removeChild(lastItem);
});


button.addEventListener("click", () => {
    let listItem = document.createElement("li");//creating a variable called list item w/ createElement method
    listItem.textContent = input.value;//making the elements text content = the users input
    list.appendChild(listItem);//add this child to list
    console.log(listItem);
    input.value=""; //clears the input box/resets it 

});

//on click button hide list
hide.addEventListener("click", () => {
    if(list.style.display == "none"){ //if no display/not displayed
        list.style.display = "block";//change to block/show
        hide.textContent = "hide";//what the button says
    }
    else {
        list.style.display = "none";//if it IS showing/displayed, change it to not displayed
        hide.textContent = "show";//what the button says
    }
});