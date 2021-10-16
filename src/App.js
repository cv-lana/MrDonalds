import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { NavBar } from './Components/Navbar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

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

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
