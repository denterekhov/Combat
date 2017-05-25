/*jshint esversion: 6 */
class Fighter {
  constructor(name = "Unknown ship", power = 27, health = 500) {
    this.name = name;
    this.power = power;
    this.health = health;
  }

  setDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} health: ${this.health}`);
  }

  hit(enemy, point) {
    let damage = point * this.power;
    enemy.setDamage(damage);
  }
}

class ImprovedFighter extends Fighter {
  doubleHit(enemy, point) {
    let doublePoint = point * 2;
    super.hit(enemy, doublePoint);
  }
}

let alliancePilot = new Fighter("X-wing", 20, 1000);
let empirePilot = new ImprovedFighter("TIE Fighter", 25, 800);

fight = (fighter, improvedFighter, ...points) => {
  let firstMove;
  Math.random() > 0.5 ? firstMove = 1 : firstMove = 0;
  for (let point of points) {
    firstMove ? (fighter.hit(improvedFighter, point), firstMove = 0) : (improvedFighter.doubleHit(fighter, point), firstMove = 1);
    if ((fighter.health <= 0) || (improvedFighter.health <= 0)) {
      firstMove ? console.log(`${improvedFighter.name} wins!`) : console.log(`${fighter.name} wins!`);
      break;
    }
  }
};

fight (alliancePilot, empirePilot, 5, 8, 18, 11, 20, 4);