const Unit = require('./unit.js');

class Doctor extends Unit {
    constructor(name) {
        super(name);
        this.healPower = 10;
    }

    heal(unit){
        unit.health += Unit.actionPower(this, this.healPower);
    }
}

module.exports = Doctor;