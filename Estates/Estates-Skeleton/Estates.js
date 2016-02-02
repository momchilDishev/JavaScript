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
    }
    Object.prototype.isBoolean = function () {
        return typeof (this) === Types.Boolean;
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
            if (!name || !name.isString()) {
                throw new Error('Name cannot be null or empty')
            }
            this._name = name;
        }
        Estate.prototype.getArea = function () {
            return this._area;
        }
        Estate.prototype.setArea = function (area) {
            if (area < MIN_AREA || area > MAX_AREA) {
                throw new Error('Area should be an integer in range [1…10000]');
            }
            this._area = area;
        }
        Estate.prototype.getLocation = function () {
            return this._location;
        }
        Estate.prototype.setLocation = function (location) {
            if (!location || !location.isString()) {
                throw new Error('Locaiton cannot be null or empty')
            }
            this._location = location;
        }
        Estate.prototype.isFurnished = function (isFurnished) {
            if (!isFurnished.isBoolean()) {
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
        var MIN_ROOMS = 1;
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
            if (!hasElevator.isBoolean()) {
                throw new Error('Parameter should be boolean.')
            }
            this._hasElevator = hasElevator;
        }
        BuildingEstate.prototype.getHasElevator = function () {
            return this._hasElevator;
        }
        return BuildingEstate;
    }());
    
    
    var Apartment = (function () {
        function Apartment(name, area, location, isFurnished, numberOfRooms, hasElevator) {
            BuildingEstate.call(this, name, area, location, isFurnished, numberOfRooms, hasElevator);
        }
        Apartment.extend(BuildingEstate);
        return Apartment;
    }());
    
    
    var Office = (function () {
        function Office(name, area, location, isFurnished, numberOfRooms, hasElevator) {
            BuildingEstate.call(this, name, area, location, isFurnished, numberOfRooms, hasElevator);
        }
        Office.extend(BuildingEstate);
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
            if (floors <= MIN_FLOORS || floors > MAX_FLOORS) {
                throw new Error('Number of rooms should be integer between 1 and 10.')
            }
            this._floors = floors;
        }
        House.prototype.toString = function () {
            var result = Estate.prototype.toString().call(this);
            result += ', Floors = ' + this.getFloors();
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
            if (height < MIN || height > MAX) {
                throw new Error('Height should be between 1 and 500.');
            }
            this._height = height;
        }
        Garage.prototype.getWidth = function () {
            return this._width;
        }
        Garage.prototype.setWidth = function (width) {
            if (width < MIN || width > MAX) {
                throw new Error('Height should be between 1 and 500.');
            }
            this._width = width;
        }
        Garage.prototype.toString = function () {
            var result = Estate.prototype.toString().call(this);
            result += ', Width: ' + this.getWidth() + ', Height: ' + this.getHeight();
            return result;
        }
        return Garage;

    }());
    
    
    var Offer = function () {
        // TODO: define the missing class 
    };
    
    
    var RentOffer = function () {
        // TODO: define the missing class 
    };
    
    
    var SaleOffer = function () {
        // TODO: define the missing class 
    };
    
    
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
        
        function executeFindSalesByLocationCommand(location) {
            if (!location) {
                throw new Error("Location cannot be empty.");
            }
            var selectedOffers = _offers.filter(function (offer) {
                return offer.getEstate().getLocation() === location &&
                    offer instanceof SaleOffer;
            });
            selectedOffers.sort(function (a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
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
    
    
    // Process the input commands and return the results
    var results = '';
    EstatesEngine.initialize();
    commands.forEach(function (cmd) {
        if (cmd != '') {
            try {
                var cmdResult = EstatesEngine.executeCommand(cmd);
                results += cmdResult + '\n';
            } catch (err) {
                console.log(err);
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
