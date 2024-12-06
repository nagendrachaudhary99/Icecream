import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import IcecreamLogo from '../public/images/icecream2.png'; 

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Creative Title */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src={IcecreamLogo}
              alt="Mix'd Up Logo"
              className="h-24 w-auto"
            />
            {/* Styled Creative Text */}
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 drop-shadow-lg">
            
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-pink-500">Menu</Link>
            <Link to="/locations" className="text-gray-700 hover:text-pink-500">Locations</Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-500">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-500">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/menu" className="block text-black font-bold hover:text-pink-500 shadow-sm">Menu</Link>
            <Link to="/locations" className="block text-black font-bold hover:text-pink-500 shadow-sm">Locations</Link>
            <Link to="/about" className="block text-black font-bold hover:text-pink-500 shadow-sm">About Us</Link>
            <Link to="/contact" className="block text-black font-bold hover:text-pink-500 shadow-sm">Contact</Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
