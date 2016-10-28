var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
if (minutes < 10) {
    console.log(hours + ":0" + minutes);
}
else {
    console.log(hours + ":" + minutes);
}
