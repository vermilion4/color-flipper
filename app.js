let body = document.querySelector("body");
let button = document.querySelector("#btn");
let txt = document.querySelector(".color");

button.addEventListener("click", ()=>{

    let colors = ["red", "blue", "yellow", "green", "orange", "teal", "brown", "violet", "peach", "pink", "white", "black"];

      let color = Math.floor(Math.random()*colors.length);

    txt.innerHTML = colors[color];
    body.style.backgroundColor  = colors[color];
})
