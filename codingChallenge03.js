//Team Dolphin data
let dol001, dol002, dol003,average_dolphin
//Team Koala
let kol001, kol002, kol003, average_koala

dol001 = prompt("Enter Team Dolphin data1");
dol002 = prompt("Enter Team Dolphin data2");
dol003 = prompt("Enter Team Dolphin data3");

kol001 = prompt("Enter Team Koala data1");
kol002 = prompt("Enter Team Koala data2");
kol003 = prompt("Enter Team Koala data3");

/*
    Average scores
*/

average_dolphin = (dol001 + dol002 + dol003)/3;
average_koala = (kol001 + kol002 + kol003)/3;

// if (average_dolphin === average_koala){console.log("It's a Tie")}
// else if (average_dolphin > average_koala){console.log("Dolphins win")}
// else{console.log("Koalas win")}

/*
    Bonus 1 + Bonus 2
*/

let validationDolphins = dol001 > 100 && dol002 > 100 && dol003 > 100;
let validationKoalas = kol001 > 100 && kol002 > 100 && kol003 > 100;

if(validationDolphins && (average_dolphin > average_koala)){
    console.log("Dolphins win");    
}else if(validationKoalas && (average_koala > average_dolphin)){
    console.log("Koalas win");    
} else if((validationKoalas && validationDolphins) && (average_koala === average_dolphin)){
    console.log("It's a Tie");    
} else{
    console.log("Neither teams win. You need a minimum score of atleast 100")
}
