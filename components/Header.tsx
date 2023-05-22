import React from 'react';
import Link from 'next/link';
import GradientButton from './GradientButton';

const Header: React.FC = () => {
  return (
    <header className="sticky z-50 border-b-2 flex items-center justify-between flex-wrap top-0 bg-white">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between xl:mx-16">
        <Link href="/">
          <p className="text-xl font-bold">Dootube</p>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <GradientButton title="Login" link="#" />
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
