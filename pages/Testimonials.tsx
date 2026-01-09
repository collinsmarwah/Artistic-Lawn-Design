import React from 'react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: "William Fike",
    date: "8 months ago",
    text: "Johnny has been providing with lawn service for my house and my neighbors house for years. I am always completely satisfied with with his crew's work. Whether it is just cutting the grass or trimming trees, he is prompt, affordable, and professional.",
    initial: "W"
  },
  {
    name: "Douglas Toms",
    date: "4 years ago",
    text: "Johnny does excellent work, fair pricing and very dependable. He does our private home and also our condo association. Thanks Johnny",
    initial: "D"
  },
  {
    name: "Darlene Long",
    date: "1 year ago",
    text: "Dependable, fair. Stuck with me when I was getting credit card hacked. Good company",
    initial: "D"
  },
  {
    name: "Cape Coral Resident",
    date: "2 years ago",
    text: "Review rated 5 stars.",
    initial: "C"
  },
  {
    name: "Cape Coral Resident",
    date: "3 years ago",
    text: "Review rated 5 stars.",
    initial: "C"
  },
  {
    name: "Cape Coral Resident",
    date: "3 years ago",
    text: "Review rated 5 stars.",
    initial: "C"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow">
      {/* Hero Section */}
      <section className="w-full">
        <div className="px-4 md:px-10 py-6 md:py-10 max-w-[1280px] mx-auto w-full">
          <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl md:rounded-2xl items-center justify-center p-8 text-center shadow-lg relative overflow-hidden" 
               style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzaf_e05LgNoyL5zdnc3SWSc3rGOsLjyJ7wYjUbJH2m7KiShliCMwL7enh3ezInei-yGjpRe6_BGYJaXc_FGJs0ed0Zx2mDPmN8dekd31rvZ4Lwvl0rEcYwHS366HFDTwAAci1ZaGVtgBOkJYQqkJaRzLcTTOGHbdF44qIbJ8s8kDA2hIVxPVuxIHhDdzsChtfOlp99kx_S29HD88VcoAGziK-_wsOlRTbk4qzYlw-4gOCM-_k2BM29cRUN6WL3qiUcKCurJ7fRfbE")'}}>
            <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                Trusted by Neighbors in Cape Coral
              </h1>
              <h2 className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                See why Artistic Lawn Design is rated 5-stars for dependability, fair pricing, and professionalism.
              </h2>
            </div>
            <div className="relative z-10 mt-2 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-hover text-[#0d1b12] text-base font-bold leading-normal tracking-[0.015em] shadow-lg transition-transform hover:scale-105">
                <span>Write a Review</span>
              </Link>
              <Link to="/services" className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-base font-bold leading-normal tracking-[0.015em] border border-white/40 transition-colors">
                <span>View Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Summary & Filters */}
      <section className="px-4 md:px-10 py-6 max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Rating Breakdown */}
          <div className="w-full lg:w-1/3 bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-border-light dark:border-border-dark">
            <h3 className="text-lg font-bold mb-4">Overall Rating</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-end gap-3">
                <span className="text-5xl font-black tracking-tight text-text-light dark:text-white">5.0</span>
                <div className="flex flex-col mb-1">
                  <div className="flex text-primary">
                    {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[24px] fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                  </div>
                  <span className="text-sm text-secondary-text-light dark:text-secondary-text-dark">Based on 6 reviews</span>
                </div>
              </div>
              <div className="w-full h-px bg-border-light dark:bg-border-dark my-2"></div>
              {/* Bars */}
              <div className="grid grid-cols-[20px_1fr_40px] items-center gap-y-3 text-sm">
                {[
                  {star: 5, pct: 100},
                  {star: 4, pct: 0},
                  {star: 3, pct: 0},
                  {star: 2, pct: 0},
                  {star: 1, pct: 0}
                ].map((row) => (
                  <React.Fragment key={row.star}>
                    <span className="font-medium">{row.star}</span>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-border-light dark:bg-gray-700 mx-3">
                      <div className="h-full rounded-full bg-primary" style={{width: `${row.pct}%`}}></div>
                    </div>
                    <span className="text-secondary-text-light dark:text-secondary-text-dark text-right">{row.pct}%</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Filters & Header */}
          <div className="flex-1 flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-text-light dark:text-white">Client Stories</h3>
              <p className="text-secondary-text-light dark:text-secondary-text-dark">Discover what your neighbors are saying about our services.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-text-light dark:bg-white px-5 shadow-sm transition-transform hover:scale-105">
                <span className="text-white dark:text-black text-sm font-medium">All Reviews</span>
              </button>
              {['Lawn Care', 'Landscaping', 'Maintenance'].map(filter => (
                 <button key={filter} className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-card-dark border border-border-light dark:border-border-dark px-5 hover:border-primary dark:hover:border-primary transition-colors">
                  <span className="text-text-light dark:text-white text-sm font-medium">{filter}</span>
                </button>
              ))}
              <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-card-dark border border-border-light dark:border-border-dark px-5 hover:border-primary dark:hover:border-primary transition-colors ml-auto">
                <span className="material-symbols-outlined text-base">sort</span>
                <span className="text-text-light dark:text-white text-sm font-medium">Newest</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlight */}
      <section className="px-4 md:px-10 py-6 max-w-[1280px] mx-auto w-full">
        <div className="bg-primary/10 dark:bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 text-primary/10">
            <span className="material-symbols-outlined text-[200px]">format_quote</span>
          </div>
          <div className="relative z-10 flex-1">
            <div className="flex gap-1 text-primary mb-4">
               {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
            </div>
            <h4 className="text-xl md:text-2xl font-bold leading-relaxed mb-4 text-text-light dark:text-white">
              "Johnny does excellent work, fair pricing and very dependable. He does our private home and also our condo association. Thanks Johnny"
            </h4>
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 text-primary rounded-full size-12 flex items-center justify-center font-bold text-xl">D</div>
              <div>
                <p className="font-bold text-text-light dark:text-white">Douglas Toms</p>
                <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">Cape Coral Resident • Local Guide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="px-4 md:px-10 py-6 pb-20 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 text-primary rounded-full size-10 flex items-center justify-center font-bold text-base">{review.initial}</div>
                  <div>
                    <p className="text-sm font-bold text-text-light dark:text-white">{review.name}</p>
                    <p className="text-xs text-secondary-text-light dark:text-secondary-text-dark">{review.date}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary/30">verified</span>
              </div>
              <div className="flex gap-0.5 text-primary">
                 {[1,2,3,4,5].map(star => <span key={star} className="material-symbols-outlined text-[20px] fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
              </div>
              <p className="text-text-light dark:text-gray-300 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 text-text-light dark:text-white font-bold border border-border-light dark:border-border-dark bg-white dark:bg-card-dark px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span>Load More Reviews</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </section>

       {/* CTA Footer */}
      <footer className="bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark py-12 md:py-16">
        <div className="px-4 md:px-10 max-w-[1280px] mx-auto text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-black text-text-light dark:text-white">Ready to Transform Your Lawn?</h2>
            <p className="text-lg text-secondary-text-light dark:text-secondary-text-dark">Join hundreds of satisfied neighbors in Cape Coral who trust us with their landscape.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <Link to="/contact" className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover text-[#0d1b12] text-lg font-bold shadow-lg transition-transform hover:scale-105">
                Get a Free Quote
              </Link>
              <a href="tel:+12396997323" className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-card-dark border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800 text-text-light dark:text-white text-lg font-bold transition-colors">
                Call (239) 699-7323
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;