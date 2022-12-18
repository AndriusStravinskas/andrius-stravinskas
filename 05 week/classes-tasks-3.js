console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  // ... code
  class Challenge {
    // Build class Challenge: constructor + getter
    id;
    level;
    constructor(id, level) {
      this.id = id; // 1 2 3 4 5 6
      this.level = level; // VE EA ME HA VH EX
    };
  
    get points() {
      if (this.level === "VE") {
        return 5;
      } else if (this.level === "EA") {
        return 10;
      } else if (this.level === "ME") {
        return 20;
      } else if (this.level === "HA") {
        return 40;
      } else if (this.level === "VH") {
        return 80;
      } else if (this.level === "EX") {
        return 120;
      }
  
    };
  };
  
  class User {
    // Build class User: constructor + setter
    name;
    xp;
    log;
    constructor(name, xp, log) {
      this.name = name; // Madam Steve
      this.xp = xp; // 0 0
      this.log = log; // [] []
    };
  
                    // 1. Challenge { id: 1, level: 'VE' } 
                    // 2. Challenge { id: 4, level: 'HA' } 
                    // 3. Challenge { id: 6, level: 'EX' } 
                    // 4. Challenge { id: 5, level: 'VH' } 
                    // 5. Challenge { id: 3, level: 'ME' } 
                    // 6. Challenge { id: 2, level: 'EA' }
                    // ↕↕↕↕↕
    newSolvedChallenge(challenge) {
  /*
        1. user1.log = [] 
        2. user1.log = [ 1 ] 
        3. user1.log = [ 1, 4 ] 
  
        4. user2.log = [] 
        5. user2.log = [ 5 ] 
        6. user2.log = [ 5, 3 ]
  */
      this.log.push(challenge.id)
  /*
        user1.xp = 0
  user1.xp = 5      +=  'VE' =  5
  user1.xp = 45     +=  'HA' = 40
  user1.xp = 165    +=  'EX' = 120
  
  user2.xp = 80     +=  'VH' = 80
  user2.xp = 100    +=  'ME' = 20
  user2.xp = 110    +=  'EA' = 10
  */   this.xp += challenge.points
    };
  
  
  
  };
  
  // 1. Declare the class instances (two users and six challenges)
  // 2. Set the challenges solved by the users
  
  const user1 = new User('Madam', 0, []);
  const user2 = new User('Steve', 0, []);
  
  const challenge1 = new Challenge(1, 'VE');
  const challenge2 = new Challenge(2, 'EA');
  const challenge3 = new Challenge(3, 'ME');
  const challenge4 = new Challenge(4, 'HA');
  const challenge5 = new Challenge(5, 'VH');
  const challenge6 = new Challenge(6, 'EX');
  
  user1.newSolvedChallenge(challenge1);
  user1.newSolvedChallenge(challenge4);
  user1.newSolvedChallenge(challenge6);
  user2.newSolvedChallenge(challenge5);
  user2.newSolvedChallenge(challenge3);
  user2.newSolvedChallenge(challenge2);
  
  
  
  
  // Test user1
  console.log(user1.name, "Madam")
  console.log(user1.xp, 165)
  console.log(user1.log, [1, 4, 6])
  // Test user2
  console.log(user2.name, "Steve")
  console.log(user2.xp, 110)
  console.log(user2.log, [5, 3, 2])
  // Test challenges
  console.log(challenge1.id, 1);
  console.log(challenge2.level, "EA")
  console.log(challenge3.points, 20)
  console.log(challenge4.id, 4)
  console.log(challenge5.level, "VH")
  console.log(challenge6.points, 120)
  // Trivial tests
  console.log(user1.xp > user2.xp, true)
  console.log(challenge6.points < challenge1.points, false)
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  // ... code


  class Player {
    #hp;
    #maxHp;
    #en;
    #maxEn;
    
    constructor(name, maxHp, maxEn, armor) {
      this.#hp = maxHp;
      this.#maxHp = maxHp;
      this.#en = maxEn;
      this.#maxEn = maxEn;
      this.armor = armor;
      this.name = name;
    }
  
    set hp (health) {
      if( health < 0 ){
        this.#hp = 0;
      } else if( health >= this.#maxHp){
        this.#hp = this.#maxHp;
      } else {
        this.#hp = health
      };
    }
  
    get hp() {
      return this.#hp
    }
  
    set en (energy) {
      if( energy < 0 ){
        this.#en = 0;
      } else if( energy >= this.#maxEn){
        this.#en = this.#maxEn;
      } else {
        this.#en = energy
      };
    }
  
    get en() {
      return this.#en
    }
  
    get hpPerc() {
      return Math.round(100 *(100 * this.#hp/this.#maxHp)) / 100
    }
      /*
      {
      damage: the raw damage done (assuming 0 effective armor),
      description: the description of the attack (for humans to read),
      penetration: Armor penetration amount (see "Armor" below),
      cost: Cost, in energy points,
      heal: Optional heal value (some skills heal the caster on cast!)
      }
      */
    learnSkill(skillName, { damage, penetration, heal, cost, desc } ) {
  
      this[skillName] = function(target) { 
  
          // Energy
        if(this.#en < cost) return `${this.name} attempted to use ${skillName}, but didn't have enough energy!`;
        this.#en -= cost;
  
        // Armour
        const effectiveArmor = target.armor - penetration;
  
        // Damage
        const effectiveDamage = (damage * ((100 - effectiveArmor) / 100)).toFixed(2);
        target.hp -= effectiveDamage;
  
        // Health
        let beforeHeal = this.hp;
        this.hp += heal
        let healedAmount = this.hp - beforeHeal;
        
        // Description
        let attackString = `${this.name} used ${skillName}, ${desc}, against ${target.name}, doing ${effectiveDamage} damage! `;
        let skillHealed = ( healedAmount > 0 ) ? `${this.name} healed for ${healedAmount} health! ` : ''
        let targetPlayerDied = ( target.hp <= effectiveDamage ) ? `${target.name} died. ` : `${target.name} is at ${target.hpPerc}% health.`
        return attackString + skillHealed + targetPlayerDied
        
      }
    }
  
  }
  
  //     Expected 'Bob used Meteor Strike, an attack that basically ends the game (gg), against Alice, doing 110.92 damage! Bob healed for 5 health! Alice died. ',
  // instead got: 'Bob used Meteor Strike, an attack that basically ends the game (gg), against Alice, doing 110.92 damage! Bob healed for 5 health.Alice died.'
  
  
  
  
  
  console.log('----FIGHT!----')
  //player class exists
  const alice = new Player('Alice',110,50,10);
  const bob = new Player('Bob',100,60,20);
  console.log('Does our Player class exist?')
  console.log(bob instanceof Player && alice instanceof Player, true,`Alice and Bob don't seem to be instances of the player class.`)
  
  //learn skill
  console.log("\n----\nCan our competitors learn new skills?")
  console.log(typeof alice.learnSkill,'function','Missing `learnSkill` method!')
  
  //skill is function
  console.log('\n----\nDoes the learnSkill method allow us to add a skill?')
  alice.learnSkill('fireball',{
      damage: 23,
      penetration: 1.2,
      heal: 0,
      cost: 15,
      desc: 'a firey magical attack'
  });
  console.log(typeof alice.fireball,'function','Could not learn skill "Fireball"!')
  
  //cast skill
  console.log('\n----\nCan we cast our new skill?')
  
  console.log(alice.fireball(bob),'Alice used fireball, a firey magical attack, against Bob, doing 18.68 damage! Bob is at 81.32% health.','Using Fireball returned the wrong string!')
  
  //too high energy cost?
  console.log('\n----\nWhat about skills with too high an energy cost?')
  bob.learnSkill('superbeam',{
    damage:200,
    penetration:50,
    heal:50,
    cost:75,
    desc: "an overpowered attack, pls nerf"
  })
  
  console.log(bob.superbeam(alice),`Bob attempted to use superbeam, but didn't have enough energy!`,'Bob should return that he cannot use this skill!')
  
  //can get a player's HP percent and energy
  console.log("\n----\nAfter that devastating attack, let's check in on Alice and Bob:")
  console.log(bob.hpPerc+'% health','81.32% health',`Bob should be at 81.32% health`)
  console.log(alice.en+' energy','35 energy',`Alice's energy should be 35.`)
  
  //Combo attack
  console.log("\n----\nBut wait! Bob's back in action!")
  bob.learnSkill('Meteor Strike',{
    damage:118,
    penetration:4,
    heal:5,
    cost:20,
    desc: "an attack that basically ends the game (gg)"
  })
  
  console.log(bob['Meteor Strike'](alice),"Bob used Meteor Strike, an attack that basically ends the game (gg), against Alice, doing 110.92 damage! Bob healed for 5 health! Alice died. ")
  
  console.log('\n----\nAre the four health and energy properties private?');
  ['hp','maxHp','en','maxEn'].forEach(prop=>{
    console.log(bob['#'+prop],undefined,`Property #${prop} should not be publically accessible!`)
  })


}
console.groupEnd();






