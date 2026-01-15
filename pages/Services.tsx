import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative flex min-h-[400px] md:min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4" 
             style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWR6vHPet6iES9bX8q_xVziBLM4xAucFtgZrXOkdoR-zAeHQPHCNQjPviedNSdencHpgqmkTXnv8N35lQ8DmsT5pJKdQ8n8gbI0_bIcrImVEkNaTAaEJVuSWNPBqH_PJMGhYHj50e3t-Zw8XcJHnAoeJF3rwLHa57kp2uuYqdAlnMu8OaG11GtXKNEgX47ZFALESln5r1Hqf20Ljit3ZLgB6qr5zdUVUeJdxpQr8zVuCmC4Zh2lguqomcr-T22bmC9mnFzjWKX3jPF")'}}>
          <div className="flex flex-col gap-4 text-center max-w-[800px] z-10">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
              Our Services
            </h1>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <h2 className="text-gray-100 text-base font-medium leading-relaxed md:text-xl">
              Transforming Cape Coral Landscapes, One Cut at a Time. <br className="hidden md:block"/>
              Professional care tailored to the unique flora of Southwest Florida.
            </h2>
          </div>
          <div className="z-10 mt-4">
            <Link to="/contact" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover transition-colors text-[#0d1b12] text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-green-900/20">
              <span className="truncate">Get a Free Estimate</span>
            </Link>
          </div>
        </div>
      </div>

      <main className="w-full flex justify-center py-12 md:py-20 px-4 md:px-10">
        <div className="max-w-[1280px] w-full flex flex-col gap-16 md:gap-24">
          
          {/* Headline Text */}
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="text-text-light dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight mb-4">Comprehensive Lawn Care Solutions</h2>
            <p className="text-secondary-text-light dark:text-secondary-text-dark text-lg">
              We offer a full range of services to keep your property looking pristine year-round. From routine maintenance to complex landscape redesigns.
            </p>
          </div>

          {/* General Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/contact?service=maintenance" className="group flex flex-col gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all shadow-sm hover:shadow-glow cursor-pointer">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0d1b12] transition-colors">
                <span className="material-symbols-outlined text-3xl">grass</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-text-light dark:text-white text-xl font-bold group-hover:text-primary transition-colors">Lawn Maintenance</h3>
                  <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">arrow_forward</span>
                </div>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm leading-relaxed">
                  Weekly mowing, precise edging, and thorough blowing to ensure your property maintains a neat, professional appearance.
                </p>
              </div>
            </Link>

             <Link to="/contact?service=other" className="group flex flex-col gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all shadow-sm hover:shadow-glow cursor-pointer">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0d1b12] transition-colors">
                <span className="material-symbols-outlined text-3xl">park</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-text-light dark:text-white text-xl font-bold group-hover:text-primary transition-colors">Tree Care</h3>
                  <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">arrow_forward</span>
                </div>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm leading-relaxed">
                  Professional trimming, safe removal, and stump grinding. We ensure your trees are healthy and safe for your home.
                </p>
              </div>
            </Link>

            <Link to="/contact?service=commercial" className="group flex flex-col gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all shadow-sm hover:shadow-glow cursor-pointer">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0d1b12] transition-colors">
                <span className="material-symbols-outlined text-3xl">apartment</span>
              </div>
              <div className="flex flex-col gap-2">
                 <div className="flex items-center justify-between">
                  <h3 className="text-text-light dark:text-white text-xl font-bold group-hover:text-primary transition-colors">HOA & Commercial</h3>
                  <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">arrow_forward</span>
                </div>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm leading-relaxed">
                   Reliable maintenance for condo associations and commercial properties. We keep your community areas inviting and well-kept.
                </p>
              </div>
            </Link>

             <Link to="/contact?service=maintenance" className="group flex flex-col gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all shadow-sm hover:shadow-glow cursor-pointer">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0d1b12] transition-colors">
                <span className="material-symbols-outlined text-3xl">water_drop</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-text-light dark:text-white text-xl font-bold group-hover:text-primary transition-colors">Fertilization</h3>
                  <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">arrow_forward</span>
                </div>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm leading-relaxed">
                  Targeted weed control and seasonal feeding programs designed for Florida's climate to promote lush, green growth.
                </p>
              </div>
            </Link>
          </div>

          {/* Specialty Spotlight Feature */}
          <div className="bg-surface-dark rounded-2xl overflow-hidden shadow-xl border border-border-dark">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-6">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
                  <span className="material-symbols-outlined text-lg">content_cut</span>
                  Our Specialty
                </div>
                <h2 className="text-white text-3xl md:text-4xl font-black leading-tight">
                  The Art of Hand Pruning & Sculpting
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our specialty lies in the details. Unlike generic services, we specialize in <strong>hand pruning</strong> and <strong>shrub sculpting</strong> to ensure healthier plants and superior aesthetics.
                </p>
                <div className="space-y-4 mt-2">
                  <div className="flex gap-4">
                    <div className="mt-1 min-w-[24px] text-primary">
                      <span className="material-symbols-outlined">check_circle</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Why Hand Pruning?</h4>
                      <p className="text-gray-400 text-sm mt-1">Hand pruning allows for precise cuts that promote plant health, unlike electric trimmers which can tear leaves and invite disease.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 min-w-[24px] text-primary">
                      <span className="material-symbols-outlined">check_circle</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Artistic Finish</h4>
                      <p className="text-gray-400 text-sm mt-1">We treat your shrubs like living sculptures, creating cleaner lines and shapes that electric hedge trimmers simply cannot achieve.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full min-h-[400px] bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYbe_1Nv9BmpPN0F7wzhyxMJQ2fg6guT67LwI47q7jIFSf-79yCcUVNzxqT1mG-_hVX9uQpQLyTgBF0G9FBJMQ2NC5sMjYRCM6Xeja253nWywhU9dK-jfQflpppYoCrDbziRjb3UErxP3UV09H7To8vBTPFgmncW5Fn6Gbpj0pojwz7YmdpRVq0MPbvGTj3xcfFjwywy21LMswvcqpCXesTClZRrvWFDmiCXZBwNmhv0WD_ZIBNT1fpxvcXzKTIouaIvNUHK8qzNrB")'}}>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="flex flex-col gap-10">
            <div className="text-center mb-4">
              <h2 className="text-text-light dark:text-white tracking-tight text-3xl font-bold">How It Works</h2>
              <p className="text-secondary-text-light dark:text-secondary-text-dark mt-2">Our simple process to get your lawn looking its best.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-[24px] left-[16%] right-[16%] h-[2px] bg-gray-200 dark:bg-border-dark -z-10"></div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="size-12 rounded-full bg-white dark:bg-card-dark border-2 border-primary flex items-center justify-center text-primary z-10 shadow-sm">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <h3 className="text-text-light dark:text-white text-lg font-bold">1. Consultation</h3>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm max-w-[250px]">
                  Contact us for a free estimate. We discuss your needs and assess your property.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="size-12 rounded-full bg-white dark:bg-card-dark border-2 border-primary flex items-center justify-center text-primary z-10 shadow-sm">
                  <span className="material-symbols-outlined">design_services</span>
                </div>
                <h3 className="text-text-light dark:text-white text-lg font-bold">2. Plan & Schedule</h3>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm max-w-[250px]">
                  We propose a customized plan and set a schedule that works best for you.
                </p>
              </div>
               <div className="flex flex-col items-center text-center gap-4">
                <div className="size-12 rounded-full bg-white dark:bg-card-dark border-2 border-primary flex items-center justify-center text-primary z-10 shadow-sm">
                  <span className="material-symbols-outlined">check</span>
                </div>
                <h3 className="text-text-light dark:text-white text-lg font-bold">3. Execution</h3>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm max-w-[250px]">
                  Our team arrives on time and delivers high-quality, professional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

       {/* Footer CTA */}
      <section className="w-full bg-surface-dark border-t border-border-dark py-16 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="text-white text-3xl md:text-5xl font-black">Ready for the best lawn on the block?</h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Contact Artistic Lawn Design today to schedule your consultation and see the difference professional care makes.
          </p>
          <div className="flex gap-4 mt-4 flex-col sm:flex-row">
            <Link to="/contact" className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover transition-colors text-[#0d1b12] text-base font-bold leading-normal tracking-[0.015em]">
              Get a Quote
            </Link>
            <a href="tel:+12396997323" className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent border-2 border-white hover:bg-white/10 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]">
              Call (239) 699-7323
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;