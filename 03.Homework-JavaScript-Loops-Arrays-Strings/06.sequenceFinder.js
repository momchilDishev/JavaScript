function findMaxSequence(value) {
    var sequence = [];
    var element;
    element = value[0];
    var maxRepeated = value[0];
    var counter = 1;
    var tempCounter = 1;
    for (var index = 1; index <= value.length; index++) {
        if (element === value[index]) {
            tempCounter++;
            if (tempCounter > counter) {
                counter = tempCounter;
                tempCounter = 1;
                maxRepeated = element;
            }
        } else {
            tempCounter = 1;
            element = value[index];
        }

    }
    for (var i = 0; i < counter; i++) {
        sequence[i] = maxRepeated;
    }
    sequence.join(',');
    console.log("[" + sequence + "]");
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence([2, 1, 1, 2, 3, 3, 3, 4, 2, 1, 1, 1, 1])