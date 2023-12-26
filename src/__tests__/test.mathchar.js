import MathChar from '../mathchar';
import { Magician, Daemon } from '../characters';

test('stoned', () => {
  const merlin = new Magician('Merlin');
  merlin.distance = 2;
  merlin.attack = 100;
  merlin.stoned = true;
  expect(merlin.attack).toBe(85);

  const azazel = new Daemon('Azazel');
  azazel.distance = 2;
  azazel.attack = 100;
  azazel.stoned = true;
  expect(azazel.attack).toBe(85);
});

test('not stoned', () => {
  const merlin = new Magician('Merlin');
  merlin.distance = 2;
  merlin.attack = 100;
  merlin.stoned = false;
  expect(merlin.attack).toBe(90);

  const azazel = new Daemon('Azazel');
  azazel.distance = 2;
  azazel.attack = 100;
  azazel.stoned = false;
  expect(merlin.attack).toBe(90);
});
