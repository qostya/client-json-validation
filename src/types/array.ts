import {Base, Options} from './base';
import {Error} from './types';
import {isArray} from './helpers';


export class ArrayType extends Base {
  private childType: Base;
  private _min: number | undefined;
  private _max: number | undefined;

  constructor(options: Options & { childType: Base }) {
    const {childType} = options;
    super(options);
    this.childType = childType;
    if (!childType) new Error('childType property is required');
  }

  min(length: number) {
    this._min = length;
    return this;
  }

  max(length: number) {
    this._max = length;
    return this;
  }

  validate(value: any) {
    const error = super.validate(value);
    if (error) return error;
    if (!isArray(value)) return Base.locale.array.not();
    if (this._min && value.length < this._min) return Base.locale.array.min(value, this._min);
    if (this._max && value.length > this._max) return Base.locale.array.max(value, this._max);
    return value.reduce((acc: Error | null, item: any, index: number) => {
      let errs = acc;
      const err = this.childType.validate(item);
      if (err) {
        if (!errs) errs = {};
        errs[index] = err;
      }
      return errs;
    }, null);
  }
}
