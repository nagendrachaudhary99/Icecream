import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80"
            alt="Ice cream hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Discover the Magic of Artisanal Ice Cream
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Handcrafted with love, served with joy
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/menu"
                className="inline-flex items-center px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              >
                View Our Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Flavors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Flavors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Vanilla Bean Dream",
              image: "https://images.unsplash.com/photo-1570197571499-166b36435e9f?auto=format&fit=crop&q=80",
              description: "Pure Madagascar vanilla beans infused in creamy perfection"
            },
            {
              name: "Chocolate Symphony",
              image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80",
              description: "Rich Belgian chocolate blended with our signature cream"
            },
            {
              name: "Strawberry Fields",
              image: "https://images.unsplash.com/photo-1556682851-c4580670113a?auto=format&fit=crop&q=80",
              description: "Fresh strawberries mixed with sweet cream"
            }
          ].map((flavor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={flavor.image}
                alt={flavor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{flavor.name}</h3>
                <p className="text-gray-600">{flavor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Since 2018, we've been crafting the finest ice creams using traditional methods
                and the highest quality ingredients. Every scoop tells a story of passion,
                creativity, and dedication to the art of ice cream making.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-pink-500 hover:text-pink-600"
              >
                Learn more about us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21?auto=format&fit=crop&q=80"
                alt="Ice cream making"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};