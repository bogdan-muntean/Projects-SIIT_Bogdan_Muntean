

function incrementTimer() {
    // c. Sa incrementam secundele, incepem de la zero, iar dupa ce trece o secunda sa cresca cu 1
    console.log("se adauga o secunda")
    secondValue++;
    // d. Sa crestem minutele iar secundele vor incepe de la zero
    if (secondValue == 60) {
        minuteValue++;
        secondValue = 0;
    }

    // e. Sa crestem orele iar minutele vor incepe de la zero
    if (minuteValue == 60) {
        hourValue++;
        minuteValue = 0;
    }

    // g. Sa se faca update in real time ( la fiecare secunda )
    secondHtml.innerHTML = addZero(secondValue);
    minuteHtml.innerHTML = addZero(minuteValue);
    hourHtml.innerHTML = addZero(hourValue);
}

// f. Sa adaugam '0' in fata cand este valoare de la 1 la 9, fiind o singura unitate.
function addZero(value) {
    if (value >= 1 && value <= 9) {
        value = `0${value}`;
    }
    if (value == 0) {
        value = `00`;
    }
    return value;
}

export { incrementTimer, addZero };