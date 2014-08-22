function findMostFreqWord(value) {

    var arr = value.toLowerCase().match(/\b\w+\b/g);
    var wordsCount = {};
    var counter = 0;

    for (var index = 0; index < arr.length; index++) {
        wordsCount[arr[index]] = (wordsCount[arr[index]] || 0) + 1;

    }
    var result = [];

    for (var word in wordsCount) {
        if (wordsCount[word] > counter) {
            counter = wordsCount[word];
            result.push(word);
        } else if (wordsCount[word] === counter) {
            result.push(word);
        }
    }
    result.sort();
    for (var word in result) {
        console.log(result[word] + " -> " + counter + " times");
    }

}

findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
findMostFreqWord('Hi, Bro! Nigga, bro, how Are you? Nigga, you know, I be like hi and you be like bye, bro.');