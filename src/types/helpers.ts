export function isObject(el: any) {
  return typeof el === 'object' && el !== null;
}

export function isArray(el: any) {
  return Boolean(el) && el.constructor === Array;
}
