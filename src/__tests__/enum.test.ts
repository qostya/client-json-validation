import {object, enumType} from '../index';
import errors from '../errors';

test('it should validate ENUM correctly', () => {
  expect(
    object({e: enumType('ABC', 'DEF')}).validate({e: 'ABC'})
  ).toEqual(null);

  expect(
    object({e: enumType('ABC', 'DEF')}).validate({e: 123})
  ).toEqual({e: errors.enum.invalid(123, ['ABC', 'DEF'])});
});