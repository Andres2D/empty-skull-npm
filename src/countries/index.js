import { flagsCollection } from './flags.js';

export const getFlagSvg = (name, isFull) => {
  if(isFull) {
    return [...flagsCollection].filter(f => f.name.toLocaleLowerCase() === name.toLocaleLowerCase())[0];
  }

  return [...flagsCollection].filter(f => f.name.toLowerCase().includes(name.toLowerCase()))[0];
};
