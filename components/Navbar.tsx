import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-bold" : "text-text-light dark:text-text-dark font-medium hover:text-primary transition-colors";
  };

  return (
    <div className="w-full bg-background-light dark:bg-background-dark sticky top-0 z-50 border-b border-border-light dark:border-border-dark">
      <div className="flex justify-center px-4 md:px-10 py-3">
        <div className="flex w-full max-w-[1280px] items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <div className="flex size-8 items-center justify-center rounded bg-primary/20 dark:bg-primary/10 text-primary">
              <span className="material-symbols-outlined">yard</span>
            </div>
            <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">Artistic Lawn Design</h2>
          </Link>
          
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex items-center gap-9">
              <Link to="/" className={`text-sm ${isActive('/')}`}>Home</Link>
              <Link to="/services" className={`text-sm ${isActive('/services')}`}>Services</Link>
              <Link to="/portfolio" className={`text-sm ${isActive('/portfolio')}`}>Portfolio</Link>
              <Link to="/testimonials" className={`text-sm ${isActive('/testimonials')}`}>Testimonials</Link>
              <Link to="/contact" className={`text-sm ${isActive('/contact')}`}>Contact</Link>
            </nav>
            <Link to="/contact" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary-hover transition-colors text-[#0d1b12] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Get a Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button 
              className="text-text-light dark:text-text-dark p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark px-4 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm ${isActive('/')}`}>Home</Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm ${isActive('/services')}`}>Services</Link>
          <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm ${isActive('/portfolio')}`}>Portfolio</Link>
          <Link to="/testimonials" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm ${isActive('/testimonials')}`}>Testimonials</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm ${isActive('/contact')}`}>Contact</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-primary-hover transition-colors text-[#0d1b12] text-sm font-bold">
            Get a Quote
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;