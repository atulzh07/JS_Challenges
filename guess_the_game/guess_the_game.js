'use strict';

document.querySelector('.message').textContent = 'Guess a Number between 1 and 20';
let random_number = Math.trunc(Math.random()*20 + 1);
// document.querySelector('.number').textContent = random_number;
console.log(random_number);

document.querySelector('.check').addEventListener('click', function(message){
    let entered_number = parseInt(document.querySelector('.guess').value);
    console.log(entered_number, typeof(entered_number));

    if(entered_number === random_number){
        document.querySelector('body').style.color = 'green';
        document.querySelector('.message').textContent = 'Wow! You made a Correct Guess 🍾';
    } else if (entered_number != random_number){
        document.querySelector('body').style.color = 'red';
        document.querySelector('.message').textContent = 'Wrong Guess ❌'; 
    }
})

