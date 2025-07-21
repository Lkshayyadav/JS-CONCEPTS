// 1. Primitive (call by value)

// 7 types : string,number,boolean,null,undefined,symbol,BigInt

const score=100
const scorevalue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id==anotherId);
const bigNumber=14312432453243243242345324543543545435435435435n
console.log(bigNumber)

// 2. Reference type/Non-primitive

// Array,objects,functions 

const heros=['shaktiman','naagraj','doga']

let myObj={
    name:"lakshit",
    age:18 
}

const myFunction=function (){
    console.log("Hello world");
}
console.log(typeof(bigNumber));

//  *******************************************************

// Stack(Primitive) ,Heap(Non-Primitive)

let myYoutubeName="lakshit_Sisodiya"
let anotherName=myYoutubeName
anotherName="honey"
console.log(myYoutubeName);
console.log(anotherName);

let user1={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let user2=user1

user2.email="kuchbhi@gmail.com"

console.log(user1.email);
console.log(user2.email);
