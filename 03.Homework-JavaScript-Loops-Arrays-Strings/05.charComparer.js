function compareChars(value) {
    if (value[0].lenght = value[1].lenght) {
        var chars1 = "";
        var chars2 = "";
        for (var index in value[0]) {
            chars1 += value[0][index];
        }
        for (var index in value[1]) {
            chars2 += value[1][index];
        }
        if (chars1 == chars2) {
            console.log("Equal");
        } else {
            console.log("Not Equal");
        }
    } else {
        console.log("Not equal");
    }

}

