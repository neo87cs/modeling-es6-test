const expect = require('chai').expect;
const fs = require('fs');
const GameRoom = require('../models/game-room.model');
const Videogame = require('../models/videogame.model');

describe('it should check game room correct behaviours', () => {
    // NOTE: initially the videogames.mock.json has one typing error, it will fail on that error
    // fix the typing error on videogames.mock.json (if you fix all models and methods you will find
    // it using the test)
    const mock = JSON.parse(fs.readFileSync('./test/videogames.mock.json', {
        "encoding": "utf-8"
    }));

    const room = new GameRoom();
    it('should insert whole mock correct list in room', () => {
        expect(() => {
            mock.forEach(json => room.addGame(new Videogame(json.name, json.biosType)));
        }).to.not.throw();
        expect(mock.length).to.equal(room.videogames.length);
    });
    it('should remove the whole mock list from room now', () => {
        expect(() => {
            mock.forEach(json => room.addGame(new Videogame(json.name, json.biosType)));
        }).to.not.throw();
        expect(0).to.equal(room.videogames.length);
    });
});