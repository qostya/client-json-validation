import {Base, Options} from './base';


export type Items = Base[]

export class OneOfType extends Base {
  private items: Items;

  constructor(options: Options & { items: Items }) {
    const {items} = options;
    super(options);
    this.items = items;
    if (!items || !items.length) throw new Error('items property is required');
  }

  validate(value: any) {
    const error = super.validate(value);
    if (error) return error;
    const valid = this.items.find(item => !item.validate(value));
    if (!valid) return Base.locale.oneOf.invalid(value, this.items);
    return null;
  }
}
