function findMinAndMax(value) {
    var max = Math.max.apply(value[0], value);
    var min = Math.min.apply(value[0], value);
    console.log("Min -> " + min + "\n Max -> " + max);
}