function makeGreat(magicians:string[]):string[]{

for(let i = 0; i<magicians.length;i++){

    magicians[i] = "Great " + magicians[i]

}
return magicians

}



function showMagicians( magicianArray:string[]){

for(let magician of magicianArray){
    console.log(magician)
}

}

let magicians:string[] = ["Ahad","Usman","Junaid","Qasim","Mahr"]

magicians = makeGreat(magicians)

showMagicians(magicians)