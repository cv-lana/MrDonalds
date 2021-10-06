import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  position: relative;
  background-color: #fff;
  width: 600px;
  height: 500px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 43px;
  padding: 20px 76px;
  font-size: 21px;
  background-color: #299B01;
  color: white;
  border: 1px solid #299B01;
  outline: none;
  &:hover {
    background-color: white;
    color: #299B01;
  }
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 37px;
  margin-right: 53px;
  font-family: Pacifico, cursive;
  font-size: 30px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

  function closeModal(e) {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ModalTitle>
          {openItem.name}
          <p>{openItem.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
        </ModalTitle>
        <Button type="button">Добавить</Button>
      </Modal>
    </Overlay>
  )
};