const Unit = require('./unit.js');

class Doctor extends Unit {
    constructor(name) {
        super(name);
        this.healPower = 10;
    }

    heal(unit){
        let amountOfHeal = this.calculateActionPower(this.healPower);
        unit.addHealth(amountOfHeal);
        this.earnExperience(Unit.actionXp);
        return amountOfHeal;
    }
}

module.exports = Doctor;