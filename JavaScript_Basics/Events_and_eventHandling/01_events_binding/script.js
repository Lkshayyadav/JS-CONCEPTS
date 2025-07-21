// Adding a event listner

let rem= function(){
    p.style.color="red"
}

let p=document.querySelector("p")
p.addEventListener("click",rem)
 
// Removing a event listner


p.removeEventListener("click",rem)