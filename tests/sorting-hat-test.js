var assert = require('chai').assert;
var Hat = require('../exercises/sorting-hat');
var Warlock = require('../exercises/warlock');

describe('Hat', function() {

it.skip('should be a function', function() {
  assert.isFunction(Hat);
});

it.skip('should have a list of Hogwarts houses', function() {

  var sortingHat = new Hat("belligerent");

  assert.deepEqual(sortingHat.gryffindors, []);
  assert.deepEqual(sortingHat.ravenclaws, []);
  assert.deepEqual(sortingHat.hufflepuffs, []);
  assert.deepEqual(sortingHat.slytherins, []);
});

it.skip('should have a list of students to sort', function() {

  var sortingHat = new Hat("poised");

  assert.deepEqual(sortingHat.unplacedStudents, []);
});

it.skip('should have a mood', function() {

  var sortingHat = new Hat("sassy");

  assert.equal(sortingHat.mood, "sassy");
});

it.skip('should sing', function() {

  var sortingHat = new Hat("political");
  var george = new Warlock("George Weasley", "original");
  var fred = new Warlock("Fred Weasley", "original");
  var wood = new Warlock("Oliver Wood", "proud");
  var jordan = new Warlock("Lee Jordan", "original");
  var angelina = new Warlock("Angelina", "proud");


  assert.equal(sortingHat.sing(george), "There's nothing hidden in your head The Sorting Hat cant see, So try me on and I will tell you Where you ought to be.");

  sortingHat.sing(fred);
  sortingHat.sing(wood);
  sortingHat.sing(jordan);
  sortingHat.sing(angelina);

  assert.deepEqual(sortingHat.unplacedStudents.length, 5);
  assert.deepEqual(sortingHat.unplacedStudents[4].name, "George Weasley");
});

it.skip('should not sing to students unless they are enrolled at Hogwarts', function() {
  var sortingHat = new Hat("enraged")
  var snape = new Warlock("Severus Snape", "resourceful");
  var james = new Warlock("James Potter", "original");
  var lily = new Warlock("Lily Potter", "courageous");
  var pettigrew = new Warlock("Peter Pettigrew", "determined");
  var lupin = new Warlock("Remus Lupin", "chivalrous");
  var sirius = new Warlock("Sirius Black", "original");

  sortingHat.sing(snape);
  sortingHat.sing(james);
  sortingHat.sing(lily);
  sortingHat.sing(pettigrew);
  sortingHat.sing(lupin);
  sortingHat.sing(sirius);

  assert.equal(snape.enrolled, true);
  assert.equal(james.enrolled, true);
  assert.equal(lily.enrolled, true);
  assert.equal(pettigrew.enrolled, true);
  assert.equal(lupin.enrolled, true);
  assert.equal(sirius.enrolled, true);

  assert.deepEqual(sortingHat.unplacedStudents.length, 6);
});

it.skip('should place students in houses based on their traits', function() {
  var sortingHat = new Hat('giddy');
  var malfoy = new Warlock('Draco Malfoy', 'entitled');
  var cedric = new Warlock('Cedric Diggory', 'modest');
  var bill = new Warlock('Bill Weasley', 'chivalrous');
  var cho = new Warlock('Cho Chang', "polite");
  var crabbe = new Warlock('Vincent Crabbe', 'confident');

  sortingHat.sing(malfoy);
  sortingHat.sing(cedric);
  sortingHat.sing(bill);
  sortingHat.sing(cho);
  sortingHat.sing(crabbe);

  sortingHat.sortStudents(sortingHat.unplacedStudents);

  assert.deepEqual(sortingHat.gryffindors.length, 1);
  assert.deepEqual(sortingHat.slytherins.length, 2);
  assert.deepEqual(sortingHat.ravenclaws.length, 1);
  assert.deepEqual(sortingHat.hufflepuffs.length, 1);
  assert.deepEqual(sortingHat.slytherins[1].name, "Draco Malfoy");

});

it.skip('The student should go to their house after they are sorted', function() {

  var sortingHat = new Hat("aggressive");
  var dumbledore = new Warlock("Albus Dumbledore", "courageous")
  var sprout = new Warlock("Pomona Sprout", "empathetic");
  var flitwick = new Warlock("Filius Flitwick", "logical");
  var slughorn = new Warlock("Horace Slughorn", "ambitious");
  var moody = new Warlock("Mad Eye Moody", "determined");
  var trelawney = new Warlock("Sybill Trelawney", "creative");
  var umbridge = new Warlock("Dolores Umbridge", "cunning");
  var mcgonagall = new Warlock("Minerva mcgonagall", "proud");

  sortingHat.sing(dumbledore);
  sortingHat.sing(sprout);
  sortingHat.sing(flitwick);
  sortingHat.sing(slughorn);
  sortingHat.sing(moody);
  sortingHat.sing(trelawney);
  sortingHat.sing(umbridge);
  sortingHat.sing(mcgonagall)

  sortingHat.sortStudents(sortingHat.unplacedStudents);

  assert.equal(dumbledore.house, "Gryffindor");
  assert.equal(sprout.house, "Hufflepuff");
  assert.equal(flitwick.house, "Ravenclaw");
  assert.equal(slughorn.house, "Slytherin");
  assert.equal(moody.house, "Gryffindor");
  assert.equal(trelawney.house, "Ravenclaw");
  assert.equal(umbridge.house, "Slytherin");
  assert.equal(mcgonagall.house, "Gryffindor");

  assert.deepEqual(sortingHat.gryffindors.length, 3);
  assert.deepEqual(sortingHat.hufflepuffs.length, 1);
  assert.deepEqual(sortingHat.ravenclaws.length, 2);
  assert.deepEqual(sortingHat.slytherins.length, 2);

});

it.skip('students should exclaim their house after being placed', function() {

  var sortingHat = new Hat("overwhelmed");
  var tonks = new Warlock("Nymphadora Tonks", "gregarious");
  var molly = new Warlock("Molly Weasley", "proud");
  var arthur = new Warlock("Arthur Weasley", "original");
  var voldemort = new Warlock("Tom Riddle", "ambitious");
  var bellatrix = new Warlock("Bellatrix Lestrange", "confident");
  var lockhart = new Warlock("Gilderoy Lockhart", "compliant");
  var scamander = new Warlock("Newt Scamander", "empathetic");

  sortingHat.sing(tonks);
  sortingHat.sing(molly);
  sortingHat.sing(arthur);
  sortingHat.sing(voldemort);
  sortingHat.sing(bellatrix);
  sortingHat.sing(lockhart);
  sortingHat.sing(scamander);

  assert.equal(tonks.exclaim(tonks.house), "Why Don't I have a house yet?!");

  sortingHat.sortStudents(sortingHat.unplacedStudents);

  assert.equal(tonks.exclaim(tonks.house), "HUFFLEPUFF!");
  assert.equal(molly.exclaim(molly.house), "GRYFFINDOR!");
  assert.equal(arthur.exclaim(arthur.house), "GRYFFINDOR!");
  assert.equal(bellatrix.exclaim(bellatrix.house), "SLYTHERIN!");
  assert.equal(voldemort.exclaim(voldemort.house), "SLYTHERIN!");
  assert.equal(scamander.exclaim(scamander.house), "HUFFLEPUFF!");
  assert.equal(lockhart.exclaim(lockhart.house), "RAVENCLAW!");
})


it.skip('should have no more students to place after sorting them', function() {

  var sortingHat = new Hat("relieved");
  var harry = new Warlock("Harry Potter", "courageous");
  var hermione = new Warlock("Hermione Granger", "determined");
  var ron = new Warlock("Ron Weasley", "original");
  var ginny = new Warlock("Ginny Weasley", "courageous");
  var neville = new Warlock("Neville Longbottom", "chivalrous");
  var luna = new Warlock("Luna Lovegood", "curious");

  sortingHat.sing(harry);
  sortingHat.sing(hermione);
  sortingHat.sing(ron);
  sortingHat.sing(ginny);
  sortingHat.sing(neville);
  sortingHat.sing(luna);

  sortingHat.sortStudents(sortingHat.unplacedStudents);

  sortingHat.unplacedStudents = [];
})
});
