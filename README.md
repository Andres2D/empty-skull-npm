## Empty skull
This is a list of helpers functions to get specific data, and
some JavaScript operations.

### How to use it:

```bash
  $ npm install empty-skull --save-dev
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
