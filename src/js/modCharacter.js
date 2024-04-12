/*import Character from './character';

export default class ModCaracter extends Character {
        constructor(name, type){
                super(name, type);
                this.distance = 1;
        }

        get attack() {
                let attack = this.base_attack - 10*(this.distance - 1);
                //let attack = +(this.setAttack - (this.setAttack * ((this.distance - 1) / 10))).toFixed();
                if (this.stonedStatus) {
                  attack = +(attack - Math.log2(this.distance) * 5).toFixed();

                  return attack;
                }
                return attack;
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

/*
        set stoned (status){
                this.stoneStatus = status;
        }

        get stoned(){
                return this.stoneStatus;
        }
 
        set attack (distance){
                this.attack = distance;
        }

        get attack(){
                let attack = this.attack - 10*(this.distance - 1);
                if(this.stoneStatus){
                        attack = attack - Math.log2(distance) * 5
                }
                return attack
        }
       
}
*/