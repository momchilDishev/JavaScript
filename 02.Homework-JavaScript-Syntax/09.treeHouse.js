var checker = [];
checker.first = 6;
checker.second = 3.0987;

var checker1 = [];
checker1.first = 3.66;
checker1.second = 11;


var checker2 = [];
checker2.first = 15.562;
checker2.second = 5.55;

function treeHouseCompare(value) {
    var roof = (((value.first / 3) * 2) * value.first) / 2;
    var rooms = (value.first * value.first);
    var house = rooms + roof;

    var roots = (value.second) / 3;
    var stem = (value.second * roots);
    var crown = Math.PI * (2 * roots) * (2 * roots);
    var tree = stem + crown;

    if (house > tree) {
        return console.log("house/" + house.toFixed(2));
    } else {
        return console.log("tree/" + tree.toFixed(2));
    }
}

treeHouseCompare(checker);
treeHouseCompare(checker1);
treeHouseCompare(checker2);