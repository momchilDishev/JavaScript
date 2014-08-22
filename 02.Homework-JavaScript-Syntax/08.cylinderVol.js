var cylinder1 = [];
cylinder1.radius = 3.78;
cylinder1.height = 1.98745;

var cylinder2 = [];
cylinder2.radius = 10.5;
cylinder2.height = 1.86005;

function calcCylinder(value) {
    var volume = (Math.PI* (value.radius *value.radius)* value.height).toFixed(3);

    console.log("Cylinder with radius = " + value.radius + " and height = " + value.height + " has a volume of " + volume + ".")
}
calcCylinder(cylinder1);
calcCylinder(cylinder2);
