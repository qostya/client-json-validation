import {Base, Options} from './base';
import errors from '../errors';


export type Items = Base[]

export class OneOfType extends Base {
  private items: Items;

  constructor({items, ...rest}: Options & { items: Items }) {
    super(rest);
    this.items = items;
  }

  validate(value: any) {
    const error = super.validate(value);
    if (error) return error;
    const valid = this.items.find(item => !item.validate(value));
    if (!valid) return errors.oneOf.invalid(value, this.items);
    return null;
  }
}
