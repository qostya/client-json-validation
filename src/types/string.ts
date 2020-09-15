import {Base} from './base';


export class StringType extends Base {
  private _max: number | undefined;
  private _min: number | undefined;
  private _match: RegExp | undefined;

  public max(length: number) {
    this._max = length;
    return this;
  }

  public min(length: number) {
    this._min = length;
    return this;
  }

  public match(regexp: RegExp) {
    this._match = regexp;
    return this;
  }

  validate(value: any) {
    const error = super.validate(value);
    if (error) return error;
    const texts = Base.locale.string;
    if (typeof value !== 'string') return texts.not();
    if (this._match && !value.match(this._match)) return texts.match(value, this._match);
    if (this._max && value.length > this._max) return texts.max(value, this._max);
    if (this._min && value.length < this._min) return texts.min(value, this._min);
    return null;
  }
}
