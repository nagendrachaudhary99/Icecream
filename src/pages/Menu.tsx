import React from "react";
import { motion } from "framer-motion";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const categories = [
  {
    name: "Our Flavors",
    items: [
      {
        name: "Vanilla Bean",
        price: "$4.50",
        description: "Pure Madagascar vanilla ",
        image: "/images/vanilla.jpg",
      },
      {
        name: "Chocolate",
        price: "$4.50",
        description: "Rich Belgian chocolate",
        image: "/images/chocolate.jpg",
      },
      {
        name: "Cookie Crush",
        price: "$4.50",
        description: "Chewy cookie chunks in creamy ice cream",
        image: "/images/cookie-crush.jpg",
      },
    ],
  },
  {
    name: "Seasonal Specials",
    items: [
      {
        name: "Peach Cobbler",
        price: "$5.50",
        description: "Fresh peach flavor with cobbler crumble",
        image: "/images/peach-cobbler.jpg",
      },
      {
        name: "Berry Bliss",
        price: "$5.50",
        description: "A blend of summer berries",
        image: "/images/berry-bliss.jpg",
      },
      {
        name: "Salted Caramel Swirl",
        price: "$5.50",
        description: "House-made caramel with sea salt",
        image: "/images/salted-caramel.jpg",
      },
    ],
  },
];

export const Menu = () => {
  return (
    <ParallaxProvider>
      <div className="bg-gradient-to-b from-yellow-50 via-pink-50 to-white min-h-screen py-20">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Parallax Background Decorations */}
          <Parallax speed={-20}>
            <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-200 rounded-full shadow-lg" />
          </Parallax>
          <Parallax speed={10}>
            <div className="absolute top-20 right-20 w-20 h-20 bg-pink-200 rounded-full shadow-lg" />
          </Parallax>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold text-pink-600 mb-4 tracking-tight ">
              Discover Our Menu
            </h1>
            <Parallax speed={-10}>
              <div className="bg-white py-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Welcome to Mix’D Up Ice Cream Company
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Mix’D Up Ice Cream Company specializes in premium small-batch ice creams, offering a delightful array of innovative flavors alongside our own twists on beloved classics. We prioritize using natural ingredients and strive to collaborate with local partners whenever possible.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Our small-batch approach allows us to create a seasonal menu with regular flavor drops, ensuring a curated and balanced selection for our customers.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our community deserves nothing but the best, and we pour our hearts into delivering exceptional ice cream experiences that bring people together.
                  </p>
                </div>
              </div>
            </Parallax>
          </motion.div>

          {/* Menu Categories */}
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-16"
            >
              <Parallax speed={5}>
                <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center relative">
                  {category.name}
                  <div className="absolute w-40 h-1 bg-pink-600 left-1/2 transform -translate-x-1/2 mt-4"></div>
                </h2>
              </Parallax>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transform transition-transform"
                  >
                    <Parallax speed={2}>
                      <div className="overflow-hidden rounded-md mb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-40 object-cover transform hover:scale-110 transition-transform"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-pink-600 font-semibold text-lg mb-3">
                        {item.price}
                      </p>
                      <p className="text-gray-600">{item.description}</p>
                    </Parallax>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <motion.a
              href="/menu"
              whileHover={{ scale: 1.1 }}
              className="inline-block bg-pink-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-pink-700 transition-transform shadow-lg"
            >
              See Our Most Up-To-Date Flavor List →
            </motion.a>
          </div>

          {/* Footer */}
          <div className="text-center mt-20 border-t-2 border-gray-300 pt-6">
            <Parallax speed={-5}>
              <p className="text-gray-700 font-medium">
                Come Visit Us! Let’s Sling Scoops Together.
              </p>
            </Parallax>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

