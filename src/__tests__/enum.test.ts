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

  expect(
    object({e: enumType({k: 1}, {k: 2})}).validate({e: {k: 2}})
  ).toEqual(null);
});
