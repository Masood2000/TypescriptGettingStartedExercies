var numbers:string[] = ["1","2","3","4","4","5","6","7","8","9"]

for(let num of numbers){

    if(num == "1"){
        console.log(num+"st")
    }
    else if(num=="2"){
        console.log(num+"nd")
    }
    else if(num == "3"){
        console.log(num+"rd")
    }
    else{
        console.log(num+"th")
    }


}