
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
      return `Длина значения ${value} должна быть меньше ${max}`;
    },
    min(value: string, min: number) {
      return `Длина значения ${value} должна быть больше ${min}`;
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
      return `Значение должно быть больше ${min}, а не ${value} `;
    },
    max(value: number, max: number) {
      return `Значение должно быть меньше ${max}, а не ${value} `;
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
      return `Длина массива должна быть больше ${min}`;
    },
    max(value: any[], max: number) {
      return `Длина массива должна быть меньше ${max}`;
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
