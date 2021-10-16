import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
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

const Login = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: transparent;
  border: none;
  outline: none;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Logout = styled.span`
  margin-right: 30px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const Figure = styled.figure`
  margin: 0 30px;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MRDonald’s</H1>
    </Logo>
    {authentication ?
      <User>
        <Figure>
          <img src={signImg} alt={authentication.displayName} />
          <figcaption>{authentication.displayName}</figcaption>
        </Figure>
        <Logout title="выйти" onClick={logOut}>X</Logout>
      </User>
      :
      <Login onClick={logIn}>
        <Figure>
          <img src={signImg} alt="войти" />
          <figcaption>войти</figcaption>
        </Figure>
      </Login>}
  </NavBarStyled>
);