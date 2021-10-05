import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import signImg from '../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgSign = styled.img`
  width: 32px;
  margin-bottom: 3px;
`;

const BtnLogin = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MRDonald’s</H1>
    </Logo>
    <Login>
      <ImgSign src={signImg} alt="icon: sign" />
      <BtnLogin>войти</BtnLogin>
    </Login>
  </NavBarStyled>
);