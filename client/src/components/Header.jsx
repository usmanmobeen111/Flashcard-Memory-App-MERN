import React from 'react';
import { FaBrain } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white/10 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <FaBrain className="text-white text-3xl mr-3" />
          <h1 className="text-2xl font-bold text-white">Brain Boost</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
