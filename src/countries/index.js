import { flagsCollection } from './flags.js';

/**
 * 
 * @param {*} name full or partial country name
 * @param {*} isFull flag to know if the name is full or partial
 * @returns An object with the name and the flag svg link
 */
export const getFlagSvg = (name, isFull) => {
  if(isFull) {
    return [...flagsCollection].filter(f => f.name.toLocaleLowerCase() === name.toLocaleLowerCase())[0];
  }

  return [...flagsCollection].filter(f => f.name.toLowerCase().includes(name.toLowerCase()))[0];
};
