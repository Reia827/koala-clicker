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
    
    

/* var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
}; */


