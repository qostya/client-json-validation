
const texts = {
  main: {
    required() {
      return 'Field is required';
    }
  },
  string: {
    not() {
      return 'Value is not a string';
    },
    max(value: string, max: number) {
      return `${value} length is greater than ${max}`;
    },
    min(value: string, min: number) {
      return `${value} length is less than ${min}`;
    },
    match(value: string, regexp: RegExp) {
      return `Value ${value} does not match the pattern ${regexp.toString()}`;
    }
  },
  number: {
    not() {
      return 'Value is not a number';
    },
    isNaN() {
      return 'Value must be non-NaN value';
    },
    min(value: number, min: number) {
      return `Value is less than ${min}`;
    },
    max(value: number, max: number) {
      return `Value is greater than ${max}`;
    }
  },
  boolean: {
    not() {
      return 'Value is not a boolean';
    }
  },
  array: {
    not() {
      return 'Value is not an array';
    },
    min(value: any[], min: number) {
      return `Array length must be greater than ${min}`;
    },
    max(value: any[], max: number) {
      return `Array length must be less than ${max}`;
    }
  },
  object: {
    not() {
      return 'Value is not an object';
    }
  },
  oneOf: {
    invalid(value: any, items: Array<{ type: string }>) {
      return `Value must be one of this type: ${items.map(i => i.type).join(', ')}, get ${JSON.stringify(value)} instead`;
    }
  },
  enum: {
    invalid(value: any, items: Array<any>) {
      return `Value must be one of this type: ${JSON.stringify(items)}, get ${JSON.stringify(value)} instead`;
    }
  }
};

export default texts;
