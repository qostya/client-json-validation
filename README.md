## Client JSON validation

Lightweight client side JSON validator with zero dependencies

### Installation
```shell script
npm i -S client-json-validation
```
### Usage

```typescript
import {object, string, array, number} from 'client-json-validation';

const schema = object({
  items: array(
    object({
      cost: number(),
      title: string().required()
    })
  ).min(1)
});

schema.validate({
  items: [
    {cost: 100, title: 'T-Shirt'},
    {title: 'Bag'}
  ]
});
```