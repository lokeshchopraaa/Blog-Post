import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-sen text-3xl mb-4">Finsweet</h2>
            <p className="text-gray-medium mb-6">
              Subscribe to our newsletter to get latest updates and news
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 bg-[#4C4C4C] flex-grow"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#4C4C4C]">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© All Rights Reserved 2024</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;