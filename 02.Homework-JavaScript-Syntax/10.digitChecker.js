function checkDigit(value) {
    if (value < 1000) {
        console.log("Bigger than 1000 is needed.")

    } else {
        var checker = 0;
        for (var rotater = 0; rotater < 3; rotater++) {
            checker = value % 10;
            value = Math.floor(value / 10);
        }
        if (checker == 3) {
            console.log("Is 3-rd digit 3? - "+true);
        }
        else {
            console.log("Is 3-rd digit 3? - "+false);
        }
    }
}

checkDigit(4345);
checkDigit(98376);
checkDigit(567221);

