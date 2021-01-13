let bills=[124,48,268];
let tips=[];
let amounts=[];
function calculateTip(bill){
    if(bill<50)
        return 0.2*bill;
    else if(bill>50 && bill<200)
        return 0.15*bill;
    else if(bill>200)
       return 0.1*bill;
}
for(let bill of bills){
    let tip=calculateTip(bill)
     tips.push(tip);
    amounts.push(tip+bill);
}

console.log(tips);
console.log(amounts);