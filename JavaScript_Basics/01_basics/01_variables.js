const accountId=12345
let accountEmail="lakshitkumarsisodiya745@gmail.com"
var accountpassword="12345"
accountCity="jaipur"
let accountState;
// accountId=2  // not allowed
console.log(accountId);

accountEmail="lakshit@gmail.com"
accountPassword="54321"
accountCity="Alwar"
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var
because of issue in block scopeand functional scope
*/