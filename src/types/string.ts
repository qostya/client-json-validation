import {Base} from './base';


export class StringType extends Base {
  private _max: number | undefined;
  private _min: number | undefined;

  public max(length: number) {
    this._max = length;
    return this;
  }

  public min(length: number) {
    this._min = length;
    return this;
  }

  validate(value: any) {
    const error = super.validate(value);
    if (error) return error;
    if (typeof value !== 'string') return Base.locale.string.not();
    if (this._max && value.length > this._max) return Base.locale.string.max(value, this._max);
    if (this._min && value.length < this._min) return Base.locale.string.min(value, this._min);
    return null;
  }
}
