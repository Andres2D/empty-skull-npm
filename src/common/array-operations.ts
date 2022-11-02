  /**
 * 
 * @param {*} collection set collection to filter
 * @param {*} name full or partial country name
 * @param {*} isFull flag to know if the name is full or partial
 * @returns An object with the name and the flag svg link
 */
export const filterResults = (collection: any, name: string, isFull: boolean): any => {
  if(isFull) {
    return [...collection].filter(c => c.name.toLowerCase() === name.toLowerCase())[0];
  }

  return [...collection].filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
};
