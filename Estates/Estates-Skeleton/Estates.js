function processEstatesAgencyCommands(commands) {

    'use strict';

    var Types = {
        Boolean: typeof true,
        Number: typeof 0,
        String: typeof "",
        Object: typeof {},
        Undefined: typeof undefined,
        Function: typeof function () {
        }
    };

    Object.prototype.extend = function (parent) {
        if (!Object.create) {
            Object.prototype.create = function (proto) {
                function F() {
                }

                F.prototype = proto;
                return newF;
            }
        }

        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    };
    Object.prototype.isString = function () {
        return typeof (this) === Types.String;
    };

    function isInteger(x) {
        return ((x ^ 0) === x);
    }

    var Estate = (function () {
        var MIN_AREA = 1;
        var MAX_AREA = 10000;

        function Estate(name, area, location, isFurnished) {
            if (this.constructor === Estate) {
                throw new Error('Estate cannot be instantiated.');
            }
            this.setName(name);
            this.setArea(area);
            this.setLocation(location);
            this.isFurnished(isFurnished);
        }

        Estate.prototype.getName = function () {
            return this._name;
        }
        Estate.prototype.setName = function (name) {
            if (name == '' || !name.isString()) {
                throw new Error('Name cannot be null or empty')
            }
            this._name = name;
        }
        Estate.prototype.getArea = function () {
            return this._area;
        }
        Estate.prototype.setArea = function (area) {
            if (!isInteger(area)) {
                throw new Error('Area should be an integer number.');
            }
            if (area < MIN_AREA || area > MAX_AREA) {
                throw new Error('Area should be in range [' + MIN_AREA + '…' + MAX_AREA + ']');
            }
            this._area = area;
        }
        Estate.prototype.getLocation = function () {
            return this._location;
        }
        Estate.prototype.setLocation = function (location) {
            if (location == '' || !location.isString()) {
                throw new Error('Location cannot be null or empty')
            }
            this._location = location;
        }
        Estate.prototype.isFurnished = function (isFurnished) {
            if (typeof(isFurnished) != 'boolean') {
                throw new Error('Parameter should be boolean.')
            }
            this._isFurnished = isFurnished;
        }
        Estate.prototype.toString = function () {
            var furnished = this._isFurnished ? 'Yes' : 'No';
            var result = this.constructor.name + ': Name = ' + this.getName() +
                ', Area = ' + this.getArea() +
                ', Location = ' + this.getLocation() +
                ', Furnitured = ' + furnished;
            return result;
        }
        return Estate;
    }());


    var BuildingEstate = (function () {
        var MIN_ROOMS = 0;
        var MAX_ROOMS = 100;

        function BuildingEstate(name, area, location, isFurnished, numberOfRooms, hasElevator) {
            if (this.constructor === BuildingEstate) {
                throw new Error('BuildingEstate cannot be instantiated.');
            }
            Estate.call(this, name, area, location, isFurnished);
            this.setNumberOfRooms(numberOfRooms);
            this.setHasElevator(hasElevator);
        }

        BuildingEstate.extend(Estate);
        BuildingEstate.prototype.setNumberOfRooms = function (numberOfRooms) {
            if (numberOfRooms < MIN_ROOMS || numberOfRooms > MAX_ROOMS) {
                throw new Error('Number of rooms should be integer between 1 and 100.')
            }
            this._numberOfRooms = numberOfRooms;
        }
        BuildingEstate.prototype.getNumberOfRooms = function () {
            return this._numberOfRooms;
        }
        BuildingEstate.prototype.setHasElevator = function (hasElevator) {
            if (typeof(hasElevator) !='boolean') {
                throw new Error('Parameter should be boolean.')
            }
            this._hasElevator = hasElevator;
        }
        BuildingEstate.prototype.getHasElevator = function () {
            return this._hasElevator;
        }
        BuildingEstate.prototype.toString = function () {
            return Estate.prototype.toString.call(this) +
                ', Rooms: ' + this.getNumberOfRooms() +
                ', Elevator: ' + (this.getHasElevator() ? 'Yes' : 'No');
        }
        return BuildingEstate;
    }());


    var Apartment = (function () {
        function Apartment(name, area, location, isFurnished, numberOfRooms, hasElevator) {
            BuildingEstate.call(this, name, area, location, isFurnished, numberOfRooms, hasElevator);
        }

        Apartment.extend(BuildingEstate);
        Apartment.prototype.toString = function () {
            return BuildingEstate.prototype.toString.call(this);
        }
        return Apartment;
    }());


    var Office = (function () {
        function Office(name, area, location, isFurnished, numberOfRooms, hasElevator) {
            BuildingEstate.call(this, name, area, location, isFurnished, numberOfRooms, hasElevator);
        }

        Office.extend(BuildingEstate);
        Office.prototype.toString = function () {
            return BuildingEstate.prototype.toString.call(this);
        }
        return Office;
    }());


    var House = (function () {
        var MIN_FLOORS = 0;
        var MAX_FLOORS = 10;

        function House(name, area, location, isFurnished, floors) {
            Estate.call(this, name, area, location, isFurnished);
            this.setFloors(floors);
        }

        House.extend(Estate);
        House.prototype.getFloors = function () {
            return this._floors;
        }
        House.prototype.setFloors = function (floors) {
            if (!isInteger(floors)) {
                throw new Error('Rooms should be an integer number.');
            }
            if (floors <= MIN_FLOORS || floors > MAX_FLOORS) {
                throw new Error('Number of rooms should be integer between 1 and 10.')
            }
            this._floors = floors;
        }
        House.prototype.toString = function () {
            var result = Estate.prototype.toString.call(this);
            result += ', Floors: ' + this.getFloors();
            return result;
        }
        return House;
    }());


    var Garage = (function () {
        var MIN = 1;
        var MAX = 500;

        function Garage(name, area, location, isFurnished, width, height) {
            Estate.call(this, name, area, location, isFurnished);
            this.setHeight(height);
            this.setWidth(width);
        }

        Garage.extend(Estate);

        Garage.prototype.getHeight = function () {
            return this._height;
        }
        Garage.prototype.setHeight = function (height) {
            if (!isInteger(height)) {
                throw new Error('Height should be an integer number.');
            }
            if (height < MIN || height > MAX) {
                throw new Error('Height should be between 1 and 500.');
            }
            this._height = height;
        }
        Garage.prototype.getWidth = function () {
            return this._width;
        }
        Garage.prototype.setWidth = function (width) {
            if (!isInteger(width)) {
                throw new Error('Width should be an integer number.');
            }
            if (width < MIN || width > MAX) {
                throw new Error('Height should be between 1 and 500.');
            }
            this._width = width;
        }
        Garage.prototype.toString = function () {
            var result = Estate.prototype.toString.call(this);
            result += ', Width: ' + this.getWidth() + ', Height: ' + this.getHeight();
            return result;
        }
        return Garage;

    }());


    var Offer = (function () {
        function Offer(estate, price) {
            if (this.constructor === Offer) {
                throw new Error('Offer cannot be instantiated.');
            }
            this.setPrice(price);
            this.setEstate(estate);
        }

        Offer.prototype.getPrice = function () {
            return this._price;
        }
        Offer.prototype.setPrice = function (price) {
            if (!isInteger(price)) {
                throw new Error('The price must be integer.');
            }
            if (price < 0) {
                throw new Error('The price must integer.');
            }
            this._price = price;
        }

        Offer.prototype.getEstate = function () {
            return this._estate;
        }
        Offer.prototype.setEstate = function (estate) {
            if (!(estate instanceof Estate)) {
                throw new Error("Estate must be an Object");
            }
            return this._estate = estate;
        }
        Offer.prototype.toString = function () {
            return 'Estate = ' + this.getEstate().getName() +
                ', Location = ' + this.getEstate().getLocation() +
                ', Price = ' + this.getPrice();
        }
        return Offer;
    }());


    var RentOffer = (function () {
        function RentOffer(estate, price) {
            Offer.call(this, estate, price);
        }

        RentOffer.extend(Offer);
        RentOffer.prototype.toString = function () {
            return 'Rent: ' + Offer.prototype.toString.call(this);
        }
        return RentOffer;
    }());


    var SaleOffer = (function () {
        function SaleOffer(estate, price) {
            Offer.call(this, estate, price);
        }

        SaleOffer.extend(Offer);
        SaleOffer.prototype.toString = function () {
            return 'Sale: ' + Offer.prototype.toString.call(this);
        }
        return SaleOffer;
    }());


    var EstatesEngine = (function () {
        var _estates;
        var _uniqueEstateNames;
        var _offers;

        function initialize() {
            _estates = [];
            _uniqueEstateNames = {};
            _offers = [];
        }

        function executeCommand(command) {
            var cmdParts = command.split(' ');
            var cmdName = cmdParts[0];
            var cmdArgs = cmdParts.splice(1);
            switch (cmdName) {
                case 'create':
                    return executeCreateCommand(cmdArgs);
                case 'status':
                    return executeStatusCommand();
                case 'find-sales-by-location':
                    return executeFindSalesByLocationCommand(cmdArgs[0]);
                case 'find-rents-by-location':
                    return executeFindRentsByLocationCommand(cmdArgs[0]);
                case 'find-rents-by-price':
                    return executeFindRentsByPriceCommand(Number(cmdArgs[0]), Number(cmdArgs[1]));
                default:
                    throw new Error('Unknown command: ' + cmdName);
            }
        }

        function executeCreateCommand(cmdArgs) {
            var objType = cmdArgs[0];
            switch (objType) {
                case 'Apartment':
                    var apartment = new Apartment(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                        parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                    addEstate(apartment);
                    break;
                case 'Office':
                    var office = new Office(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                        parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                    addEstate(office);
                    break;
                case 'House':
                    var house = new House(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                        parseBoolean(cmdArgs[4]), Number(cmdArgs[5]));
                    addEstate(house);
                    break;
                case 'Garage':
                    var garage = new Garage(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                        parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), Number(cmdArgs[6]));
                    addEstate(garage);
                    break;
                case 'RentOffer':
                    var estate = findEstateByName(cmdArgs[1]);
                    var rentOffer = new RentOffer(estate, Number(cmdArgs[2]));
                    addOffer(rentOffer);
                    break;
                case 'SaleOffer':
                    estate = findEstateByName(cmdArgs[1]);
                    var saleOffer = new SaleOffer(estate, Number(cmdArgs[2]));
                    addOffer(saleOffer);
                    break;
                default:
                    throw new Error('Unknown object to create: ' + objType);
            }
            return objType + ' created.';
        }

        function parseBoolean(value) {
            switch (value) {
                case "true":
                    return true;
                case "false":
                    return false;
                default:
                    throw new Error("Invalid boolean value: " + value);
            }
        }

        function findEstateByName(estateName) {
            for (var i = 0; i < _estates.length; i++) {
                if (_estates[i].getName() == estateName) {
                    return _estates[i];
                }
            }
            return undefined;
        }

        function addEstate(estate) {
            if (_uniqueEstateNames[estate.getName()]) {
                throw new Error('Duplicated estate name: ' + estate.getName());
            }
            _uniqueEstateNames[estate.getName()] = true;
            _estates.push(estate);
        }

        function addOffer(offer) {
            _offers.push(offer);
        }

        function executeStatusCommand() {
            var result = '', i;
            if (_estates.length > 0) {
                result += 'Estates:\n';
                for (i = 0; i < _estates.length; i++) {
                    result += "  " + _estates[i].toString() + '\n';
                }
            } else {
                result += 'No estates\n';
            }

            if (_offers.length > 0) {
                result += 'Offers:\n';
                for (i = 0; i < _offers.length; i++) {
                    result += "  " + _offers[i].toString() + '\n';
                }
            } else {
                result += 'No offers\n';
            }

            return result.trim();
        }

        function executeFindOfferByLocationCommand(location, offerType) {
            if (!location) {
                throw new Error("Location cannot be empty.");
            }
            var selectedOffers = _offers.filter(function (offer) {
                return offer.getEstate().getLocation() === location &&
                    offer instanceof offerType;
            });
            selectedOffers.sort(function (a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });
            return formatQueryResults(selectedOffers);
        }

        function executeFindSalesByLocationCommand(location) {
            return executeFindOfferByLocationCommand(location, SaleOffer);
        }

        function executeFindRentsByLocationCommand(location) {
            return executeFindOfferByLocationCommand(location, RentOffer);
        }


        function executeFindRentsByPriceCommand(minPrice, maxPrice) {

            if (!isInteger(maxPrice) || !isInteger(minPrice)) {
                throw new Error('Area should be an integer number.');
            }
            function isInPriceRange(offer) {
                return offer.getPrice() >= minPrice &&
                    offer.getPrice() <= maxPrice &&
                    offer instanceof RentOffer;
            }

            var selectedOffers = _offers.filter(isInPriceRange);

            selectedOffers.sort(function (a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });

            selectedOffers.sort(function (a, b) {
                var result = a.getPrice() - b.getPrice();
                if (result == 0) {
                    result = a.getEstate().getName().localeCompare(b.getEstate().getName());
                }
                return result;
            });

            return formatQueryResults(selectedOffers);
        }

        function formatQueryResults(offers) {
            var result = '';
            if (offers.length == 0) {
                result += 'No Results\n';
            } else {
                result += 'Query Results:\n';
                for (var i = 0; i < offers.length; i++) {
                    var offer = offers[i];
                    result += '  [Estate: ' + offer.getEstate().getName() +
                        ', Location: ' + offer.getEstate().getLocation() +
                        ', Price: ' + offer.getPrice() + ']\n';
                }
            }
            return result.trim();
        }

        return {
            initialize: initialize,
            executeCommand: executeCommand
        };
    }());
    var apt = new Apartment("momo", 2, "valid", false, 5, true)

    // Process the input commands and return the results
    var results = '';
    EstatesEngine.initialize();
    commands.forEach(function (cmd) {
        if (cmd != '') {
            try {
                var cmdResult = EstatesEngine.executeCommand(cmd);
                results += cmdResult + '\n';
            } catch (err) {
                //console.log(err);
                results += 'Invalid command.\n';
            }
        }
    });
    return results.trim();

}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

(function () {
    var arr = [];
    if (typeof (require) == 'function') {
        // We are in node.js --> read the console input and process it
        require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        }).on('line', function (line) {
            arr.push(line);
        }).on('close', function () {
            console.log(processEstatesAgencyCommands(arr));
        });
    }
})();
