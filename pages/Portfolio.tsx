import React, { useState } from 'react';

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  location: string;
  image: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: "Garden Design",
    title: "Cape Coral Waterfront Oasis",
    location: "Yacht Club Area",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPS8uwPQvbVJHGgBkpDYO-dmRwlLsbkA50RI2ToFbT0uH-lQ3kJ_5sg5HNsqsti4pwfMIOb0JeMSlVzSjYkQoQUA11v5rDc03zysp5kKWz3fALR9XrdwYCCmX2qAAMHO7O_P-id5Jwql9yJF5cSWvLXrnxAKoByn3TRQ9NhYaf5HWhMPukmtGlHOQmiWR76cPqpRXMN6URNhWRz1FoI5UyUSdu6B1gQtewW8AaN_-waV-_4U907CBm7XZtKxzJCOl2G1I8WvTHeWRO"
  },
  {
    id: 2,
    category: "Shrub Sculpting",
    title: "Geometric Topiary Art",
    location: "Pelican Blvd",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe5fnt7d6cLqL_osAckIX1elzJbSZgCWHRerrd2rKc0CwtFn_KttHgFKaKqoSvcyETspTOicgxmz8SLdNYD8kGsngB964N1Cq4xuQAkV-z06MnSO--X_pPo_iaIfz4bqFq17FspZbmHJOXzS--KFeoeKRxKJIpPmuuNgAJxgoJMAAVwC3i2VIWA3CtpYWO2aMGpou2UfyZ11n0EHBRrW_J1beAWeLfVzOiHZ-0Afdr75Dm5pI0vVK_qg_QewaIbY66niZe7PUQHyWf"
  },
  {
    id: 3,
    category: "Lawn Care",
    title: "Pristine St. Augustine",
    location: "Matlacha",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD27deaTinTD5cd70IimCw5dYJOrMZdQyM_mcXu9Zf0H3Mlxn2Gn1QPMKiTaeTcyTMQaN0Z2DHA0CLrv7smQx-4jKQozH6FiZsoga2iKDfuy5M7_-9vO5nEk5eCZQYMO_43DxowmcJJ35EFG4JB8r8pVxLJAYWC5fEUy-JPLc6SP25xL5TmdE3k-Vy3anXkLriozbMSRD3pdneVuPSljhuKijsAF06jLSEWt22mS1PjsRpvFiTa1ZTKX2te476cwMPfnhJeU63ZW4uQ"
  },
  {
    id: 4,
    category: "Hardscaping",
    title: "Stone Walkway Integration",
    location: "Tarpon Point",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3XS6QdaaVPbzkND3EloIpUZu02gvDarjbgLP7uewlmF6kfi2GzZjB827bSaqBGjWxPdZK8Sn5ScJIlNS5kHzmXL-4yGTfG3JIsONsMfq12nbudfdZbUQoPYdPiLY_VPaJa6Cf9w8vDiy3Ya17oCuwmujWoasmrhyWYkC6YNuJpfSIiIYmillqUJBnuCAfnGJELS3YRNuFURSN-DSF9ApjGBKaBydU_xkIj2uzxuJyv_bohCJ-J1qBsRbZjI-r9gaen6TH5LBlsQdp"
  },
  {
    id: 5,
    category: "Lawn Care",
    title: "Estate Maintenance",
    location: "Sandoval Community",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv_k_LT6JmdEWY6Gz4zr_En4t4zz-6Mr0MejGWRyVBn4gJtCnPcsrMeNdNisUMZAdZ53TAWzkZ3BT7Wd6sNnNogSmajS7Sik0CWQeHrt0i2pGix4hBe3fEdDGL9fuasjxwJMQ-I8uGI_xPHkItw-J4oaXcTVEbEMQEJmwgBe23xWJhDDY7oeAHNgRGlxSxhao0q4_57yO67pLs9zcRSPU7qBTAm-trUKybYupCRFMoRGzHINwAR6IJebMEXWc-Wdxa8Na3UjxsaCUy"
  },
  {
    id: 6,
    category: "Garden Design",
    title: "Native Florida Flora",
    location: "Downtown Cape Coral",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-kqE9tz0xPTmVdLAsx4zOZJ-mybRu5K3ERbdl1FleGJIeAkmgVn30ykhAmM73RHSqzOHy5sYc5KgVrVACowAeljPgyKYh2V_cTYtAE84kynFaxisum2yLP16GHXwYZ-r4wQ7dNvfevYD2T-o8Gn_hivTcPYaKyuwl3XDm5WQ4BTL_DU7YHAdN4qOeg__O9iFd8HYf7YR5KCkrRAmWwrEgIg-Xji9OUBNLZ2uJb0y5ZgZ5qLrGQDPpHTVXW0D8KbEs5sWAhN1Nry0K"
  },
   {
    id: 7,
    category: "Hardscaping",
    title: "Modern Patio Design",
    location: "Marina South",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc_oxUBozIetrhLlMIYKCKpnmGbs7YFV3YnhPk2cs4fqZX5SlOftORk_xS2TSbVmTyUyh-x5DmscBmV6cEmoAmiu4NYmni4dYUA6vEJ_9dfyK0mhm_FjelKmCY1Y1CffTeRj0aOu86aXzPxrlbm8RkkQ9X093hjTPNPRCAkLkcfQMlW3j4ZvpVYNKeltgjCskPTJOQ_te2ejoBWS84m2G5R3P2euQSahfWxQ8uAo52hb9_rfFGbk_V4z1kYbZzUTlIzfLNZnaMOuls"
  },
   {
    id: 8,
    category: "Garden Design",
    title: "Xeriscape Minimalism",
    location: "Cape Harbour",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBke4NmJI3dfMGMWJs-uDR418EvDENlP_B3yDt16uvIS4RxveLcFVS03FEWrUMGfM5-TEoWplf309pKrFGQAgDzWygqdub8gMnEnFSZ3ZA5DfDxQThWc87du7N57e2aaULrfwaoEJnvTpFR3vt_7ZGpbYYfwWqunpfjMOUHR_686rwZkhkrpWo9VQTVYnjFgDJjb3ePravOFfsPW0HB4jT16vT46cdbl8epoeHp9npuWO86QDAjabs1tY2hrDFzjqZWnYiGoRQcreBz"
  }
];

const categories = ["All Projects", "Lawn Care", "Shrub Sculpting", "Hardscaping", "Garden Design", "Lighting"];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredItems = activeCategory === "All Projects" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-8 sm:py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h1 className="text-text-light dark:text-white text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight mb-4">
            Our Masterpieces
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Transforming Cape Coral lawns into living art. Explore our curated portfolio of precision lawn care, shrub sculpting, and sustainable landscape design.
          </p>
        </div>
        <div className="hidden md:block pb-2">
          <span className="material-symbols-outlined text-4xl text-primary/40 animate-bounce">keyboard_arrow_down</span>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar mask-linear">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex shrink-0 items-center justify-center px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm ${
              activeCategory === category
                ? "bg-primary text-[#0d1b12] shadow-md ring-2 ring-transparent ring-offset-2 dark:ring-offset-background-dark"
                : "bg-white dark:bg-card-dark text-text-light dark:text-gray-200 border border-border-light dark:border-border-dark hover:bg-primary/20 dark:hover:bg-primary/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map(item => (
          <div key={item.id} className="group relative break-inside-avoid rounded-xl overflow-hidden bg-card-light dark:bg-card-dark shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
              <div className="flex items-center gap-2 mt-2 text-white/90 text-sm">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span>{item.location}</span>
              </div>
            </div>
            <img src={item.image} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
      
       <div className="mt-12 flex justify-center">
        <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium hover:text-primary transition-colors">
          <span>View More Projects</span>
          <span className="material-symbols-outlined">arrow_downward</span>
        </button>
      </div>
    </main>
  );
};

export default Portfolio;