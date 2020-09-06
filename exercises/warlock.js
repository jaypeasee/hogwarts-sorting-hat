class Warlock {
  constructor(name, quality, pets) {
    this.name = name;
    this.quality = quality;
    this.house = null;
    this.enrolled = false;
    this.pets = pets || [];
  }
  enroll() {
    this.enrolled = true;
  }
  exclaim(house) {
    if (!this.house) {
      return `Why Don't I have a house yet?!`
    }
    return `${house.toUpperCase()}!`
  }
}

module.exports = Warlock
