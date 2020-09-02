import {object, array, number, oneOf, string, boolean, setLocale} from '../index';
import texts from '../texts/en';


setLocale(texts);

test('it should validate ONE-OF correctly', () => {
  expect(
    object({o: oneOf(string(), number())}).validate({o: '123'})
  ).toEqual(null);

  expect(
    object({o: oneOf(string(), number())}).validate({})
  ).toEqual(null);

  expect(
    object({o: oneOf(string(), number()).required()}).validate({})
  ).toEqual({o: texts.main.required()});

  expect(
    object({o: array(oneOf(string(), number(), boolean()))}).validate({o: [123, 'ABC', true]})
  ).toEqual(null);
});