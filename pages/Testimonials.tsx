import React from 'react';

const reviews = [
  {
    name: "Mike Thompson",
    date: "1 week ago",
    text: "I got quotes from three different companies in Cape Coral, and these guys had the fairest pricing for the quality of work provided. Highly recommend their bi-weekly service.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjGkzVE0VB7RAZTi8y9nsgVzkhiRzQCJ6cFjILLwvp4_yDWhUrZGp9-WB0Z63zi7JFTwro5OZ70i4WqKIfrb-wdE9P76DyrRxw899k_q7tDXeIqsrzyiSvCey2aVTlkkNoy-gDUoQao5YsOKMu-zbBkOPNCxWlRt53OAHC-5EdtNfLRc4jbpuqr8lyxskqeojtBliFT1xToDPxqh3gZyrC8r56PM9Jhh63xCkxoKCLGJr53m37H8gC874A3aLGonIzPeuZnV6du4nk"
  },
  {
    name: "Linda Baker",
    date: "2 weeks ago",
    text: "Very professional team. They wear clean uniforms, are polite, and always clean up after themselves. They even blew the leaves off my patio furniture!",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUzYuqHBL1Whw6eOyaRwIhIDXbFY_PlcwFpIPgKFZkDMeh5exoo07mqlJuYIIiBncwfup-AM6yMCHUTPYCx_Qn3X604lGyyx88loHRFB5N4kt6eMEKvCuYXU71jozWgqlzHqm2cgY4Op58CPynNO8xGfjm1JFcl9HAZEc6R10i5jRAV3uPKVy_qegstNMhW6vmUH08Dol3iBq_xA6u69RdSMeXlLMp3LewlHpH6LT7a_OIGpG3AImH7OwMlsdYRQqJcG0Fq2uvdoIp"
  },
  {
    name: "Carlos Rodriguez",
    date: "1 month ago",
    text: "They did a fantastic job with our landscape redesign. The plants they chose are perfect for the Florida climate. My yard is the envy of the block now.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqt3aO3RVT9AI1KZFkfXHbM2qP03pfRIxm2s8fwKXjVqvqgDGXTadVg-f7g_fE73axOTpchTMKc6Dn2VLpMnFyXdUOjMZD7RUuawKyKRjI475UxHydwR_eCVUkDSQ_RZ52n-w0taFP261jwA6psY-ZBgbQ6WZXFC3NSaG85ZlEdoPbo2-Q6vf0Y0QOGOyl306Cj19CY9NOWy_zsAOOTkCEjh-W2o8B1DkcIO_43b89jCPKQoeo41ZyldC6ejWx3tCNbLyC2-euI8Ug"
  },
  {
    name: "Emily White",
    date: "1 month ago",
    text: "Dependable and honest. Had a small issue with a sprinkler head and they fixed it immediately without charge. That kind of service is rare these days.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE5KIzX3AXmv7rc0KfuX6cxSYhE1yAXvm6GnkcoArgmpVQ9Aa8iiXtGbDBCwMbE1YsujxGkgR_EVqbMYgPGy5dKcKOWZ95QxANiwYFji2FrQYW17rf0Mj_pHENa-xw_lfBopklwvPyWr2xHJxzHJFEgcyWzie5ARlakLOJcxthHYadWeqgdgymDjGqpIMogEj9_eGRrCn8Tx_VW9jrSxldMZB_qJSHd0yZKRZ3UqYPa5yFRyZCIrhM1_o-0WcuUAp9bJCBDrxTtaJG"
  },
  {
    name: "David King",
    date: "2 months ago",
    text: "Great service overall. Sometimes hard to reach via phone during peak season, but they always respond to emails quickly. Lawn looks great and pricing is solid.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn408SkAJZaCvMtjLA8V-jUMV5U5GsEJjDhxHhTILZ5uVP4_s1tuRjYQTymPWfL_tup1NGSyiTBf2p3abe5RCwW-ji5lBvi4-TNzlngPOCwGafxd-1nRy6WRPfmEveoMjcMxawa_FpNSZwzEcbZeIlmip-C7JkiLWY9pVqkXfwMNeIO27RrlBxXmDP5lBr8Q95lQXTG-4ziAOVawne9nwcdFi5oK4omI4Bl3MYIRr9vHm0MlvzWvtVa_q8qEUpc4VnRAsXpUNvWi57"
  },
  {
    name: "Jennifer Lopez",
    date: "3 months ago",
    text: "We switched to Artistic Lawn Design after our previous gardener retired. Best decision we made. They are thorough and careful around my flower beds.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe7irEbW1OM607O3DVs1v0BefM1_ogCM0BbTe5-LwU26Nw4snBAUNHExnbwJfFTqepd78bppuz27Gup7T0LdcWUuRD5-VW3-ChBkA4IBmR9MAvfsQ3si3c-_2DrWOd_9ojPuB4WGthue6YFvCSka9AcZIfQRuBLsgPI0Py1zEgThEr1dJixWVqVSYNqiH6b4f8X8dpcJHSPNS1-aApzavbYsWUlJXH9IB6uI-lQ8uWMi571Pfzi7aBqJalwYSyKMwECpkkGMKLQrHM"
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
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-hover text-[#0d1b12] text-base font-bold leading-normal tracking-[0.015em] shadow-lg transition-transform hover:scale-105">
                <span>Write a Review</span>
              </button>
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-base font-bold leading-normal tracking-[0.015em] border border-white/40 transition-colors">
                <span>View Services</span>
              </button>
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
                <span className="text-5xl font-black tracking-tight text-text-light dark:text-white">4.9</span>
                <div className="flex flex-col mb-1">
                  <div className="flex text-primary">
                    {[1,2,3,4].map(i => <span key={i} className="material-symbols-outlined text-[24px] fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                    <span className="material-symbols-outlined text-[24px] fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star_half</span>
                  </div>
                  <span className="text-sm text-secondary-text-light dark:text-secondary-text-dark">Based on 124 reviews</span>
                </div>
              </div>
              <div className="w-full h-px bg-border-light dark:bg-border-dark my-2"></div>
              {/* Bars */}
              <div className="grid grid-cols-[20px_1fr_40px] items-center gap-y-3 text-sm">
                {[
                  {star: 5, pct: 92},
                  {star: 4, pct: 5},
                  {star: 3, pct: 2},
                  {star: 2, pct: 1},
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
              "Artistic Lawn Design is incredibly dependable. The crew shows up on time every week like clockwork. My lawn has never looked better! They handle everything from mowing to edging with absolute precision."
            </h4>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-gray-200 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCB9HbtJErpxEVFoWfaXsd7zwXjAgxfjnRQKAecNYVOqLyqzJMgg-gRjqTk2hkG2Aqf8LxtWvzCeLQ24xKvEmT2nfttUa3_h17r18O6xv2rf778DoEn7b4WBcp2TQgiUPMwLVqbFYyggsLYUcQKk8-txOqlXe9Ar3fXdpiwo-iSuJpSD09UshXurOLZwesA2n3OlgkljlcZRFiFZG0B6rt5yshvNIankjjJ575liwq77Tx_dEb_lZbrpgBNEG36yleuGa6o1YefVY0m")'}}></div>
              <div>
                <p className="font-bold text-text-light dark:text-white">Sarah Jenkins</p>
                <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">Cape Coral Resident • Lawn Care</p>
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
                  <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center" style={{backgroundImage: `url("${review.avatar}")`}}></div>
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
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover text-[#0d1b12] text-lg font-bold shadow-lg transition-transform hover:scale-105">
                Get a Free Quote
              </button>
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-card-dark border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800 text-text-light dark:text-white text-lg font-bold transition-colors">
                Call (239) 555-0199
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;