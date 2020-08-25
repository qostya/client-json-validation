import {Base} from './types/base';
import {StringType} from './types/string';
import {NumberType} from './types/number';
import {BooleanType} from './types/boolean';
import {ArrayType} from './types/array';
import {Items, OneOfType} from './types/one-of';
import {ObjectType, Schema} from './types/object';

declare function string(): StringType;
declare function number(): NumberType;
declare function boolean(): BooleanType;
declare function object(schema: Schema): ObjectType;
declare function array(childType: Base): ArrayType;
declare function oneOf(...items: Items): OneOfType;
