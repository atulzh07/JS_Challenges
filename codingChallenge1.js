let heightMark, heightJohn, massMark, MassJohn

heightJohn = prompt('Enter John height')
heightMark = prompt('Enter Mark height')
massMark = prompt('Enter Mark mass')
massJohn = prompt('Enter John mass')

let bmiJohn, bmiMark
bmiJohn = massJohn / (heightJohn * heightJohn)
bmiMark = massMark / (heightMark * heightMark)

console.log("John's BMI is: ", bmiJohn)
console.log("Mark's BMI is: " , bmiMark)

let check = bmiJohn > bmiMark

if(check == true){
    console.log('John has higher body mass index')
}
else{
    console.log('Mark has higher body mass index')
}

