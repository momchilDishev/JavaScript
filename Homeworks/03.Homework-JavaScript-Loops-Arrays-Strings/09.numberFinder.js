function findMostFreqNum(value) {
    
    var frequency = {};  
    var max = 0; 
    var result; 
    for (var element in value) {
        frequency[value[element]] = (frequency[value[element]] || 0) + 1; 
        if (frequency[value[element]] > max) { 
            max = frequency[value[element]]; 
            result = value[element];         
        }
    }
    return console.log(result + "(" + max + " times"+")");
}
findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);