function divisibleBy3(value) {
    var sum = 0;
    if (value > 9) {
        for (var adder = 0; adder < value.length; adder++) {
            sum += value[adder];
        }
        if (sum % 3 == 0) {
            return console.log("the number is divided by 3 without remainder");
        } else {
            return console.log("the number is not divided by 3 without remainder");
        }
    } else {
        return console.log("number must be bigger than 9");
    }

}