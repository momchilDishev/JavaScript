function findMaxSequence(value) {

    var currentSequence = 1,
        longestSequence = 1,
        indexOfLongest;

    for (var index = 0; index < value.length; index++) {
        if (value[index] < value[index + 1]) {
            currentSequence++;
        } else {
            if (longestSequence < currentSequence) {
                longestSequence = currentSequence;
                indexOfLongest = index - currentSequence + 1;
            }
            currentSequence = 1;
        }
    }

        if (longestSequence < 2) {
            console.log('no');
        }
        else {
            var result = value.slice(indexOfLongest, indexOfLongest + longestSequence);
            console.log('[' + result + ']');
        }

    }

    findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
    findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
    findMaxSequence([3, 2, 1]);
