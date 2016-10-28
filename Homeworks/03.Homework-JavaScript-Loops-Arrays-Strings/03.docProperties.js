function displayProperties(value) {
    
    var properties = [Object.getOwnPropertyNames(this)];
    properties.sort();
    for (var property in properties) {
        console.log(properties[property]+"\n");
    }

}
displayProperties();

/* or

function displayProperties() {
    var properties = [];
    for (var prop in document) {
        properties.push(prop);
    }

    properties.sort();
    console.log(properties);
}
displayProperties();

*/