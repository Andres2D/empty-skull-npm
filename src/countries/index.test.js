import { getFlagSvg, getAllFlags } from './index.js';
import { flagsCollection } from './flags.js';

test('Should return the flag with partial argument', () => {
  expect(getFlagSvg('Col', false))
    .toEqual([{name: "Colombia",flag: "https://flagcdn.com/co.svg"}])
});

test('Should return the flag with full argument', () => {
  expect(getFlagSvg('Colombia', true))
    .toEqual({name: "Colombia",flag: "https://flagcdn.com/co.svg"})
});

test('Should get all the flags', () => {
  expect(getAllFlags()).toHaveLength(flagsCollection.size);
});
