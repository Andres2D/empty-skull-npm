import { flagsCollection } from './flags.js';
import { filterResults } from '../common/array-operations.js';

/**
 * 
 * @param {*} name full or partial country name
 * @param {*} isFull flag to know if the name is full or partial
 * @returns An object with the name and the flag svg link
 */
export const getFlagSvg = (name, isFull = false) => {
  return filterResults(flagsCollection, name, isFull);
};

export const getAllFlags = () => {
  return [...flagsCollection];
};
