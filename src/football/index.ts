import { footballTeams } from './clubTeams';
import { filterResults } from '../common/array-operations';
import { Team } from '../interfaces/team.interface';

/**
 * 
 * @param {*} name full or partial country name
 * @param {*} isFull flag to know if the name is full or partial
 * @returns An object with the name and the flag svg link
 */
export const getTeamPng = (name: string, isFull = false): Team | Team[] => {
  return filterResults(footballTeams, name, isFull);
};

export const getAllTeams = (): Team[] => {
  return [...footballTeams];
};
