// 1. get the element we want, attach listener

let clickable = document.querySelector("img.clickable")

clickable.addEventListener("click", clickCounter)

// declare the counter variable

let counter = 0
console.log("counter: ", counter)

//click handler function

function clickCounter(){


// track total clicks--increment the counter variable
    
    // counter = counter + 1

counter++
    
    //output click count to container in DOM
    
    console.log("counter", counter)
    
    // get the container, update its contents
    
    let container = document.querySelector("p#clickcount")
    container.innerHTML = counter
}
    
// document.title = `${clickCount} Koala${clickCount > 1 ? 's' : ''} - Koala Clicker`

/* let displayTitle = document.querySelector("title");
Ques - let displayTitle = document.querySelector("title");
displayTitle.innerHTML = counter; */

/*if (counter === 10) {
let rotate = document.querySelector("img.clickable")
rotate.setAttribute("class", "clickable2")
alert("Congrats, you clicked 10 times!")
} else if (counter === 20) {
let rotate2 = document.querySelector("img.clickable2")
rotate2.setAttribute("class", "clickable")
alert ("Chill out!  That was your 20th click.")
} */
    

/* var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
}; */

/* if (counter == 10 || counter == 20) {	
container.innerHTML = ""
h2Text.setAttribute("style", "color:red")
h2Text.innerHTML = counter
h2Text.style.transition = "all 2s"
h2Text.style.transform = "rotate(360deg)"
} else {
h2Text.innerHTML = ""
container.innerHTML = counter
} */

