function evenNumber(value) {
    if (value == 0) {
        console.log(value + " is even? " + false);
    }
    else if (value % 2 !== 0) {
        console.log(value + " is even? " + false);

    }
    else {
        console.log(value+" is even? "+ true);
    }
}

evenNumber(5);
evenNumber(100);
evenNumber(103);
