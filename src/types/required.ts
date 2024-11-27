// Нужно доработать типизацию, чтобы обязательным полем было или id или name, но не оба

interface Product {
    id: number;
    name: string;
    price?: number;
    quantity?: number;
    brand?: string;
    category?: string;
}

// const product1: Product = {
//     id: 1,
//     name: 'crossbow',
//     quantity: 1,
//     category: 'Ranged',
// };

// const product2: Product = {
//     id: 1,
//     quantity: 1,
//     category: 'Ranged',
// };

// const product3: Product = {
//     name: 'crossbow',
//     quantity: 1,
//     category: 'Ranged',
// };

// // Должна быть ошибка
// const product4: Product = {
//     quantity: 1,
//     category: 'Ranged',

// };
