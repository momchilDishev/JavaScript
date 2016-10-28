function checkBrackets(value) {

    var haveSameLength = function (value, a, b) {
        return (value.match(a) || []).length === (value.match(b) || []).length;
    }
    var isBalanced = function (value) {
        var arr = [[/\(/gm, /\)/gm], [/\{/gm, /\}/gm], [/\[/gm, /\]/gm]],
            i = arr.length,
            isClean = true;

        while (i-- && isClean) {
            isClean = haveSameLength(value, arr[i][0], arr[i][1]);
        }
        return isClean;
    }


    if (isBalanced(value) == true) {
        console.log("correct")
    } else {
        console.log("incorrect");
    }

}

/*

function checkBrackets(str) {
    var brackets = 0;

    for (var ch in str) {
        if (str[ch] == '(') {
            brackets++;
        }
        else if (str[ch] == ')') {
            brackets--;
        }

        if (brackets < 0) {
            break;
        }
    }

    if (brackets == 0) {
       return "correct";
    }
    else {
        return "incorrect";
    }
}
*/