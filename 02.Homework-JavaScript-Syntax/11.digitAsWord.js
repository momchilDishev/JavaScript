function convertDigitToWord(value) {
    if (value > 0 && value < 10) {
        switch (value) {
            case 1: console.log("one"); break
            case 2: console.log("two"); break;
            case 3: console.log("three"); break;
            case 4: console.log("four"); break;
            case 5: console.log("five"); break;
            case 6: console.log("six"); break;
            case 7: console.log("seven"); break;
            case 8: console.log("eight"); break;
            case 9: console.log("nine"); break;
            default: console.log("Not in my scope of knowledge."); break;

        }
    } else {
        console.log("Digit must be bigger than 0 and smaller than 10.")
    }

}

convertDigitToWord(13);
convertDigitToWord(7);
convertDigitToWord(1);