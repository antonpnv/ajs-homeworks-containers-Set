export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже есть в команде!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach(character => {
      this.add(character);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}