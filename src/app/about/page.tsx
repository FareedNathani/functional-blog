"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/navbar";

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-300">
      <Navbar title="About" />
      
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-12 bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-700 dark:to-purple-900 text-white shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Discover <span className="text-yellow-300">VIP AI</span>
        </h1>
        <p className="mt-4 text-lg max-w-3xl">
          Revolutionizing industries with advanced artificial intelligence solutions that redefine possibilities.
        </p>
      </header>

      {/* About Content */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold mb-6">
            Shaping the <span className="text-purple-500">Future with AI</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            At VIP AI, we specialize in delivering intelligent solutions that empower businesses to thrive. 
            By combining innovation, automation, and analytics, we help you unlock new opportunities 
            and achieve measurable success.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {/* Feature Card 1 */}
          <div className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <span className="text-purple-500 text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Data-Driven Insights</h3>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Leverage our advanced AI tools to uncover actionable insights, enabling smarter, data-backed decisions.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <span className="text-purple-500 text-3xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Seamless Automation</h3>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Automate repetitive tasks with precision, freeing up time for innovation and growth.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <span className="text-purple-500 text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Tailored AI Solutions</h3>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Customized AI strategies designed to align with your unique business challenges and goals.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-500 dark:bg-purple-700 text-white py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="container mx-auto"
        >
          <h3 className="text-3xl font-bold mb-4">Take the Next Step in Innovation</h3>
          <p className="text-lg mb-6">
            Let us help you integrate AI solutions that deliver exceptional results and a competitive edge.
          </p>
          <a
            href="/contact"
            className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full transition"
          >
            Contact Us Today
          </a>
        </motion.div>
      </section>
    </main>
  );
}
