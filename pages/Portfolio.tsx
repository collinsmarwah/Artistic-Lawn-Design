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
    title: "Tropical Paradise Renovation",
    location: "Cape Harbour",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767970646/481993189_1090906752837516_3754865196813272728_n_ewttup.jpg"
  },
  {
    id: 2,
    category: "Lawn Care",
    title: "Estate Maintenance",
    location: "Sandoval",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971054/85046189_2810265645725083_8996269954542075904_n_f76h4n.jpg"
  },
  {
    id: 3,
    category: "Shrub Sculpting",
    title: "Precision Hedge Trimming",
    location: "Pelican Blvd",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971055/84321353_2810265599058421_8085542398786011136_n_rxztpj.jpg"
  },
  {
    id: 4,
    category: "Garden Design",
    title: "Native Flora Installation",
    location: "Matlacha",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971057/83823927_2810265529058428_3578001589165621248_n_q9pfhi.jpg"
  },
  {
    id: 5,
    category: "Hardscaping",
    title: "Custom Stone Walkway",
    location: "Tarpon Point",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971060/86492285_2810265485725099_6219512132401102848_n_ujtgpc.jpg"
  },
  {
    id: 6,
    category: "Lawn Care",
    title: "Lush Green Lawn",
    location: "Yacht Club Area",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971064/481954778_1090906759504182_5487957953504105314_n_nuebdo.jpg"
  },
  {
    id: 7,
    category: "Shrub Sculpting",
    title: "Ornamental Pruning",
    location: "Coral Lakes",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971074/548385625_1237677334827123_8814828653210111932_n_npswel.jpg"
  },
  {
    id: 8,
    category: "Garden Design",
    title: "Backyard Oasis",
    location: "Four Mile Cove",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971109/550373701_1237677371493786_8627624471374581683_n_uar5wm.jpg"
  },
  {
    id: 9,
    category: "Lawn Care",
    title: "Seasonal Cleanup",
    location: "Diplomat",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971131/486170361_1100343645227160_7146043491379100156_n_lsrdfv.jpg"
  },
  {
    id: 10,
    category: "Hardscaping",
    title: "Patio Renovation",
    location: "Marina South",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971136/485383464_1100343605227164_7265756103165678832_n_blelxa.jpg"
  },
  {
    id: 11,
    category: "Shrub Sculpting",
    title: "Detailed Hedge Work",
    location: "Bella Vida",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971149/485971890_1100343598560498_7265301424192927451_n_nl2voj.jpg"
  },
  {
    id: 12,
    category: "Garden Design",
    title: "Waterfront Landscaping",
    location: "Gold Coast",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971182/484072534_1098854998709358_525433394536148887_n_zrqsiz.jpg"
  },
  {
    id: 13,
    category: "Lawn Care",
    title: "Commercial Maintenance",
    location: "Del Prado",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971192/485085811_1098855185376006_790989444625117452_n_xdqdzd.jpg"
  },
  {
    id: 14,
    category: "Hardscaping",
    title: "Retaining Wall & Bed",
    location: "Trafalgar",
    image: "https://res.cloudinary.com/dldtmvsow/image/upload/v1767971213/481993667_1090906756170849_4716643319486575274_n_miedl9.jpg"
  }
];

const categories = ["All Projects", "Lawn Care", "Shrub Sculpting", "Hardscaping", "Garden Design"];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === "All Projects" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  const displayItems = filteredItems.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const hasMore = visibleCount < filteredItems.length;

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
            onClick={() => { setActiveCategory(category); setVisibleCount(6); }}
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
        {displayItems.map(item => (
          <div 
            key={item.id} 
            onClick={() => setSelectedItem(item)}
            className="group relative break-inside-avoid rounded-xl overflow-hidden bg-card-light dark:bg-card-dark shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
              <div className="flex items-center gap-2 mt-2 text-white/90 text-sm">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span>{item.location}</span>
              </div>
              <div className="mt-4 flex items-center text-xs font-bold text-white/80 uppercase tracking-widest gap-1">
                <span className="material-symbols-outlined text-sm">zoom_in</span>
                View Details
              </div>
            </div>
            <img src={item.image} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
      
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={handleLoadMore}
            className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-card-dark"
          >
            <span>View More Projects</span>
            <span className="material-symbols-outlined">arrow_downward</span>
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 animate-in fade-in duration-200" onClick={() => setSelectedItem(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          
          <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-xl overflow-hidden bg-background-dark animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center">
              <img src={selectedItem.image} alt={selectedItem.title} className="max-w-full max-h-[70vh] object-contain" />
            </div>
            <div className="p-6 bg-white dark:bg-card-dark border-t border-border-light dark:border-border-dark flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">{selectedItem.category}</span>
                <h2 className="text-2xl font-black text-text-light dark:text-white mt-1">{selectedItem.title}</h2>
                <div className="flex items-center gap-2 mt-1 text-secondary-text-light dark:text-gray-400">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span>{selectedItem.location}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="px-6 py-2 bg-primary text-[#0d1b12] font-bold rounded-lg hover:bg-primary-hover transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;