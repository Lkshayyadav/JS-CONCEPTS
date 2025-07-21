let count=0
let progress = document.querySelector("#progress")
let perText=document.querySelector("#percent")
let com=document.querySelector("h2")
let intv=setInterval(()=>{
    if(count<100){
        count++
        progress.style.width=`${count}%`
        perText.textContent=`${count}%`
    }
    else{
        com.textContent="Downloaded"
        clearInterval(intv)
    }
},3*1000/100) /// it will complete in 3 sec