import {object, setLocale, string} from '../index';
import texts from '../texts/en';


setLocale(texts);

test('it should validate STRING correctly', () => {
  expect(
    object({s: string()}).validate({s: 'ABC'})
  ).toEqual(null);

  expect(
    object({s: string()}).validate({})
  ).toEqual(null);

  expect(
    object({s: string().required()}).validate({})
  ).toEqual({s: texts.main.required()});

  expect(
    object({s: string().required().allowEmpty()}).validate({s: ''})
  ).toEqual(null);

  expect(
    object({s: string().required()}).validate({s: ''})
  ).toEqual({s: texts.main.required()});

  expect(
    object({s: string()}).validate({s: 123})
  ).toEqual({s: texts.string.not()});

  expect(
    object({s: string().min(5)}).validate({s: 'ABCDE'})
  ).toEqual(null);

  expect(
    object({s: string().max(5)}).validate({s: 'ABC'})
  ).toEqual(null);

  expect(
    object({s: string().min(5)}).validate({s: 'ABC'})
  ).toEqual({s: texts.string.min('ABC', 5)});

  expect(
    object({s: string().max(5)}).validate({s: 'ABCDEFGHIJK'})
  ).toEqual({s: texts.string.max('ABCDEFGHIJK', 5)});

  expect(
    object({s: string().match(/abc/g)}).validate({s: '123_abc_def'})
  ).toEqual(null);

  expect(
    object({s: string().match(/abc/g)}).validate({s: 'defg'})
  ).toEqual({s: texts.string.match('defg', /abc/g)});
});