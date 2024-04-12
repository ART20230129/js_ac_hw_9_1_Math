
import Character from './character';


export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 100;
    this.defence = 40; 
  }
}
