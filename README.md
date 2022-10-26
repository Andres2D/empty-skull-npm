## Empty skull
This is a list of helpers functions to get specific data, and
some JavaScript operations.

### How to use it:
```bash
  $ npm install empty-skull --save-dev
```

```javascript
import { getFlagSvg } from 'empty-skull';

console.log(getFlagSvg('Col', false)); 
// { name: 'Colombia', flag: 'https://flagcdn.com/co.svg' }

console.log(getFlagSvg('Canada', true));
// { name: 'Canada', flag: 'https://flagcdn.com/ca.svg' }

console.log(getFlagSvg('none', true));
// undefined
```
