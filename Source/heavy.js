const Solider = require('./solider.js');

class Heavy extends Solider {
    static get damageResist() {
        return 0.2;
    }
    constructor(name){
        super(name);
    }

    takeDamage(amount) {
        amount *= Heavy.damageResist;
        super.takeDamage(amount);
    }
    machineGunAttack(unit, amountOfShots){
        for (let i = 0; i < amountOfShots; i++){
            super.handAttack(unit);
        }
    }
}
module.exports = Heavy;