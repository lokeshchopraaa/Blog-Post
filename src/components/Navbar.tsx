import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="font-sen text-2xl font-bold">
            Finsweet
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button className="btn-secondary">Subscribe</button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLinks setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => (
  <>
    <Link to="/" className="hover:text-purple transition-colors">Home</Link>
    <Link to="/blog" className="hover:text-purple transition-colors">Blog</Link>
    <Link to="/about" className="hover:text-purple transition-colors">About Us</Link>
    <Link to="/contact" className="hover:text-purple transition-colors">Contact</Link>
  </>
);

const MobileNavLinks = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }) => (
  <div className="flex flex-col space-y-4 p-4">
    <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-purple transition-colors">Home</Link>
    <Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-purple transition-colors">Blog</Link>
    <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-purple transition-colors">About Us</Link>
    <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-purple transition-colors">Contact</Link>
    <button className="btn-secondary w-full">Subscribe</button>
  </div>
);

export default Navbar;