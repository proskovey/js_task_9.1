import MathChar from './mathchar';

export class Magician extends MathChar {
  constructor(name) {
    super();
    this.type = 'magician';
  }
}

export class Daemon extends MathChar {
  constructor(name) {
    super();
    this.type = 'daemon';
  }
}
