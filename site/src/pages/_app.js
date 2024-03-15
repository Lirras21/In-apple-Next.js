// _app.js
import React from 'react';
import '../app/globals.css';
import Header from '@/component/layout/header/header';
import Footer from '@/component/layout/footer/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
