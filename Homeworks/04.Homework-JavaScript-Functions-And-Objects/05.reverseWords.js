function reverseWordsInString(str) {

    var parts = str.split(" ");

    var reversed = "";
    for (var word in parts) {
        var value = parts[word];
        for (var index = 0; index < value.length; index++) {
            reversed += (value[value.length - index - 1]);
        }
        reversed+=" "
    }
    
    return console.log(reversed.trim());

}

reverseWordsInString("My name is ...  My name is... Whatever it is - Say Cheese!");
reverseWordsInString("De tal palo tal astilla");
reverseWordsInString("En casa de herrero cuchillo de palo, cabron.")