import { getTeamPng } from './index.js';

test('Should return the team with partial argument', () => {
  expect(getTeamPng('liv', false))
    .toEqual({ img: "https://media.api-sports.io/football/teams/40.png", name: 'Liverpool'});
});

test('Should return the team with full argument', () => {
  expect(getTeamPng('sOuthampton', true))
    .toEqual({ img: "https://media.api-sports.io/football/teams/41.png", name: 'Southampton'});
});
