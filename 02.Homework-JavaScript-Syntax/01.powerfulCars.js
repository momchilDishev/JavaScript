var value;
function convertKWtoHP(value) { return (value / 0.746).toFixed(2) }
value = 75;
console.log(convertKWtoHP(value).toFixed(2));
value = 200;
console.log(convertKWtoHP(value).toFixed(2));
value = 1500;
console.log(convertKWtoHP(value).toFixed(2));
