function cityCountry(city:string,country:string):string{
     let str:string = "\"" + city + ", " + country + "\""
     return str

}

let str:string;

str = cityCountry("Karachi","Pakistan")
console.log(str)
str = cityCountry("Riyadh","Saudi Arabia")
console.log(str)
str = cityCountry("New York","America")
console.log(str)
