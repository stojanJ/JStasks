class Character {
  static numberOfCharacters = 0;
  constructor() {
    if (this.constructor == Character) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }
  set() {
    throw new Error("Method 'set()' must be implemented.");
  }
  static numberOfCharactersCreated() {
    Character.numberOfCharacters++;
  }
  get position() {
    return { test: Character.numberOfCharacters, x: this.x, y: this.y };
  }
}
class PlayerCharacter extends Character {
  set(x, y) {
    Character.numberOfCharactersCreated();
    this.x = x;
    this.y = y;
    if (x > 10 && y > 10) {
      throw new Error("Character must have under position under 10");
    } else if (x < 0 && y < 0) {
      throw new Error("Character must be over 0");
    }
  }
}
class NonPlayerCharacter extends Character {
  set(x, y) {
    Character.numberOfCharactersCreated();
    this.x = x;
    this.y = y;
    if (x > 10 && y > 10) {
      throw new Error("Character must have under position under 10");
    } else if (x < 0 && y < 0) {
      throw new Error("Character must be over 0");
    }
  }
}
function createNonPlayerCharacter() {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let character = new NonPlayerCharacter();
  character.set(x, y);
  return character;
}
function creaatePlayerCharacter() {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let character = new PlayerCharacter();
  character.set(x, y);
  return character;
}

const player = creaatePlayerCharacter();
const nonPlayer = createNonPlayerCharacter();
console.log(player);
console.log(nonPlayer);
console.log(Character.numberOfCharacters);

// Opcija 2

// class characterFacotory {
//   createCharacter(type) {
//     let x = Math.floor(Math.random() * 10);
//     let y = Math.floor(Math.random() * 10);
//     let character;
//     if (type === player) {
//       character = new PlayerCharacter();
//     } else if (type === nonPlayer) {
//       character = new NonPlayerCharacter();
//     }
//     character.set(x, y);
//     return character;
//   }
// }

// Verzija sa prototype
NonPlayerCharacter.prototype.create = function createNonPlayerCharacter() {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let character = new NonPlayerCharacter();
  character.set(x, y);
  return character;
};

PlayerCharacter.prototype.create = function creaatePlayerCharacter() {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let character = new PlayerCharacter();
  character.set(x, y);
  return character;
};
