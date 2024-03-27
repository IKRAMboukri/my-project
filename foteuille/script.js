const container = document.getElementById("container");
const purple = document.getElementById("purple");
const pink = document.getElementById("pink");
const green = document.getElementById("green");
const brown = document.getElementById("brown");
const blue = document.getElementById("blue");
const grey = document.getElementById("grey");





purple.addEventListener("click", event =>{
    container.style.backgroundColor = "purple";
    
})
pink.addEventListener("click", event =>{
    container.style.backgroundColor = "pink";
    
})
green.addEventListener("click", event =>{
    container.style.backgroundColor = "rgb(17, 81, 20)";
    
})

brown.addEventListener("click", event =>{
    container.style.backgroundColor = "rgb(144, 90, 18)";
    
})
blue.addEventListener("click", event =>{
    container.style.backgroundColor = "rgb(52, 52, 113)";
    
})

grey.addEventListener("click", event =>{
    container.style.backgroundColor = "grey";
    
})