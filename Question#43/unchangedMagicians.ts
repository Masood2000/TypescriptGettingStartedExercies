function makeGreat(magicians:string[]):string[]{

    let mag:string[] = magicians

for(let i = 0; i<mag.length;i++){

    mag[i] = "Great " + mag[i]

}
return mag

}




function showMagicians( magicianArray:string[]){

for(let magician of magicianArray){
    console.log(magician)
}

}

let magicians:string[] = ["Ahad","Usman","Junaid","Qasim","Mahr"]


let magicians2:string[]=[]

for(let i = 0; i<magicians.length;i++){

    magicians2[i] =  magicians[i]

}

magicians2 = makeGreat(magicians2)

showMagicians(magicians)
showMagicians(magicians2)