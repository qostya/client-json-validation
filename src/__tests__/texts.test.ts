import {object, number, setLocale} from '../index';
import ru from '../texts/ru';
import en from '../texts/en';


test('it should change locale correctly', () => {
  setLocale(ru);
  expect(
    object({n: number()}).validate({n: 'ABC'})
  ).toEqual({n: ru.number.not()});

  setLocale(en);
  expect(
    object({n: number()}).validate({n: 'ABC'})
  ).toEqual({n: en.number.not()});
});
