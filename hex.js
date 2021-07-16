
let body = document.querySelector("body");
let button = document.querySelector("#btn");
let txt = document.querySelector(".color");

button.addEventListener("click", ()=>{

    let hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let color ="#";

    for (let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*hex.length)];
    }
    let convert = color.toString();

    txt.innerHTML = convert
    body.style.backgroundColor  = convert;
})
