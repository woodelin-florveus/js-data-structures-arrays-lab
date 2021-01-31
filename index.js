// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
    drivers.splice(-1);
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name);
}

function appendDriver(name) {
    // appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged:
    return [...drivers, name ];
}


function prependDriver(name) {
    return [name, ...drivers];
}

function removeFirstDriver() {
    return drivers.slice(1);
}


function removeLastDriver() {
        return drivers.slice(0, - 1);
}

