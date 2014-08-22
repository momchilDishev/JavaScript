function findLargestBySumOfDigits(nums) {

    var sums = [];
    var sum = 0;
    
    for (var number in arguments) {
        if (typeof arguments[number] ==="number") {
            var currentNum = arguments[number].toString().split("");
            for (var digits = 0; digits < currentNum.length; digits++) {
                sum += Number(currentNum[digits]);
            }
            sums.push(sum);
            sum = 0;
        } else {
            return console.log(undefined); break;
        }
        
    }

    var max = Math.max.apply(null, sums);
    var position = sums.indexOf(max);
        
    return console.log(arguments[position]);

}
