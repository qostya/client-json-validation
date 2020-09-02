import {Base} from './base';


export class NumberType extends Base {
  private _max: number | undefined;
  private _min: number | undefined;
  private _isStrict: boolean = true;

  public max(max: number) {
    this._max = max;
    return this;
  }

  public min(min: number) {
    this._min = min;
    return this;
  }

  public eqeq() {
    this._isStrict = false;
    return this;
  }

  validate(value: any) {
    const error = super.validate(value);
    if (error) return error;
    if (typeof value !== 'number') {
      if (this._isStrict) return this.texts.number.not();
      if (typeof value === 'string') {
        if (isNaN(Number(value))) return this.texts.number.isNaN();
      } else return this.texts.number.not();
    }
    if (this._min && value < this._min) return this.texts.number.min(Number(value), this._min);
    if (this._max && value > this._max) return this.texts.number.max(Number(value), this._max);
    return null;
  }
}
