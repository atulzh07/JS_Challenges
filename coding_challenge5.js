let john = {
    bill : [124, 48, 268, 180, 50]
}

let john_tip = [];
let john_final = [];
let tip;
for (let i=0; i < john.bill.length - 1; i++) {
    if (john.bill[i] <= 50){
        tip = 0.2 * john.bill[i]; 
    } else if (john.bill[i] > 50 && john.bill[i] <= 200) {
        tip = 0.15 * john.bill[i];
    } else {
        tip = 0.1 * john.bill[i];
    }
    john_tip.push(tip);
    let john_pay = john.bill[i] + tip;
    john_final.push(john_pay);
}
console.log(john_tip);
console.log(john_final);
let total_tip_john = 0;
for (i=0; i < john.bill.length; i++){
    total_tip_john += john.bill[i];
}
console.log(total_tip_john);
let john_average_tip = total_tip_john / john_tip.length;
console.log(john_average_tip);

var mark = {
    bill : [77, 375, 110, 45]
}
let mark_pay;
let tip_mark = [];
let mark_final = [];
let mark_bill;
function mark_tip(mark_bill) {
    if (mark_bill <= 100){
        return 0.2 * mark_bill;
    } else if (mark_bill > 100 && mark_bill <= 300){
        return 0.1 * mark_bill;
    } else {
        return 0.25 * mark_bill;
    }
}
for (i=0; i< mark.bill.length; i++){
    tip_mark.push(mark_tip(mark.bill[i]));
    mark_pay = mark.bill[i] + mark_tip(mark.bill[i]);
    mark_final.push(mark_pay);
}
console.log(tip_mark);
console.log(mark_final);
let total_tip_mark = 0;
for (i=0; i < mark.bill.length; i++){
    total_tip_mark += mark.bill[i];
}
console.log(total_tip_mark);
let mark_average_tip = total_tip_mark / tip_mark.length;
console.log(mark_average_tip);
if (john_average_tip > mark_average_tip) {
    console.log('John\'s family has paid the highest tip');
} else if (mark_average_tip > john_average_tip) {
    console.log('Mark\'s family has paid the highest tip');
} else{
    console.log('Both families have paid equal tips');
}
