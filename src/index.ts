import {ObjectType, Schema} from './types/object';
import {StringType} from './types/string';
import {NumberType} from './types/number';
import {ArrayType} from './types/array';
import {OneOfType, Items as ItemsOneOf} from './types/one-of';
import {BooleanType} from './types/boolean';
import {Base} from './types/base';
import {EnumType, Items as ItemsEnum} from './types/enum';


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

export function oneOf(...items: ItemsOneOf) {
  return new OneOfType({type: 'oneOf', items});
}

export function enumType(...items: ItemsEnum) {
  return new EnumType({type: 'enum', items});
}
