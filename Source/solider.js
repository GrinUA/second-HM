const Unit = require('./unit.js');

class Solider extends Unit {
    constructor (name){
        super(name);
        this.atackPower = 15;
    }
    handAttack(unit){
        unit.takeDamage(this.calculateActionPower(this.atackPower));
        this.earnExperience(Unit.actionXp);
    }
}
module.exports = Solider;