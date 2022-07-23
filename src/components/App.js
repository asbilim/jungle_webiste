import Header from './header';
import '../styles/App.css';
import Main from './main';
import React from 'react';
import Footer from './footer';

function App(){
  
  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App