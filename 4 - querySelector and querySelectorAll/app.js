const listItems = document.querySelectorAll("li:nth-child(even)");


//lists all the even items and turns them green
for(let i=0; i<listItems.length; i++) {
    listItems[i].style.color = "lightgreen"
}