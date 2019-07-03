const Unit = require('./unit.js');
const Doctor = require('./doctor.js');
const Solider = require('./solider.js');
const Heavy = require('./heavy.js');

console.log("Dark Side: ");
let darkSide = [new Unit("Vasek"), new Doctor("Elis"), new Solider("Rodger"), new Solider("Grisha"), new Heavy("Nikolai")];
console.log(darkSide);
console.log("Holy Side: ");
let holySide = [new Unit("Rabotyaga"), new Doctor("Petr"), new Solider("Sereja"), new Solider("Keanu"), new Heavy("Aleshka")];
console.log(holySide);
while(darkSide.length > 0 && holySide.length > 0){
    let coin = Math.floor(Math.random() * 10);
    let first, second, randomNumber;
    if (coin % 2 > 0){
        first = darkSide;
        second = holySide;
        console.log("Dark Side first")
    }
    else {
        first = holySide;
        second = darkSide;
        console.log("Holy Side first")
    }
    for(let i = 0; i < first.length; i ++){
       if (first[i].hasOwnProperty("heal")){
           randomNumber = Math.floor(Math.random() * i);
           first[i].heal(first[randomNumber]);
           console.log()
       } 



    }

}