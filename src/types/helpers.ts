export function isObject(el: any): el is Object {
  return typeof el === 'object' && el !== null;
}

export function isArray(el: any): el is Array<any> {
  return Boolean(el) && el.constructor === Array;
}

export function deepEquals(a: any, b: any) {
  if (a === b) return true;
  if (!a || !b) return false;
  const aType = typeof a;
  const bType = typeof b;
  if (aType !== bType) return false;
  if (isBasicType(aType)) return false;
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  for (let i = 0; i < keys.length; i++) {
    const aK = a[keys[i]];
    const bK = b[keys[i]];
    if (aK !== bK) {
      const type = typeof aK;
      if (type !== typeof bK || type !== 'object') return false;
      if (!deepEquals(aK, bK)) return false;
    }
  }
  return true;
}

function isBasicType(type: string) {
  return type === 'number' || type === 'string' || type === 'boolean';
}
