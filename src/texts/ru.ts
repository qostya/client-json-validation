
const texts = {
  main: {
    required() {
      return 'Поле обязательно';
    }
  },
  string: {
    not() {
      return 'Значение должно быть строкой';
    },
    max(value: string, max: number) {
      return `Длина значения ${value} должна быть больше ${max}`;
    },
    min(value: string, min: number) {
      return `Длина значения ${value} должна быть меньше ${min}`;
    }
  },
  number: {
    not() {
      return 'Значение должно быть числом';
    },
    isNaN() {
      return 'Значение должно быть числом';
    },
    min(value: number, min: number) {
      return `Значение ${value} должно быть меньше ${min}`;
    },
    max(value: number, max: number) {
      return `Значение ${value} должно быть больше ${max}`;
    }
  },
  boolean: {
    not() {
      return 'Значение должно быть типа Boolean';
    }
  },
  array: {
    not() {
      return 'Значение должно быть массивом';
    },
    min(value: any[], min: number) {
      return `Длина массива должна быть больше ${min}, а не ${value.length}`;
    },
    max(value: any[], max: number) {
      return `Длина массива должна быть меньше ${max}, а не ${value.length}`;
    }
  },
  object: {
    not() {
      return 'Значение должно быть объектом';
    }
  },
  oneOf: {
    invalid(value: any, items: Array<{ type: string }>) {
      return `Значение должно быть одним из типов: ${items.map(i => i.type).join(', ')}, а не ${JSON.stringify(value)}`;
    }
  },
  enum: {
    invalid(value: any, items: Array<any>) {
      return `Значение должно быть одним из ${JSON.stringify(items)}, а не ${JSON.stringify(value)}`;
    }
  }
};

export default texts;
