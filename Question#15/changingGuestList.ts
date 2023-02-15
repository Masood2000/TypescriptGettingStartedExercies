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