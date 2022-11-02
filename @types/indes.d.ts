import { Country } from "../src/interfaces/country.interface";

declare module 'empty-skull' 
{
  export function getAllFlags(): Country[];
  export function getFlagSvg(name: string, isFull: boolean): Country | Country[];
  export function getAllTeams(): Team[];
  export function getTeamPng(name: string, isFull: boolean): Team | Team[];
}
