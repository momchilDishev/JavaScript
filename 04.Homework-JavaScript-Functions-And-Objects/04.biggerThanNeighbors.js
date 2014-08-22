function biggerThanNeighbor(index, arr) {

    var position = index;
    var array = arr;

    if (arr.length < index || index > arr.length - 1) {
        return console.log("invalid index");
    } else if(index<=0 || index==arr.length-1){
        return console.log("only one neighbour");
    } else if (arr[index] > arr[index - 1] && arr[index] > arr[index+1]) {
        return console.log("bigger");
    } else if ((arr[index] <= arr[index - 1] || arr[index] <= arr[index + 1])) {
        return console.log(" not bigger");
    }
    
}