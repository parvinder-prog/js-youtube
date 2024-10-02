const accountId = 144532
let accountEmail ="palvi@google.com"
var accountPassword = "12345"
accountCity = "Hoshiarpur"// we can't use variables this 
let accountState;

// accountId = 2 // not allowed

accountEmail = "hcg@google.com"
accountPassword ="24376473485"
accountCity = "benglaru"

console.log(accountId);

console.table([accountId, accountEmail ,accountPassword, accountCity, accountState])

/*
Prefer not to use var 
because of issue in block scope and functional scope
so always use let or const to define any variable
*/