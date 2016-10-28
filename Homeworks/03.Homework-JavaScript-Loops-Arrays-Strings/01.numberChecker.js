function printNumbers(number) {
    var result = "1";
    if (number > 1) {
        for (var checker = 2; checker <= number; checker++) {
            if (checker % 4 !== 0 && checker % 5 !== 0) {
                result += ", " + checker;
            }
            else {
                continue;
            }

        }
        console.log(result);
    } else {
        console.log("no");
    }


}

printNumbers(20);
printNumbers(-5);
printNumbers(13);