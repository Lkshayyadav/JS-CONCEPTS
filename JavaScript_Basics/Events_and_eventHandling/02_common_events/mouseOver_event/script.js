let abcd=document.querySelector("#abcd")
// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor="yellow"
// })
// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor="red"
// })

window.addEventListener("mousemove",function(dets){
    abcd.style.top=dets.clientY+"px"
    abcd.style.left=dets.clientX+"px"
})