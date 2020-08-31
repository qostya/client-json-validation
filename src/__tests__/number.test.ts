import {object, number} from '../index';
import errors from '../errors';

test('it should validate NUMBER correctly', () => {
  expect(
    object({n: number()}).validate({n: 1})
  ).toEqual(null);

  expect(
    object({n: number().required()}).validate({})
  ).toEqual({n: errors.main.required()});

  expect(
    object({n: number()}).validate({n: 'ABC'})
  ).toEqual({n: errors.number.not()});

  expect(
    object({n: number().min(5)}).validate({n: 10})
  ).toEqual(null);

  expect(
    object({n: number().max(10)}).validate({n: 5})
  ).toEqual(null);

  expect(
    object({n: number().min(10)}).validate({n: 5})
  ).toEqual({n: errors.number.min(5, 10)});

  expect(
    object({n: number().max(5)}).validate({n: 10})
  ).toEqual({n: errors.number.max(10, 5)});

  expect(
    object({n: number().eqeq()}).validate({n: '1234'})
  ).toEqual(null);

  expect(
    object({n: number().eqeq(), nu: number().eqeq()}).validate({n: 'ABC', nu: [123]})
  ).toEqual({n: errors.number.isNaN(), nu: errors.number.not()});
});