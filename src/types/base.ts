import {Error} from './types';


export type Options = { type: string, children?: typeof Base };

export class Base {
  static locale: any;
  public texts: any;
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
    if (!Base.locale) throw new Error('You must set localization by `setLocale` function: https://github.com/qostya/client-json-validation')
    if (this.isRequired && (value == null || value === '')) {
      return Base.locale.main.required();
    }
    return null;
  }
}
