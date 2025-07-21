let nm=document.querySelector("#name")
let email=document.querySelector("#email")
let pass=document.querySelector("#pass")

let form=document.querySelector("form")

form.addEventListener("submit",function(dets){
    dets.preventDefault()
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let ans=regex.test("a.com")
    console.log(ans);
    
})