import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const locations = [
  {
    name: "Downtown Sweet City",
    address: "123 Ice Cream Lane, Sweet City, SC 12345",
    phone: "(555) 123-4567",
    hours: "Mon-Sun: 11AM-10PM",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80"
  },
  {
    name: "Beachside Paradise",
    address: "456 Shore Drive, Sweet City, SC 12346",
    phone: "(555) 234-5678",
    hours: "Mon-Sun: 12PM-11PM",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80"
  },
  {
    name: "Shopping Mall",
    address: "789 Mall Avenue, Sweet City, SC 12347",
    phone: "(555) 345-6789",
    hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
    image: "https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&q=80"
  }
];

export const Locations = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
          <p className="text-gray-600">Find your nearest Mix’D Up Ice Cream shop</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">{location.name}</h2>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-pink-500 mt-1" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-pink-500" />
                    <p className="text-gray-600">{location.phone}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-pink-500 mt-1" />
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};