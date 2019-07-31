const list = document.getElementsByTagName("li");
const red = document.getElementsByClassName("not-orange")
const heading = document.getElementById("myHeading")

//turns all the list elements to orange
// for(let i=0; i<list.length; i++) {
//     list[i].style.color = "orange"
// }


//!IMPORTANT! Order matters here. If these funcs are other way around
//doesnt work. As one turns ALL orange other only turns two. Try it.

//turns list elements to orange when u click on the heading
heading.addEventListener("click", () => {
    for(let i=0; i<list.length; i++) {
        list[i].style.color = "orange"
    }
})

//turns two to red.
heading.addEventListener("click", () => {
    for(let i=0; i<red.length; i++) {
        red[i].style.color = "red"
    }
})



// function color () {
//     console.log(list)
//     list[0].style.color = "pink"
//     console.log(list)
//     list[1].style.color = "aqua"
//     console.log(list)
//     list[2].style.color = "blue"
//     console.log(list)
//     list[3].style.color = "teal"

// }
// color()

// function color (color1, color2, color3, color4) {
//     console.log(list)
//     list[0].style.color = color1
//     console.log(list)
//     list[1].style.color = color2
//     console.log(list)
//     list[2].style.color = color3
//     console.log(list)
//     list[3].style.color = color4

// }
// color("yellow", "green", "orange", "pink")

