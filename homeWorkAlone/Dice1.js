
let diceNumber = 2
let generatedNumber
let generatedArray = []
let dice = 6;
let throws = 30;
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n5 = 0;
let n6 = 0;
let idealPercent = 100/dice;
let maxDeviation;



// if (diceNumber === 1) {
//     for (let i = 0; i < throws; i++) {
//         generatedNumber = Math.ceil(Math.random() * 6);
//         generatedArray.push(generatedNumber);
//     }
// }
//
// else {
//     for (let i = 0; i < throws; i++) {
//         generatedNumber = Math.ceil((diceNumber - 1) + Math.random() * (6 * diceNumber - 2));
//         generatedArray.push(generatedNumber);
//     }
// }
console.log("Experiment for ", diceNumber," dice(s) and ", throws, "throws")



for (let i = 0; i < throws*diceNumber; i++) {
    generatedNumber = Math.ceil(Math.random() * 6);
    generatedArray.push(generatedNumber);}
for (let i=0; i<generatedArray.length; i++) {

    if (generatedArray[i] === 1) {
        n1++;
    }
    if (generatedArray[i] === 2) {
        n2++;
    }
    if (generatedArray[i] === 3) {
        n3++;
    }
    if (generatedArray[i] === 4) {
        n4++;
    }
    if (generatedArray[i] === 5) {
        n5++;
    }
    if (generatedArray[i] === 6) {
        n6++;
    }
}
console.log("Here we got an array ",generatedArray, "with", generatedArray.length, "elements");
console.log("quantity of 1 = ", n1);
console.log("quantity of 2 = ", n2);
console.log("quantity of 3 = ", n3);
console.log("quantity of 4 = ", n4);
console.log("quantity of 5 = ", n5);
console.log("quantity of 6 = ", n6);

let percentage = function(n) {
    return n / throws * 100 / diceNumber
}

console.log("% for 1 = ",percentage(n1),"%");
console.log("% for 2 = ",percentage(n2),"%");
console.log("% for 3 = ",percentage(n3),"%");
console.log("% for 4 = ",percentage(n4),"%");
console.log("% for 5 = ",percentage(n5),"%");
console.log("% for 6 = ",percentage(n6),"%");


let maxDeviationOf = function (percentage_n) {
    return Math.abs(idealPercent - percentage_n)

}

maxDeviation = Math.max(deviationOf(percentage(n1)), deviationOf(percentage(n2)),
    deviationOf(percentage(n3)), deviationOf(percentage(n4)), deviationOf(percentage(n5)), deviationOf(percentage(n6)));



if (maxDeviation <= 5 ) {
    console.log("deviation =", maxDeviation, "% Eureka")
}
else {
    console.log("maxDeviation is ",maxDeviation, "% that is more than 5%")
}

