import {object, boolean} from '../index';
import errors from '../errors';

test('it should validate BOOLEAN correctly', () => {
  expect(
    object({b: boolean()}).validate({b: true})
  ).toEqual(null);

  expect(
    object({b: boolean()}).validate({b: 123})
  ).toEqual({b: errors.boolean.not()});

  expect(
    object({b: boolean().required()}).validate({})
  ).toEqual({b: errors.main.required()});
});