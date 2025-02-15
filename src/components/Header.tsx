import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Faizan Sayyad
      </h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;