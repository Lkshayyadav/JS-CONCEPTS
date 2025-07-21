let a=document.querySelector("a")
a.setAttribute("href","https://www.instagram.com")
let img=document.querySelector("img")
img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1741175363663-b83a99e37685?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
)
let b=document.querySelector("#get")
console.log(b.getAttribute("href"))

let c=document.querySelector("#remove")
c.removeAttribute("href")