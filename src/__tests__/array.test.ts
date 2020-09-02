import {object, array, number, string, setLocale} from '../index';
import texts from '../texts/en';


setLocale(texts);

test('it should validate ARRAYS correctly', () => {
  expect(
    object({a: array(string())}).validate({a: ['ABC', 'DEF']})
  ).toEqual(null);

  expect(
    object({a: array(string()).required()}).validate({})
  ).toEqual({a: texts.main.required()});

  expect(
    object({a: array(string())}).validate({a: [123, 456]})
  ).toEqual({a: {0: texts.string.not(), 1: texts.string.not()}});

  expect(
    object({
      a: array(object({
        n: number(),
        s: string().required()
      }))
    }).validate({
      a: [
        {n: 123, s: 'ABC'},
        {s: 'DEF'}
      ]
    })
  ).toEqual(null);

  expect(
    object({a: array(string()).min(1)}).validate({a: ['abc']})
  ).toEqual(null);

  expect(
    object({a: array(string()).min(1)}).validate({a: []})
  ).toEqual({a: texts.array.min([], 1)});

  expect(
    object({a: array(string()).max(2)}).validate({a: ['abc', 'def']})
  ).toEqual(null);

  expect(
    object({a: array(string()).max(1)}).validate({a: ['abc', 'def']})
  ).toEqual({a: texts.array.max(['abc', 'def'], 1)});
});