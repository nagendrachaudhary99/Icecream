import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, IceCream } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <IceCream className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold">Mix’D Up Ice Cream</span>
            </div>
            <p className="mt-4 text-gray-400">
              Crafting moments of joy with our artisanal ice creams since 2018.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/menu" className="block text-gray-400 hover:text-pink-500">Menu</Link>
              <Link to="/locations" className="block text-gray-400 hover:text-pink-500">Locations</Link>
              <Link to="/about" className="block text-gray-400 hover:text-pink-500">About Us</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-pink-500">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <p>123 Ice Cream Lane</p>
              <p>Sweet City, SC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: hello@meltic.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mix’D Up Ice Cream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};