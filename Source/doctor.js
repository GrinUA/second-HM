const Unit = require('./unit.js');

class Doctor extends Unit {
    constructor(name) {
        super(name);
        this.healPower = 10;
    }

    heal(unit){
        unit.addHealth(Unit.calculateActionPower(this, this.healPower));
        this.earnExperience(Unit.ca)
    }
}

module.exports = Doctor;