function bitChecker(value) {
    var mask = value >> 3;

    if (mask & 1) {
        return console.log("3-rd bit of "+value+" is 1? "+true);
    } else {
        return console.log("3-rd bit of "+value+" is 1? "+false);
    }

}

bitChecker(123);
bitChecker(245);
bitChecker(5);

/*
var bit = Number(value).toString(2);
return bit[bit.length-1-3] == '1';
*/