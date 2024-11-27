interface Order {
    id: string;
    userId: string;
    userLocation: string;
    products: string[];
    price: number;
    currency: 'USD' | 'EUR' | 'RUB';
    description?: string;
}

// // 1. Тип старых заказов, в которых могут отсутствовать любые поля
// type LegacyOrder =

// // 2. Тип новых заказов, в которых обязательно должны быть все поля
// type FullOrder =

// // 3. Тип заказа, в котором нет полей userId и userLocation
// type AnonymousOrder =

// // 4. Тип заказа, включающий только price и currency
// type PaymentInfo =

// const legacyOrder: LegacyOrder = {};

// const anonymousOrder: AnonymousOrder = {
//     id: '123',
//     products: ['item1'],
//     price: 50,
//     currency: 'EUR',
// };

// const paymentInfo: PaymentInfo = {
//     price: 100,
//     currency: 'RUB',
// };

// // Должны быть ошибки
// const fullOrder: FullOrder = {
//     id: '123',
//     userId: '456',
//     userLocation: 'NY',
//     products: ['item1', 'item2'],
//     price: 100,
//     currency: 'USD',
//     // description: 'Order description',
// };
