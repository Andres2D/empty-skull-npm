import { Base } from '../interfaces/common.interface';
  /**
 * 
 * @param {*} collection set collection to filter
 * @param {*} name full or partial country name
 * @param {*} isFull flag to know if the name is full or partial
 * @returns An object with the name and the flag svg link
 */
export const filterResults = <T extends Base>(collection: Set<T>, name: string, isFull: boolean): T | T[]  => {
  if(isFull) {
    return [...collection].filter(c => c.name.toLowerCase() === name.toLowerCase())[0];
  }

  return [...collection].filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
};
