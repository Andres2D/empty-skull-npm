import { flagsCollection } from './flags';
import { filterResults } from '../common/array-operations';
import { Country } from '../interfaces/country.interface';

/**
 * 
 * @param {*} name full or partial country name
 * @param {*} isFull flag to know if the name is full or partial
 * @returns An object with the name and the flag svg link
 */
export const getFlagSvg = (name: string, isFull = false): Country | Country[] => {
  return filterResults<Country>(flagsCollection, name, isFull);
};

export const getAllFlags = (): Country[] => {
  return [...flagsCollection];
};
