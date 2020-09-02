import {object, boolean, setLocale} from '../index';
import texts from '../texts/en';


setLocale(texts);

test('it should validate BOOLEAN correctly', () => {
  expect(
    object({b: boolean()}).validate({b: true})
  ).toEqual(null);

  expect(
    object({b: boolean()}).validate({b: 123})
  ).toEqual({b: texts.boolean.not()});

  expect(
    object({b: boolean().required()}).validate({})
  ).toEqual({b: texts.main.required()});
});