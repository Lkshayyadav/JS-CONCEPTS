let h1=document.createElement("h1")
h1.textContent="hello ji"
document.body.append(h1)
//        or
// document.querySelector("body").append(h1)
// document.body.prepend(h1)  // append before script tag

// let h2=document.querySelector("h2")
// h2.remove()

let h2=document.createElement("h2")
h2.textContent="hey m bahar s aaya hu"
document.querySelector("div").appendChild(h2)