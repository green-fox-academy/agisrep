'use strict';
import Animal from './animal'

class Dog extends Animal {
    name: string
    constructor(ownerName: string, isHealthy: boolean, healCost: number, name: string) {
        super(ownerName, isHealthy, healCost)
        this.name = name;
        this.healCost = this.healingCost(8, 1);
    }
}

export default Dog;