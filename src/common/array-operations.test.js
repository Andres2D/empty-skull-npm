import { filterResults } from './array-operations.js';

const mockArray = [
  {
    name: 'Andres',
    position: 'Developer'
  },
  {
    name: 'Anne',
    position: 'Designer'
  },
  {
    name: 'Steve',
    position: 'Commercial'
  }
];

test('Should filter partially', () => {
  expect(filterResults(mockArray, 'And', false))
    .toEqual({ name: 'Andres', position: 'Developer'});
});

test('Should filter completely', () => {
  expect(filterResults(mockArray, 'Anne', true))
    .toEqual({ name: 'Anne', position: 'Designer'});
});
