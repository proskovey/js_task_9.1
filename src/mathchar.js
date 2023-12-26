export default class MathChar {
  constructor(name) {
    this.name = name;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = !!value;
  }

  get attack() {
    let attack;
    attack = 110 - 10 * this.distance;
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return attack;
  }

  set attack(value) {
    this._attack = value;
  }
}
