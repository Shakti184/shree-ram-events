import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. The Fixed Navbar */}
      <Navbar />
      
      {/* 2. The Page Content (grows to fill space) */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* 3. The Footer */}
      <Footer />
    </div>
  );
};

export default Layout;