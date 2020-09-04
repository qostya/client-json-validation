import {Base, Options} from './base';


export type Items = any[];

export class EnumType extends Base {
  private items: Items;

  constructor({items, ...rest}: Options & { items: Items }) {
    super(rest);
    this.items = items;
    if (!items || !items.length) throw new Error('items property is required');
  }

  validate(value: any) {
    const error = super.validate(value);
    if (error) return error;
    const found = this.items.find(item => item === value);
    if (!found) return Base.locale.enum.invalid(value, this.items);
    return null;
  }
}
