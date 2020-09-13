import {Base, Options} from './base';
import {Error} from './types';
import {isObject} from './helpers';


export type Schema = {
  [key: string]: Base
};

export class ObjectType extends Base {
  private schema: Schema;

  constructor(options: Options & { schema: Schema }) {
    const {schema} = options;
    super(options);
    this.schema = schema;
    if (!schema) new Error('Schema property is required');
    Object.keys(this.schema).forEach(key => {
      const field = this.schema[key];
      if (!(field instanceof Base)) throw new Error(`Field ${key} must be instance of Type`);
    })
  }

  validate(value: any) {
    const error = super.validate(value);
    if (error !== null) return error;
    if (!isObject(value)) return Base.locale.object.not();
    const errs: Error = {};
    Object.keys(this.schema).forEach(key => {
      const field = this.schema[key];
      if (!field.isRequired && (value[key] == null || value[key] === '')) return;
      const err = field.validate(value[key]);
      if (err) errs[key] = err;
    });
    return Object.keys(errs).length > 0 ? errs : null;
  }
}
