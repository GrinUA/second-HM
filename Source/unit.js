class Unit {
    static get maxHealth() {
        return 100;
    }

    constructor(name) {
        this.health = Unit.maxHealth;
        this.level = 1;
        this.xp = 0;
        this._MAX_XP = 1000;
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
        var tempHealth = this.health + amount.valueOf();
        (tempHealth > Unit.maxHealth) ? this.health = Unit.maxHealth : this.health = tempHealth;
    }

    takeDamage(amount) {
        this.health -= amount.valueOf();
    }

    earnExperience(amount) {
        this.xp += amount.valueOf();
        if (this.xp > this._MAX_XP) {
            this.levelUp();
        }
    }

    levelUp() {
        console.log(this.name + " level up!");
        this.xp -= this._MAX_XP;
        ++this.level;
    }

    static actionPower(unit, value) {
        if (unit.getLevel() > 1) {
            return value * (1 + unit.getLevel()/10);
        } else return value;

    }
}

module.exports = Unit;