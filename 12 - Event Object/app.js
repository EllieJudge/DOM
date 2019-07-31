const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
const listItem = document.getElementsByTagName('li');
const list = document.getElementById('list');

button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

removeBtn.addEventListener('click', () => {
    let listItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];

    list.removeChild(listItem);
})


/*New code below*/


//this console.logs the events and their targets that happen on our page/check which object we are clicking
document.addEventListener("click",(event)=> {
    console.log(event);
    console.log(event.target);
})

//adds event listener mouse over to list
list.addEventListener("mouseover",(event)=>{
    if(event.target.tagName == "LI") { //in a browser the tagName is read/understood 
 //by the browser as capitals (check in the browser console).
    event.target.textContent = event.target.textContent.toUpperCase();//change LI's content (what the list says) to capital letters
    }
});
//adds event listener when mouse out, to list
//because the tagName is always capital letters, when the mouse goes over its LI, when the mouse goes out
//it is still LI, because the above function hasnt changed the LI its changed it's content (what it says) to capitals
list.addEventListener("mouseout",(event)=> {
    if(event.target.tagName == "LI")
    event.target.textContent = event.target.textContent.toLowerCase();//change it to lowerCase
});
