function findPalindromes(value) {

    var arr = value.toLowerCase().split(/[\W]+/).filter(Boolean);
    var palindromes = [];
    for (var index = 0; index < arr.length; index++) {
        if (checkPalindrom(arr[index])) {
            palindromes.push(arr[index]) ;
        }
    }

    function checkPalindrom(str) {
        return str == str.split('').reverse().join('');
    }

    return console.log(palindromes.join(', '));
}
findPalindromes('There is a man, his name was Bob.')