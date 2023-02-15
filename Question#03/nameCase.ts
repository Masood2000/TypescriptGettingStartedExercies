let nm:String = "Masood"
let nml:String = nm.toLowerCase()
let nmu:String = nm.toUpperCase()
let nmt:String = nm.charAt(0).toUpperCase() + nm.substr(1).toLowerCase();

console.log("In Lower Case : %s",nml)
console.log("In Upper Case : %s",nmu)
console.log("In Title Case : %s",nmt)