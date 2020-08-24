import {Base} from './base';
import errors from '../errors';


export class NumberType extends Base {
  private _max: number | undefined;
  private _min: number | undefined;

  public max(max: number) {
    this._max = max;
    return this;
  }

  public min(min: number) {
    this._min = min;
    return this;
  }

  validate(value: any) {
    const error = super.validate(value);
    if (error) return error;
    if (typeof value !== 'number') return errors.number.not();
    if (this._min && value < this._min) return errors.number.min(value, this._min);
    if (this._max && value > this._max) return errors.number.max(value, this._max);
    return null;
  }
}