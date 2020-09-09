var assert = require('chai').assert;
var Warlock = require('../exercises/warlock');

describe('Warlock', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Warlock);
  });

  it.skip('should have a name', function() {

    var gryffindor = new Warlock("Godric Gryffindor");
    var slytherin = new Warlock("Salazar Slytherin");

    assert.equal(gryffindor.name, "Godric Gryffindor");
    assert.equal(slytherin.name, "Salazar Slytherin");
  });

  it.skip('should have a top trait', function() {

    var bagman = new Warlock("Ludo Bagman", "gregarious");
    var crouch = new Warlock("Barty Crouch", "logical");

    assert.equal(bagman.quality, "gregarious");
    assert.equal(crouch.quality, "logical");
  });

  it.skip('should have no house on day one', function() {

    var kingsley = new Warlock("Kingsley Shacklebolt", "chivalrous");

    assert.equal(kingsley.house, null);
  });

  it.skip('should start out not enrolled at Hogwarts', function() {

    var creevey = new Warlock("Colin Creevey", "determined");

    assert.equal(creevey.enrolled, false);
  });

  it.skip('should be able to enroll at Hogwarts', function() {

    var creevey = new Warlock("Dennis Creevey", "determined");

    creevey.enroll();

    assert.equal(creevey.enrolled, true);
  });

  it.skip('can have pets', function() {

    var hagrid = new Warlock("Rubeus Hagrid", "original", [
      { name: "Fang", type: "hound" },
      { name: "Norberta", type: "dragon" },
      { name: "Aragog", type: "giant spider" },
      { name: "Buckbeak", type: "hippogriff"},
    ]);

    var fudge = new Warlock("Cornelius Fudge", "gregarious");

    assert.deepEqual(hagrid.pets.length, 4);
    assert.deepEqual(hagrid.pets[0].name, "Fang");
    assert.deepEqual(hagrid.pets[3].type, "hippogriff");
    assert.deepEqual(fudge.pets, []);
  });
});
