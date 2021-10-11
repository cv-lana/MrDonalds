export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = total => total.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
