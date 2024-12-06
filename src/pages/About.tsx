import React from "react";
import { motion } from "framer-motion";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Heart, Award, Users } from "lucide-react";

export const About = () => {
  return (
    <ParallaxProvider>
      <div className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21?auto=format&fit=crop&q=80"
              alt="Ice cream making"
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
                Our Story
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-200"
              >
                Crafting joy since 2018
              </motion.p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: Heart,
                  title: "Made with Love",
                  description:
                    "Every scoop is crafted with passion and care using the finest ingredients",
                },
                {
                  icon: Award,
                  title: "Quality First",
                  description:
                    "We never compromise on quality, sourcing only the best ingredients",
                },
                {
                  icon: Users,
                  title: "Community Focus",
                  description:
                    "We're proud to be part of our local community and give back whenever we can",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <value.icon className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-extrabold text-pink-600 mb-6 tracking-tight">
                Our Journey
              </h2>
              <div className="w-32 h-1 mx-auto bg-pink-600 rounded mt-2"></div>
            </motion.div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Image with Motion */}
              <motion.img
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80"
                alt="Ice cream making process"
                className="rounded-lg shadow-2xl object-cover lg:max-h-[500px]"
              />

              {/* Story Text */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <p className="text-gray-600 leading-relaxed text-lg">
                  Growing up on the South Side of Fort Worth, Texas, I learned
                  early on that love and connection are the heartbeats of a
                  community. My childhood was filled with vibrant family
                  gatherings, neighborhood bike races, and one tradition that
                  stood out above the rest: homemade ice cream!
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  I still remember the sights and sounds of my aunt on the front
                  porch, her laughter ringing through the air as she churned the
                  ice cream machine. The rich aroma of fresh strawberries would
                  fill the air, and I’d watch in anticipation as she transformed
                  simple ingredients into something magical.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Every scoop we serve at Mix’D Up Ice Cream Company is inspired
                  by those moments—crafted with love, rooted in tradition, and
                  shared with our community to build a sweeter future together.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
};

            