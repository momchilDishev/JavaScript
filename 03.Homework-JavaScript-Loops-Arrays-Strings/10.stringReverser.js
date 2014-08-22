function reverseString(value) {
   
    var reversed = "";

    for (var index = 0; index < value.length; index++) {
        reversed+=(value[value.length-index-1]);
    }
    return console.log(reversed);

}