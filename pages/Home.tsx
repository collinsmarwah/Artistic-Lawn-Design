import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full flex justify-center py-5 px-4 md:px-10">
        <div className="w-full max-w-[1280px]">
          <div className="@container">
            <div className="relative flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 md:p-16 overflow-hidden shadow-2xl" 
                 style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://res.cloudinary.com/dldtmvsow/image/upload/v1767970646/481993189_1090906752837516_3754865196813272728_n_ewttup.jpg")'}}>
              <div className="flex flex-col gap-4 text-center max-w-[800px] z-10">
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                  Transforming Cape Coral Lawns into Masterpieces
                </h1>
                <h2 className="text-gray-100 text-lg md:text-xl font-medium leading-normal max-w-[600px] mx-auto">
                  Professional, dependable landscape design and lawn care at fair prices. Experience the Artistic difference.
                </h2>
              </div>
              <Link to="/contact" className="z-10 mt-4 flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover transition-transform hover:scale-105 text-[#0d1b12] text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-green-900/20">
                <span className="truncate">Get a Free Estimate</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full flex justify-center py-12 md:py-20 px-4 md:px-10 bg-white dark:bg-[#152a1d]">
        <div className="w-full max-w-[1280px] flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-primary font-bold text-sm uppercase tracking-wider">Our Services</h2>
            <h1 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-black leading-tight tracking-[-0.02em]">
              Comprehensive Care for Your Outdoors
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services" className="group flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="size-12 rounded-lg bg-primary/20 dark:bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">content_cut</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-text-light dark:text-text-dark text-xl font-bold group-hover:text-primary transition-colors">Lawn Maintenance</h2>
                  <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm leading-relaxed">
                  Keep your grass green and healthy with our regular mowing, edging, and seasonal treatment plans tailored for Florida weather.
                </p>
              </div>
            </Link>
            <Link to="/services" className="group flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="size-12 rounded-lg bg-primary/20 dark:bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">yard</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-text-light dark:text-text-dark text-xl font-bold group-hover:text-primary transition-colors">Landscape Design</h2>
                  <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm leading-relaxed">
                  From concept to reality, we create custom garden plans, select the right native plants, and renovate tired yards.
                </p>
              </div>
            </Link>
            <Link to="/services" className="group flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="size-12 rounded-lg bg-primary/20 dark:bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">deck</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-text-light dark:text-text-dark text-xl font-bold group-hover:text-primary transition-colors">Hardscaping</h2>
                  <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm leading-relaxed">
                  Enhance functionality with professionally installed patios, walkways, pavers, and retaining walls that last.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="w-full flex justify-center py-12 md:py-20 px-4 md:px-10">
        <div className="w-full max-w-[1280px]">
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="text-primary font-bold text-sm uppercase tracking-wider">Why Choose Us?</h2>
                <h1 className="text-text-light dark:text-text-dark text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Dependable Service,<br/>Transparent Pricing
                </h1>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-lg leading-relaxed mt-2">
                  We are committed to being the most dependable team in Cape Coral. Our clients love our straightforward approach and attention to detail.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <h3 className="font-bold text-text-light dark:text-text-dark">Local Expertise</h3>
                    <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">Deep knowledge of Florida's soil, climate, and native flora.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">payments</span>
                  <div>
                    <h3 className="font-bold text-text-light dark:text-text-dark">Fair Pricing</h3>
                    <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">No hidden fees. You get exactly what we quote.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">schedule</span>
                  <div>
                    <h3 className="font-bold text-text-light dark:text-text-dark">Reliable Scheduling</h3>
                    <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">We show up when we say we will. Respecting your time is our priority.</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="flex w-fit mt-4 items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-text-light dark:bg-white text-white dark:text-[#0d1b12] text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                <span className="truncate">Learn More About Us</span>
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQyLDcz7EfCAHdAmfKMMfY_ddFQqWTDKiK_2ZwgEsDRQyoutY50uWhenM6l0YMge7TrgHdwpq9CdQWaHLkeXzQQMvCO2EghhKcoRULRe2mxKES80Hc_TUTzEhBPP-RKT0vH6kaGEm4AcE-HHl3YLNJvxua6JyEHLucCFnOpaGpIksVyShHk5t-a_iRHsLYZn12GTjc3eGema71sowyjlOoAPBNiN5799yUKm7fQRfcpXJhLSc5ehIVlPWzqLzLSUIT-QYDYa39Nfz6")'}}>
                </div>
                <div className="absolute bottom-6 left-6 bg-white dark:bg-background-dark p-4 rounded-xl shadow-lg flex items-center gap-3 max-w-[240px]">
                  <div className="bg-primary/20 p-2 rounded-full text-primary">
                    <span className="material-symbols-outlined">reviews</span>
                  </div>
                  <div>
                    <p className="text-xs text-secondary-text-light dark:text-secondary-text-dark font-medium">Rated 5.0 Stars</p>
                    <p className="text-sm font-bold text-text-light dark:text-text-dark">By Cape Coral Locals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="w-full flex justify-center py-16 px-4 md:px-10 bg-white dark:bg-[#152a1d]">
        <div className="w-full max-w-[1280px]">
          <h2 className="text-center text-3xl font-bold text-text-light dark:text-text-dark mb-12">What Our Neighbors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 p-6 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 text-primary rounded-full size-12 flex items-center justify-center font-bold text-xl">W</div>
                <div className="flex-1">
                  <p className="text-text-light dark:text-text-dark text-base font-bold">William Fike</p>
                  <p className="text-secondary-text-light dark:text-secondary-text-dark text-xs">8 months ago</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-primary">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined fill-current text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
              </div>
              <p className="text-text-light dark:text-text-dark text-sm leading-relaxed">"Johnny has been providing with lawn service for my house and my neighbors house for years. I am always completely satisfied with with his crew's work. Whether it is just cutting the grass or trimming trees, he is prompt, affordable, and professional."</p>
            </div>
            
             <div className="flex flex-col gap-4 p-6 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
              <div className="flex items-center gap-3">
                 <div className="bg-primary/20 text-primary rounded-full size-12 flex items-center justify-center font-bold text-xl">D</div>
                <div className="flex-1">
                  <p className="text-text-light dark:text-text-dark text-base font-bold">Douglas Toms</p>
                  <p className="text-secondary-text-light dark:text-secondary-text-dark text-xs">4 years ago</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-primary">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined fill-current text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
              </div>
              <p className="text-text-light dark:text-text-dark text-sm leading-relaxed">"Johnny does excellent work, fair pricing and very dependable. He does our private home and also our condo association. Thanks Johnny"</p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
              <div className="flex items-center gap-3">
                 <div className="bg-primary/20 text-primary rounded-full size-12 flex items-center justify-center font-bold text-xl">D</div>
                <div className="flex-1">
                  <p className="text-text-light dark:text-text-dark text-base font-bold">Darlene Long</p>
                  <p className="text-secondary-text-light dark:text-secondary-text-dark text-xs">1 year ago</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-primary">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined fill-current text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
              </div>
              <p className="text-text-light dark:text-text-dark text-sm leading-relaxed">"Dependable, fair. Stuck with me when I was getting credit card hacked. Good company"</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full flex justify-center py-10 px-4 md:px-10">
        <div className="w-full max-w-[1280px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl bg-primary p-8 md:p-12 shadow-xl shadow-green-500/20">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h2 className="text-[#0d1b12] text-3xl md:text-4xl font-black tracking-tight">Ready for a Lawn You'll Love?</h2>
              <p className="text-[#0d1b12]/80 text-lg font-medium">Contact Artistic Lawn Design today to schedule your consultation.</p>
            </div>
            <Link to="/contact" className="whitespace-nowrap rounded-lg bg-[#0d1b12] px-8 py-4 text-white font-bold text-lg hover:bg-black transition-colors shadow-lg">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;