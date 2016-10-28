function findNthDigit(arr) {

    var n = arr[0];
    var num = Math.abs(arr[1]).toString().replace(".","");

    if (num.lenght<n) {
        console.log("The number doesn’t have 6 digits");
    } else {
        var number = num[num.length - n];
        console.log(number);
    }

}

findNthDigit([6, 123456.7894]);
findNthDigit([3, 1451.78]);
findNthDigit([2, -355]);