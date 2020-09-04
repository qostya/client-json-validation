## Client JSON validation

Lightweight client side JSON validator with zero dependencies

### Installation
```shell script
npm i -S client-json-validation
```
### Usage

```javascript
// Import lib
import {object, string, array, number} from 'client-json-validation';
// Import target locale
import en from 'client-json-validation/lib/texts/en';

// Set localization once (en|ru)
setLocale(en);

// Create schema
const schema = object({
  items: array(
    object({
      cost: number(),
      title: string().required()
    })
  ).min(1)
});

// Run validation
schema.validate({
  items: [
    {cost: 100, title: 'T-Shirt'},
    {title: 'Bag'}
  ]
}); // Returns null

schema.validate({
  items: [
    {cost: 'one hundred', title: 'T-Shirt'},
    {title: 'Bag'}
  ]
}); // Returns {items: {0: {title: 'Value is not a number'}}}}
```