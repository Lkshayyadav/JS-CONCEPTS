// input event

// let input=document.querySelector("input")
// input.addEventListener("input",function(evt){
//     // console.log("typed")
//     if(evt.data !== null){ 
//       console.log(evt.data)
//     }
// })

// change event
let a=document.querySelector("select")
// a.addEventListener("change",function(dets){
//     console.log(dets.target.value)
// })
let h=document.querySelector("#change")
a.addEventListener("change",function(dets){
    h.textContent=dets.target.value+" Device selected"
})