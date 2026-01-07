import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you shortly.");
  };

  return (
    <div className="flex-1 w-full max-w-[1280px] mx-auto flex flex-col px-4 md:px-10 py-6 md:py-10 gap-8">
      {/* Header Image */}
      <div className="w-full">
        <div className="relative overflow-hidden rounded-xl h-[250px] md:h-[320px] bg-cover bg-center shadow-lg" 
             style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKAGmG87IfSLqYprT3ef79w8wd4whih4RNBxxah2lpOSJij5Qx_9MB2t4AwNns9LXLKx0pelNWm5-M7Koa98BlpTgVN4oNWKHYY3SfFfYqBXvlZ6DYKq3oWS88BiAHKzV0yU3Evkf03IgRpYuCcJIJa9gs4AEbeUFQFeZEx3cAHhyIW6Ee1KMEfIvH4Mt5o7KYnTJw2StFegF95xIvW08MC_YDAJ8QtbE2seivSRFDzpggcF0TE_0uWCXiymwaFB3u3hYtVFTEx4aQ")'}}>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-md">Contact Us</h1>
            <p className="text-gray-200 mt-2 text-lg font-medium drop-shadow-sm">We're here to help with your lawn care needs.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-text-light dark:text-white text-3xl font-bold leading-tight">Get in Touch with Artistic Lawn Design</h2>
            <p className="text-secondary-text-light dark:text-secondary-text-dark text-base leading-relaxed">
              Ready to transform your lawn? Whether you need regular maintenance, sod installation, or a complete landscape redesign, we are here for you. Contact us today for a free quote in Cape Coral.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <a href="tel:+12396997323" className="group flex items-center gap-4 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-[#1a2e22] p-5 hover:border-primary/50 transition-all shadow-sm hover:shadow-md">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#0d1b12] transition-colors">
                <span className="material-symbols-outlined text-[24px]">call</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-secondary-text-light dark:text-secondary-text-dark uppercase tracking-wider">Phone</span>
                <span className="text-text-light dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">+1 239-699-7323</span>
              </div>
            </a>
            
            <a href="mailto:Aldincorporated@aol.com" className="group flex items-center gap-4 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-[#1a2e22] p-5 hover:border-primary/50 transition-all shadow-sm hover:shadow-md">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#0d1b12] transition-colors">
                <span className="material-symbols-outlined text-[24px]">mail</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-secondary-text-light dark:text-secondary-text-dark uppercase tracking-wider">Email</span>
                <span className="text-text-light dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">Aldincorporated@aol.com</span>
              </div>
            </a>
            
            <div className="flex items-start gap-4 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-[#1a2e22] p-5 shadow-sm">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary shrink-0">
                <span className="material-symbols-outlined text-[24px]">location_on</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-secondary-text-light dark:text-secondary-text-dark uppercase tracking-wider">Address</span>
                <span className="text-text-light dark:text-white text-lg font-bold leading-tight">2119 NE 13th Pl,<br/>Cape Coral, FL 33909</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center pt-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-green-800 dark:text-green-300 text-sm font-medium">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-300 text-sm font-medium">
              <span className="material-symbols-outlined text-[18px]">thumb_up</span>
              Satisfaction Guaranteed
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white dark:bg-[#1a2e22] rounded-xl p-6 md:p-8 border border-border-light dark:border-border-dark shadow-sm">
            <h3 className="text-xl font-bold text-text-light dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">edit_note</span>
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="flex flex-col flex-1">
                  <span className="text-text-light dark:text-white text-sm font-medium mb-2">Name</span>
                  <input className="form-input w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark h-12 px-4 focus:border-primary focus:ring-primary dark:focus:border-primary text-text-light dark:text-white placeholder:text-gray-400" placeholder="Your Full Name" type="text" />
                </label>
                <label className="flex flex-col flex-1">
                  <span className="text-text-light dark:text-white text-sm font-medium mb-2">Email Address</span>
                  <input className="form-input w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark h-12 px-4 focus:border-primary focus:ring-primary dark:focus:border-primary text-text-light dark:text-white placeholder:text-gray-400" placeholder="name@example.com" type="email" />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="flex flex-col flex-1">
                  <span className="text-text-light dark:text-white text-sm font-medium mb-2">Phone Number</span>
                  <input className="form-input w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark h-12 px-4 focus:border-primary focus:ring-primary dark:focus:border-primary text-text-light dark:text-white placeholder:text-gray-400" placeholder="(239) 000-0000" type="tel" />
                </label>
                <label className="flex flex-col flex-1">
                  <span className="text-text-light dark:text-white text-sm font-medium mb-2">Service Needed</span>
                  <select className="form-select w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark h-12 px-4 focus:border-primary focus:ring-primary dark:focus:border-primary text-text-light dark:text-white">
                    <option disabled selected value="">Select a service</option>
                    <option value="maintenance">Lawn Maintenance</option>
                    <option value="design">Landscape Design</option>
                    <option value="sod">Sod Installation</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </label>
              </div>
              <label className="flex flex-col w-full">
                <span className="text-text-light dark:text-white text-sm font-medium mb-2">How can we help?</span>
                <textarea className="form-textarea w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark min-h-[120px] p-4 focus:border-primary focus:ring-primary dark:focus:border-primary text-text-light dark:text-white placeholder:text-gray-400 resize-y" placeholder="Tell us about your project..."></textarea>
              </label>
              <button type="submit" className="mt-2 flex w-full md:w-auto self-start items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-[#0d1b12] font-bold hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all transform active:scale-95">
                Send Message
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </form>
          </div>

          <div className="w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm relative group">
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center bg-cover bg-center" 
                 style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhmOVo_IfMjYF-kf7tE7Hc8_RlCIet5KB577ozNzjxyAvhrlFpzI77eg74kRIUGfdpistclGDSBUqDU9qEbbQ_1qJ3oJT6m1gKwbQublGU8f8aLeARTzNvKYo91nOysWcTChdhfSIzjWxyuZxxJ1T7H7b1c-NXfteo6l2fxFhTtANOcPivYMvBrmL754Q0FT71uIUEBkL6Gg7ZILC-9yxJLiqPqv2xaxNRofXtyu-JGfnPZI6V4CyTaR33Ec1M1AdF33pL4uUAjnOO")'}}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="material-symbols-outlined text-red-600 text-5xl drop-shadow-md">location_on</span>
                <div className="bg-white px-3 py-1 rounded shadow-md mt-1 text-xs font-bold text-[#0d1b12]">Artistic Lawn Design</div>
              </div>
            </div>
            <a href="https://maps.google.com/?q=2119+NE+13th+Pl,+Cape+Coral,+FL+33909" target="_blank" rel="noreferrer" className="absolute bottom-4 right-4 bg-white dark:bg-background-dark text-text-light dark:text-white text-xs font-bold px-3 py-2 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-1">
              Open in Google Maps
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;