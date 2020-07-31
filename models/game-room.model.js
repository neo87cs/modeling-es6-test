const Videogame = require("./videogame.model");

class gameRoom {
    videogames = [];
    constructor(videogames = []) {
        this.videogames.concat(videogames);
    }

    addGame(videogame) {
        if(!videogame instanceof Videogame) {
            throw new Error('You can add Videogame instance only');
        }
        const containsItYet = this.videogames.find(v => v.equals(videogame));
        if(containsItYet) {
            throw new Error('You can\'t add this game, room has it yet');
        }
        this.videogames.push(videogame);
    }

    removeGame(videogame) {
        if(!videogame instanceof Videogame) {
            throw new Error('You can remove Videogame instance only');
        }
        this.videogames = this.videogames.filter(v => v.name!==videogame.name);
    }
}

module.exports = gameRoom;