const Videogame = require('../models/videogame.model');
const BiosType = require('../models/biostype.model');
const expect = require('chai').expect;

describe('it should check videogame model', function() {
    const videoGame = new Videogame('King Of Fighter 2000', BiosType.MAME);
    it('can\'t modify biosType once constructed', function() {
        expect(() => videoGame.biosType = BiosType.PSX).to.throw();
        expect(videoGame.biosType).equal(BiosType.MAME); 
    });
    it('equals should recognize if two instances are same game', () => {
        expect(videoGame.equals(videoGame)).equals(true);
    });
});