export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Error: inappropriate parameter length/type name!');
    } else {
      this.name = name;
    }

    const typeHero = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!typeHero.includes(type)) {
      throw new Error('Error: Inappropriate character type!');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.distance = 1;
  }

  get attack() {
    let attack = this.base_attack - 10*(this.distance - 1);
    if (this.stonedStatus) {
      attack = attack - Math.log2(this.distance) * 5;
    }
    return Math.round(attack);
  }

  set attack(value) {
    this.base_attack = value;

  } 

  get stoned() {
    return this.stonedStatus;
  }

  set stoned(status) {
    this.stonedStatus = status;
  } 

}
