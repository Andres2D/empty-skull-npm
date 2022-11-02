## Empty skull
This is a list of helpers functions to get specific data, and
some JavaScript operations.

### How to use it:

```bash
  $ npm install empty-skull --save-dev
```

## Getting all countries flags
```javascript
import { getAllFlags } from 'empty-skull';

console.log(getAllFlags(); 
// Return a list with all the flags of all the countries, perfect to 
// create a list selector
```

## Getting country flag svg

```javascript
import { getFlagSvg } from 'empty-skull';

console.log(getFlagSvg('Col', false)); 
// { name: 'Colombia', flag: 'https://flagcdn.com/co.svg' }

console.log(getFlagSvg('Canada', true));
// { name: 'Canada', flag: 'https://flagcdn.com/ca.svg' }

console.log(getFlagSvg('none', true));
// undefined
```

## Getting all the teams flags
```javascript
import { getAllTeams } from 'empty-skull';

console.log(getAllTeams(); 
// Return a list with all the flags some football teams, perfect to 
// create a list selector
```
> The teams list will be constantly updated to add more teams


## Getting football club shield png

```javascript
import { getTeamPng } from 'empty-skull';

console.log(getTeamPng('Liv', false)); 
// { img: 'https://media.api-sports.io/football/teams/40.png', name: 'Liverpool' }

console.log(getTeamPng('Watford', true));
// { img: 'https://media.api-sports.io/football/teams/38.png', name: 'Watford' }

console.log(getTeamPng('none', true));
// undefined
```
