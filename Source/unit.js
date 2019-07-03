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
        if (this.isAlive()) {
            let tempHealth = this.health + amount.valueOf();
            (tempHealth > Unit.maxHealth) ? this.health = Unit.maxHealth : this.health = tempHealth;
        }
    }

    takeDamage(amount) {
        this.health -= amount.valueOf();
        this.earnExperience(Unit.damageXp);
    }

    earnExperience(amount) {
        let level = this.getLevel();
        (level > 1) ? amount = amount * (1 - level / 10) : amount;
        this.xp += amount;
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
    calculateActionPower(value) {
        let level = this.getLevel();
       return (level > 1) ? value * (1 + level / 10) : value;
    }
}

module.exports = Unit;