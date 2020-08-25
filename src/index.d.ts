import {Base} from './types/base';
import {StringType} from './types/string';
import {NumberType} from './types/number';
import {BooleanType} from './types/boolean';
import {ArrayType} from './types/array';
import {OneOfType, Items as ItemsOneOf} from './types/one-of';
import {ObjectType, Schema} from './types/object';
import {EnumType, Items as ItemsEnum} from './types/enum';

declare function string(): StringType;
declare function number(): NumberType;
declare function boolean(): BooleanType;
declare function object(schema: Schema): ObjectType;
declare function array(childType: Base): ArrayType;
declare function oneOf(...items: ItemsOneOf): OneOfType;
declare function enumType(...items: ItemsEnum): EnumType;
