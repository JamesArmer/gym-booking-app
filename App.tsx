import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserSignup from './pages/user-signup';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <UserSignup />
      <Footer />
    </>
  );
}

export default App;
