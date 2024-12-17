import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-8 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">About Us</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your trusted partner in digital solutions. We create amazing experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-purple-500 dark:hover:text-purple-300 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-purple-500 dark:hover:text-purple-300 transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-purple-500 dark:hover:text-purple-300 transition"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Contact Info</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Email: <a href="mailto:problemssolve196@gmail.com" className="hover:text-purple-500 dark:hover:text-purple-300 transition">fareednathani123@gmail.com</a></li>
              <li>Phone: <span className="hover:text-purple-500 dark:hover:text-purple-300 transition">+ 92 333 333 3333</span></li>
              <li>Address: <span className="hover:text-purple-500 dark:hover:text-purple-300 transition">Karachi, Pakistan</span></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} All rights reserved. By{" "}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">Fareed Nathani</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
