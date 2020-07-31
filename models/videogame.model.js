class Videogame {
    name;
    biosType;
    minPlayers;
    maxPlayers;
    currentPlayers = 0;
    running = false;

    constructor(name, biosType, minPlayers = 1, maxPlayers = 2) {
        this.name = name;
        this.biosType = biosType;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.currentPlayers = 0;
        this.running = false;
    }

    set name(value) {
        throw new Error('You cannot modify name!');
    }
    get name() {
        return this.name;
    }

    get biosType() {
        return this.biosType;
    }

    set running(dummy) {
        this.running = true;
    }
    set stopped(dummy) {
        this.running = false;
    }

    get isRunning() {
        return this.running;
    }

    equals(videogame) {
        return videogame instanceof Videogame && videogame.name==this.name;
    }
}

module.exports = Videogame;