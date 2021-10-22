import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountInput = styled.input`
  width: 60px;
  margin: 0 15px;
  border-radius: 15px;
  border: 1px solid #000;
  font-size: 20px;
  text-align: center;
`;

const ButtonCount = styled.button`
  background-color: #7cfc00;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #7cfc00;
  &:hover {
    background-color: transparent;
  }
`;

export function CountItem({ count, setCount, onChange }) {

  return (
    <CountWrapper>
      <span>Количество</span>
      <div>
        <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
        <CountInput type="number" min="1" max="100" value={count < 1 ? 1 : count} onChange={onChange} />
        <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
      </div>
    </CountWrapper>
  )
}