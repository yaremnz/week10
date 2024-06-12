# VERBS what actions can a character in a game take? 
# Adjectives what attributes could a chracter have? 

HEALTH

what actions could we take that affect our health?

falling and hitting the ground hard can cause damage

if( hit: GROUND && velocity > MAX_SAFE){
    takeDamage( 5 * velocity)
}
REST API

PUT /api/player/123/move
{
    action: [
        {
            ts: 123123123,
            action: "shoot",
            direction: [-1, 0]
        },

        {
            ts: 123123124,
            action: "shoot",
            direction: [1, 0]
        }
    ]
}

RETURNS
{
    world: {
        other_people: [{...}, {...}]
    },
    player: {location[0,0], direction[0,0], health:100, ammo: 99}
}
    
class Person{
    move(directionAmountVector){
        const newLocation = this.location.add(directAmountVextor)
        is(this.checkCollision(newLocation)){
            this.location = newLocation;
        }
    }
    shoot(directionAmountVector){
        const target = this.location.add(directionAmountVector);
        this.checkCollision(target)
        if(collidedWith){
            collidedWith.takeDamage(this.weaponIn.damageAmount)
        }
    }

    takeDamage(amount){
        this.health -= amount
        this.checkDeath()
    }
    checkDealth(){
        if ( this.health <= 0>){
            this.dead = true;
        }
    }
    heal(medKitSize = 25){
        const newHealth = this.health + medKitSize;
        this.ealth = newHealth >100 ? 100 : newHealth;
    }
}
monster.bite(person){
    person.takeDamage(10)
    person.checkDeath()
}
