
function isPrime(value) {
    
    var square = Math.sqrt(value);

    for (var divider = 2; divider <= square; divider++) {
        if (value % divider == 0) {
            return console.log(value + " is prime? " + false);
        }
    }

    return console.log(value+" is prime? "+true);
}

isPrime(5);
isPrime(10);
isPrime(293);