function countSubstringOccur(value) {

    var substr = value[0];
    var text = value[1].toLowerCase();

    var counter = 0;
    for (var index = 0; index <= text.length - 2; index++) {
        var current = text.substring(index, index + substr.length);
        if (substr == current) {
            counter++;
        }
    }
    return console.log(counter);
}

countSubstringOccur(["in", "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);
countSubstringOccur(["but", "But you were living in another world tryin' to get your message through."]);

/* 
    var re = new RegExp(substr, 'g'); 
    var count = text.match(re);
*/