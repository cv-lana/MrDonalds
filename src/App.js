import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { NavBar } from './Components/Navbar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyCJXr_kddep1tKclz38qHJNB1TyUAeVVrk",
  authDomain: "mrdonalds-74ea3.firebaseapp.com",
  databaseURL: "https://mrdonalds-74ea3-default-rtdb.firebaseio.com",
  projectId: "mrdonalds-74ea3",
  storageBucket: "mrdonalds-74ea3.appspot.com",
  messagingSenderId: "908266709456",
  appId: "1:908266709456:web:a5e080054c6d91cfa399d5"
};

const firebaseApp = initializeApp(firebaseConfig);

function App() {
  const authFirebase = getAuth(firebaseApp);

  const auth = useAuth(authFirebase);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{ auth, openItem, orders, orderConfirm }}>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu />
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm firebaseDatabase={getDatabase(firebaseApp)} />}
    </Context.Provider>
  );
}

export default App;
