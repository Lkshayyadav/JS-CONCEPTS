let myDate=new Date()
console.log((myDate.toString()));
console.log((myDate.toDateString()));
console.log((myDate.toJSON()));
console.log((myDate.toLocaleString()));
console.log((myDate.toISOString()));
console.log(typeof myDate)

// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2023-01-24")
let myCreatedDate=new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));

 let newDate=new Date()
 console.log(newDate.getDate())
 console.log(newDate.getDay())
 console.log(newDate.getFullYear())
 console.log(newDate.getMonth()+1)


 let pr1 = new Date().toLocaleDateString('default', {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: '2-digit '
});

console.log(pr1);
