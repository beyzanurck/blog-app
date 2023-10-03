import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function Layout({ children }) {
  return (
    <div>
        <Header />
        <div className="content">
            {children}
        </div>
        <Footer />
    </div>
  )
}
