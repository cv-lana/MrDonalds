import React from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderItemsStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Toppings = styled.div`
  width: 100%;
  font-size: 14px;
  color: #9a9a9a;
`;

export const OrderListItem = ({ order }) => {
  const topping = order.topping.filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

  return (
    <OrderItemsStyled>
      <ItemName>{order.name}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
      <TrashButton />
      {topping && <Toppings>Допы: {topping}</Toppings>}
    </OrderItemsStyled>
  )
};