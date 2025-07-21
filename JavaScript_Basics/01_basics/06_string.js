const name="lakshit"
const repoCount=5
console.log(name+repoCount+"value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('lakshit-sisodiya')
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(1))
console.log(gameName.indexOf("t"))

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(1,5)
console.log(anotherString)

const string1="       dvvefew "
console.log(string1)
console.log(string1.trim())

const url="https://www.facebook.com"
console.log(url.replace("facebook","instagram"))

console.log(url.includes("facebook"))


const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words);
console.log(words[3]);

// Expected output: "fox"

const chars = str.split("");
console.log(chars);

console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]