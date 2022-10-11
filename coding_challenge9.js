let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [], totals = [], tip;

function calcTip(price){
    if (price >= 50 && price <= 300){
        tip = price * 0.15;
    } else{
        tip = price * 0.20;
    }
    return tip
}

for (let i = 0; i <= bills.length -1 ; i++){
    tips[i] = calcTip(bills[i])
    totals[i] = bills[i] + tips[i]
}
console.log(totals);
