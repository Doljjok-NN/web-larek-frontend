// Товар
interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
}

// Элемент корзины
interface CartItem {
    product: Product;
    quantity: number;
}

// Данные заказа
interface OrderData {
    paymentMethod: 'card' | 'cash';
    deliveryAddress: string;
    email: string;
    phone: string;
}
