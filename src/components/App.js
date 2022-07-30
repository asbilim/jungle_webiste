import Header from './header';
import '../styles/App.css';
import Main from './main';
import React from 'react';
import Footer from './footer';
import { useState } from 'react';

function App(){

  const [cart,updateCart] = useState(()=>0)
  return (
    <React.Fragment>
      <Header/>
      <Main cart={cart} updateCart={updateCart}/>
      <Footer/>
    </React.Fragment>
  );
}

export default App