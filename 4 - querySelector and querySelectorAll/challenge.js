//cycle over the list items and apply colors from the array called colours
const colors = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

//stores li elements in list variable
const list = document.getElementsByTagName("li")

//loops through the lis with a for loop
for(let i=0; i<list.length; i++) {
    
    list[i].style.color = colors[i] //applies color index to list index
}

