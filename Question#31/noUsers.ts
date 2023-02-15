var users:String[] = ["Masood","Mahr","Ali","Rafay","Agha"]

for(let user of users){
    users.pop();
}
users.pop()
users.pop()
if(users.length==0){
    console.log("We need to find some Users...")
}
