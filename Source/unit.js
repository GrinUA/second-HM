class Unit {
    static get maxHealth() {
        return 100;
    }
    static get actionXp(){
        return 250;
    }
    static get damageXp(){
        return 500;
    }
    static get maxXp(){
        return 1000
    }

    constructor(name) {
        this.health = Unit.maxHealth;
        this.level = 1;
        this.xp = 0;
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getLevel() {
        return this.level;
    }

    isAlive() {
        return this.health > 0;
    }

    addHealth(amount) {
        let tempHealth = this.health + amount.valueOf();
        (tempHealth > Unit.maxHealth) ? this.health = Unit.maxHealth : this.health = tempHealth;
    }

    takeDamage(amount) {
        this.health -= amount.valueOf();
        this.earnExperience(Unit.actionXp);
    }

    earnExperience(amount) {
        this.xp += amount.valueOf();
        if (this.xp > Unit.maxXp) {
            this.levelUp();
        }
    }

    levelUp() {
        console.log(this.name + " level up!");
        this.xp -= Unit.maxXp;
        ++this.level;
        if(this.xp > Unit.maxXp) {this.levelUp()}
    }

    static calculateActionPower(unit, value) {
        if (unit.getLevel() > 1) {
            return value * (1 + unit.getLevel()/10);
        } else return value;
    }
}

module.exports = Unit;