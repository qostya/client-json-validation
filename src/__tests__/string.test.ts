import {object, string} from '../index';
import errors from '../errors';

test('it should validate STRING correctly', () => {
  expect(
    object({s: string()}).validate({s: 'ABC'})
  ).toEqual(null);

  expect(
    object({s: string()}).validate({})
  ).toEqual(null);

  expect(
    object({s: string().required()}).validate({})
  ).toEqual({s: errors.main.required()});

  expect(
    object({s: string()}).validate({s: 123})
  ).toEqual({s: errors.string.not()});

  expect(
    object({s: string().min(5)}).validate({s: 'ABCDE'})
  ).toEqual(null);

  expect(
    object({s: string().max(5)}).validate({s: 'ABC'})
  ).toEqual(null);

  expect(
    object({s: string().min(5)}).validate({s: 'ABC'})
  ).toEqual({s: errors.string.min('ABC', 5)});

  expect(
    object({s: string().max(5)}).validate({s: 'ABCDEFGHIJK'})
  ).toEqual({s: errors.string.max('ABCDEFGHIJK', 5)});
});