//defining a function that calculates average of three numbers
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dolphin1, dolphin2, dolphin3, koala1, koala2, koala3, avgDolphin, avgKoala;

//converting string to integer
dolphin1 = parseInt(prompt("Enter Dolphin's score 1: "));
dolphin2 = parseInt(prompt("Enter Dolphin's score 2: "));
dolphin3 = parseInt(prompt("Enter Dolphin's score 3: "));

//Parsing string to integer using +
koala1 = +(prompt("Enter Koala's score 1: "));
koala2 = +(prompt("Enter Koala's score 2: "));
koala3 = +(prompt("Enter Koala's score 3: "));

avgDolphin = calcAverage(dolphin1, dolphin2, dolphin3);
avgKoala = calcAverage(koala1, koala2, koala3);

let checkWinner = avgDolphin >=avgKoala ? console.log(`Dolphins win (${avgDolphin} v/s ${avgKoala})`) : console.log(`Koalas win (${avgDolphin} vss ${avgKoala})`);