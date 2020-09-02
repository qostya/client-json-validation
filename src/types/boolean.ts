import {Base} from './base';


export class BooleanType extends Base {
  validate(value: any) {
    const error = super.validate(value);
    if (error) return error;
    if (typeof value !== 'boolean') return this.texts.boolean.not();
    return null;
  }
}