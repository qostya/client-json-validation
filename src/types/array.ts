import {Base, Options} from './base';
import {Error} from './types';
import {isArray} from './helpers';


export class ArrayType extends Base {
  private childType: Base;
  private _min: number | undefined;
  private _max: number | undefined;

  constructor({childType, ...rest}: Options & { childType: Base }) {
    super(rest);
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
    if (!isArray(value)) return this.texts.array.not();
    if (this._min && value.length < this._min) return this.texts.array.min(value, this._min);
    if (this._max && value.length > this._max) return this.texts.array.max(value, this._max);
    const errs: Error = {};
    value.forEach((item: any, index: number) => {
      const err = this.childType.validate(item);
      if (err) errs[index] = err;
    })
    return Object.keys(errs).length > 0 ? errs : null;
  }
}
