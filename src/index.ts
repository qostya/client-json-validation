import {ObjectType, Schema} from './types/object';
import {StringType} from './types/string';
import {NumberType} from './types/number';
import {ArrayType} from './types/array';
import {OneOfType, Items} from './types/one-of';
import {BooleanType} from './types/boolean';
import {Base} from './types/base';


export function string() {
  return new StringType({type: 'string'});
}

export function number() {
  return new NumberType({type: 'number'});
}

export function boolean() {
  return new BooleanType({type: 'boolean'});
}

export function object(schema: Schema) {
  return new ObjectType({type: 'object', schema});
}

export function array(childType: Base) {
  return new ArrayType({type: 'array', childType});
}

export function oneOf(...items: Items) {
  return new OneOfType({type: 'oneOf', items});
}
