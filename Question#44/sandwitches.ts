function itemsInSandwitch(items:string[]){

    for(let i=0;i<items.length;i++){

        console.log("The SandWitch Contains %s. ",items[i])
    }
console.log("\n")


}

let items1:string[] = ["Mayo","Vagetables","Ketchup"]
let items2:string[] = ["Mayo","Vagetables","Ketchup","Salad"]
let items3:string[] = ["Vagetables","Ketchup"]

console.log(".............. First  With Three Paramters .............\n")
itemsInSandwitch(items1)

console.log(".............. Second  With Four Paramters .............\n")
itemsInSandwitch(items2)

console.log(".............. First  With Two Paramters .............\n")
itemsInSandwitch(items3)