$(function() {

});

function fizzBuzz(n) {
    if (n === 0) {return "";}

    let returnText = "";

    for (let i = 1; i < n; i++) {
        returnText += `${fizzBuzzErtek(i)}, `;
    }
    
    returnText += fizzBuzzErtek(n);

    return returnText;
}

function fizzBuzzErtek(n) {
    let ertek = "";

    if (n % 3 === 0 && n % 5 === 0) {
        ertek = "fizzbuzz";
    } else if (n % 3 == 0) {
        ertek = "fizz";
    } else if (n % 5 === 0) {
        ertek = "buzz";
    } else {
        ertek = n;
    }
    return ertek;
}