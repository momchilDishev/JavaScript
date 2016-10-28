function sortArray(value) {

    var newArr = [];
    var arr = value;
    var lenght = arr.length;
    for (var i = 0; i < lenght; i++) {
        var min = Math.min.apply(null, arr);
        console.log(min);
        var index = arr.indexOf(min);
        newArr.push(min);
        arr.splice(index, 1);

    }
    return newArr;
}

sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
sortArray([100, 1200, 50, 32, 6, 22, 0, 1.5, 51, 61, 22, 3, 3]);
sortArray([701, 1, 3, 2, 1, 5, 6, 8, 9, 0, ]);

/*or using "selection sort" from Wikipedia*/

function sortArray(value) {
    var i, j;
    var iMin;
    var arr = value;
    var n = arr.length;
    for (j = 0; j < n - 1; j++) {
        /* find the min element in the unsorted a[j .. n-1] */

        /* assume the min is the first element */
        iMin = j;
        /* test against elements after j to find the smallest */
        for (i = j + 1; i < n; i++) {
            /* if this element is less, then it is the new minimum */
            if (arr[i] < arr[iMin]) {
               
                iMin = i;
            }
        }

        if (iMin != j) {
            var swap = arr[j];
            arr[j] = arr[iMin];
            arr[iMin] = swap;
        }

    } return arr;
}

sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
sortArray([100, 1200, 50, 32, 6, 22, 0, 1.5, 51, 61, 22, 3, 3]);
sortArray([701, 1, 3, 2, 1, 5, 6, 8, 9, 0, ]);