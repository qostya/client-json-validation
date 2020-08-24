import {Base} from './base';
import errors from '../errors';


export class BooleanType extends Base {
  validate(value: any) {
    const error = super.validate(value);
    if (error) return error;
    if (typeof value !== 'boolean') return errors.boolean.not();
    return null;
  }
}