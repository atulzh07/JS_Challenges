/*
    Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
    Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, 
and also return it from the method
3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than 
Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

*/

const mark = {
    name: 'Mark Miller',
    height: 1.69,
    mass: 78,
    calcBMI : function(mass, height){
        return(mass / (height * height));
    },
};
const john = {
    name: 'John Smith',
    height: 1.95,
    mass: 92,
    calcBMI : function(mass, height){
        return(mass / (height * height));
    },
};
let markBMI = mark.calcBMI(mark.mass, mark.height);
let johnBMI = john.calcBMI(john.mass, john.height);
let checkBMI = markBMI > johnBMI;
if (checkBMI){
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else{
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
};
