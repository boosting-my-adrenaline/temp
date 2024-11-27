import fastDeepEqual from 'fast-deep-equal';

// Доработать типизацию, чтобы на уровне проверки типов было понятно, что функция принимает аргументы любого типа, но они должны быть одинаковыми

export const deepEqual = (a: any, b: any) => fastDeepEqual(a, b);

deepEqual({ a: 1 }, { a: 1 });
deepEqual('stand', 'stand');
deepEqual(1, 2);

// Должны быть ошибки
deepEqual(1, 't');
deepEqual({ b: 34 }, 1);
deepEqual(1, [1, 2, 3]);
