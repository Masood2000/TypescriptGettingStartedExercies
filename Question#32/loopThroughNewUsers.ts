var currentUsers:string[] = ["Masood","Abdullah","Ali","Taha","Mahr"]

var newUsers:string[] = ["Junaid","masood","Agha","Ali","Ehsan"]

for(let i of [0,1,2,3,4]){
    currentUsers[i] = currentUsers[i].toLowerCase()
}


for(let users of newUsers){

    if(currentUsers.includes(users.toLowerCase())){
        console.log("%s, Username is not Available",users)
    }
    else{
        console.log("%s, Username is Available",users)
    }


}