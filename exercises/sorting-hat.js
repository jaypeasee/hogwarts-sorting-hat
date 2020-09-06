class Hat {
  constructor(mood) {
    this.gryffindors = [];
    this.ravenclaws = [];
      this.hufflepuffs = [];
    this.slytherins = [];
    this.unplacedStudents = [];
    this.mood = mood;
  }
  sing(student) {
    student.enroll();
    this.unplacedStudents.unshift(student);
    return "There's nothing hidden in your head The Sorting Hat cant see, So try me on and I will tell you Where you ought to be."
  }
  sortStudents(studentList) {
    var ravens = ["creative", "logical", "polte", "curious", "compliant"];
    for (var i = 0; i < studentList.length; i++) {
      if (studentList[i].quality === "cunning" || studentList[i].quality === "resourceful" || studentList[i].quality === "confident" || studentList[i].quality === "ambitious" || studentList[i].quality === "entitled") {
        this.slytherins.push(studentList[i]);
        studentList[i].house = "Slytherin"
      } else if (studentList[i].quality === "modest" || studentList[i].quality === "loyal" || studentList[i].quality === "empathetic" || studentList[i].quality === "lazy" || studentList[i].quality === "gregarious") {
        this.hufflepuffs.push(studentList[i]);
        studentList[i].house = "Hufflepuff"
      } else if (studentList[i].quality === "chivalrous" || studentList[i].quality === "courageous" || studentList[i].quality === "original" || studentList[i].quality === "proud" || studentList[i].quality === "determined") {
        this.gryffindors.push(studentList[i]);
        studentList[i].house = "Gryffindor"
      } else if (studentList[i].quality === "curious" || studentList[i].quality === "creative" || studentList[i].quality === "compliant" || studentList[i].quality === "polite" || studentList[i].quality === "logical") {
        this.ravenclaws.push(studentList[i]);
        studentList[i].house = "Ravenclaw";
      }
    }
    this.unplacedStudents = [];
  }
}

module.exports = Hat;
