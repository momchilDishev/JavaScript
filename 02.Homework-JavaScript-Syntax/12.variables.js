
function variablesTypes(value) {
    var name = value[0].valueOf();
    var age = value[1].valueOf();
    var isMale = value[2].valueOf();
    var food = value[3].valueOf();
    console.log("\"" + "My name is: " + name + " // type is " + typeof name + "\n" +
        "My age: " + age + " // type is " + typeof age + "\n" +
        "I am male is: " + isMale + " // type is " + typeof isMale + "\n" +
        "My favourite foods are: " + food + " // type is " + typeof food + "\"");

}

variablesTypes(['Niggaracua', 33, false, ['tomatoes', 'corn-flakes', 'muffins']]);
variablesTypes(['Mancho', 13, true, ['cabbage', 'carrot', 'peanuts']]);