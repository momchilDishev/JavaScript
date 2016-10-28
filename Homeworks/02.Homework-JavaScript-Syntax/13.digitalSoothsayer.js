function soothsayer(value) {
    var result = [];
    function pickElement(array) { var element = array[Math.floor(Math.random() * 5)]; return element; }

    for (var chooser = 0; chooser < 4; chooser++) {
        var arr = value[chooser];
        result[chooser] = pickElement(arr);

    }

    console.log("You will work " + result[0] + " years on " + result[1] + ". You will live in " + result[2] + " and drive " + result[3] + ".")
}


