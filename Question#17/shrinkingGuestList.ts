var guestList:String[] = ["Agha","Masood","Rabees","Wahab"]

for(let guests of guestList){

    console.log("%s you are Invited for the Dinner ",guests)

}

console.log("%s cannnot Make for the Dinner.....\nChanging the Guest List .........",guestList[2])
guestList[2] = "Ahmed"

console.log("......................New Guest List is ...............")
for(let guests of guestList){

    console.log("%s you are Invited for the Dinner ",guests)

}

console.log("We found a bigger Dinner Table")

guestList.splice(0,0,"Mahr")
guestList.splice(4,0,"Taha")
guestList.splice(6,0,"Ali")


console.log("................. New Guest List is ...............")
for(let guest of guestList){
    console.log("%s you are Invited for the Dinner ",guest)
}

console.log("\n\n................... Sorry we can invite only two people for the Dinner .....................\n")

while(guestList.length>=3){

    console.log("Sorry %s, you are not Invited for the Dinner",guestList.pop())

}


while(guestList.length){

    console.log("%s, you are Invited for the Dinner",guestList.pop())

}

for(let guest of guestList){
    console.log(guest)
}
