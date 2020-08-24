import {object, array, number, oneOf, string, boolean} from '../index';
import errors from '../errors';

test('it should validate ONE-OF correctly', () => {
  expect(
    object({o: oneOf(string(), number())}).validate({o: '123'})
  ).toEqual(null);

  expect(
    object({o: oneOf(string(), number())}).validate({})
  ).toEqual(null);

  expect(
    object({o: oneOf(string(), number()).required()}).validate({})
  ).toEqual({o: errors.main.required()});

  expect(
    object({o: array(oneOf(string(), number(), boolean()))}).validate({o: [123, 'ABC', true]})
  ).toEqual(null);
});