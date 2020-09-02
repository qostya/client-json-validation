import {Error} from './types';


export type Options = { type: string, children?: typeof Base };

export class Base {
  static locale = null;
  public texts: any;
  public isRequired: boolean = false;
  public type: string;

  constructor(options: Options) {
    const {type} = options;
    if (!Base.locale) throw new Error('You must set locale by `setLocale` function')
    this.texts = Base.locale;
    this.type = type;
  }

  public required() {
    this.isRequired = true;
    return this;
  }

  validate(value: any): null | string | Error {
    if (this.isRequired && (value == null || value === '')) return this.texts.main.required();
    return null;
  }
}