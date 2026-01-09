import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-background-dark border-t border-border-light dark:border-border-dark pt-16 pb-8 px-4 md:px-10 mt-auto">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3 text-text-light dark:text-text-dark">
              <div className="flex size-6 items-center justify-center rounded bg-primary/20 dark:bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-sm">yard</span>
              </div>
              <h2 className="text-lg font-bold">Artistic Lawn Design</h2>
            </div>
            <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm">
              Professional landscaping and lawn care services in Cape Coral, FL. Dedicated to making your outdoors beautiful.
            </p>
          </div>
          <div className="flex gap-10 md:gap-20 flex-wrap">
            <div className="flex flex-col gap-4">
              <h3 className="text-text-light dark:text-text-dark font-bold">Services</h3>
              <Link to="/services" className="text-secondary-text-light dark:text-secondary-text-dark text-sm hover:text-primary">Lawn Maintenance</Link>
              <Link to="/services" className="text-secondary-text-light dark:text-secondary-text-dark text-sm hover:text-primary">Landscape Design</Link>
              <Link to="/services" className="text-secondary-text-light dark:text-secondary-text-dark text-sm hover:text-primary">Hardscaping</Link>
              <Link to="/services" className="text-secondary-text-light dark:text-secondary-text-dark text-sm hover:text-primary">Cleanups</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-text-light dark:text-text-dark font-bold">Company</h3>
              <Link to="/contact" className="text-secondary-text-light dark:text-secondary-text-dark text-sm hover:text-primary">About Us</Link>
              <Link to="/client-portal" className="text-secondary-text-light dark:text-secondary-text-dark text-sm hover:text-primary">Client Portal</Link>
              <Link to="/contact" className="text-secondary-text-light dark:text-secondary-text-dark text-sm hover:text-primary">Careers</Link>
              <Link to="/contact" className="text-secondary-text-light dark:text-secondary-text-dark text-sm hover:text-primary">Contact</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-text-light dark:text-text-dark font-bold">Contact</h3>
              <div className="flex items-center gap-2 text-secondary-text-light dark:text-secondary-text-dark text-sm">
                <span className="material-symbols-outlined text-base">location_on</span>
                <span>2119 NE 13th Pl, Cape Coral, FL 33909</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-text-light dark:text-secondary-text-dark text-sm">
                <span className="material-symbols-outlined text-base">phone</span>
                <span>(239) 699-7323</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-text-light dark:text-secondary-text-dark text-sm">
                <span className="material-symbols-outlined text-base">mail</span>
                <span>Aldincorporated@aol.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border-light dark:border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-text-light dark:text-secondary-text-dark text-xs">© 2026 Artistic Lawn Design. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="text-secondary-text-light dark:text-secondary-text-dark hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-secondary-text-light dark:text-secondary-text-dark hover:text-primary" href="#"><span className="material-symbols-outlined">share</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;