import {Error} from './types';
import errors from '../errors';


export type Options = { type: string, children?: typeof Base };

export class Base {
  public isRequired: boolean = false;
  public type: string;

  constructor(options: Options) {
    const {type} = options;
    this.type = type;
  }

  public required() {
    this.isRequired = true;
    return this;
  }

  validate(value: any): null | string | Error {
    if (this.isRequired && (value == null || value === '')) return errors.main.required();
    return null;
  }
}