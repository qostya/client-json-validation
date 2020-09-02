import {object, enumType, setLocale} from '../index';
import texts from '../texts/en';


setLocale(texts);

test('it should validate ENUM correctly', () => {
  expect(
    object({e: enumType('ABC', 'DEF')}).validate({e: 'ABC'})
  ).toEqual(null);

  expect(
    object({e: enumType('ABC', 'DEF')}).validate({e: 123})
  ).toEqual({e: texts.enum.invalid(123, ['ABC', 'DEF'])});
});