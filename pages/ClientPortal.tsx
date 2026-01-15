import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type View = 'overview' | 'billing' | 'schedule' | 'messages';

const ClientPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentView, setCurrentView] = useState<View>('overview');
  const [balance, setBalance] = useState(145.00);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1500);
  };

  const handlePayment = () => {
      if(confirm("Confirm payment of $" + balance.toFixed(2) + "?")) {
          setBalance(0);
          alert("Payment processed successfully!");
      }
  };

  const handleFeatureNotReady = (feature: string) => {
      alert(`The '${feature}' feature is simulated for this prototype.`);
  };

  const SidebarItem = ({ view, icon, label }: { view: View; icon: string; label: string }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
        currentView === view
          ? 'bg-primary text-[#0d1b12] font-bold shadow-md shadow-primary/20'
          : 'text-secondary-text-light dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-card-dark hover:text-text-light dark:hover:text-white'
      }`}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span>{label}</span>
    </button>
  );

  if (isLoggedIn) {
    return (
      <div className="flex-1 w-full max-w-[1280px] mx-auto p-4 md:p-10 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 flex flex-col gap-2 shrink-0">
           <div className="mb-6 px-4">
            <h1 className="text-xl font-black text-text-light dark:text-white">My Account</h1>
            <p className="text-xs text-secondary-text-light dark:text-gray-400 font-medium">#88291 • John Doe</p>
           </div>
           
           <nav className="flex flex-col gap-1">
             <SidebarItem view="overview" icon="dashboard" label="Overview" />
             <SidebarItem view="billing" icon="payments" label="Billing & Payments" />
             <SidebarItem view="schedule" icon="calendar_month" label="Service Schedule" />
             <SidebarItem view="messages" icon="mail" label="Messages" />
           </nav>

           <div className="mt-auto pt-8 px-4">
             <button 
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center gap-2 text-sm font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors bg-red-50 dark:bg-red-900/10 px-4 py-2 rounded-lg w-full justify-center border border-transparent hover:border-red-200 dark:hover:border-red-800"
              >
                <span className="material-symbols-outlined">logout</span>
                Sign Out
              </button>
           </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-white dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark p-6 md:p-8 min-h-[600px] shadow-sm">
            
            {/* OVERVIEW VIEW */}
            {currentView === 'overview' && (
                <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="flex justify-between items-center border-b border-border-light dark:border-border-dark pb-6">
                        <h2 className="text-2xl font-bold text-text-light dark:text-white">Dashboard Overview</h2>
                        <span className="text-sm font-medium text-secondary-text-light dark:text-gray-400 bg-gray-100 dark:bg-card-dark px-3 py-1 rounded-full">{new Date().toLocaleDateString()}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Balance Widget */}
                        <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:border-primary/30 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <span className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 material-symbols-outlined group-hover:scale-110 transition-transform">attach_money</span>
                                {balance > 0 && <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold px-2 py-1 rounded border border-red-200 dark:border-red-800">DUE</span>}
                            </div>
                            <p className="text-secondary-text-light dark:text-gray-400 text-sm font-medium">Current Balance</p>
                            <h3 className="text-3xl font-black text-text-light dark:text-white mt-1 tracking-tight">${balance.toFixed(2)}</h3>
                            <button onClick={() => setCurrentView('billing')} className="text-primary text-sm font-bold mt-4 hover:underline flex items-center gap-1">View Details <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                        </div>

                         {/* Schedule Widget */}
                         <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:border-primary/30 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <span className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 material-symbols-outlined group-hover:scale-110 transition-transform">event</span>
                            </div>
                            <p className="text-secondary-text-light dark:text-gray-400 text-sm font-medium">Next Service</p>
                            <h3 className="text-lg font-bold text-text-light dark:text-white mt-1">Lawn Mowing</h3>
                            <p className="text-sm text-text-light dark:text-gray-300 mt-1">Fri, Oct 24 • 8am</p>
                            <button onClick={() => setCurrentView('schedule')} className="text-primary text-sm font-bold mt-4 hover:underline flex items-center gap-1">View Calendar <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                        </div>

                        {/* Messages Widget */}
                         <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:border-primary/30 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <span className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 material-symbols-outlined group-hover:scale-110 transition-transform">mail</span>
                                <span className="bg-primary text-[#0d1b12] text-xs font-bold px-2 py-1 rounded-full shadow-sm">1 New</span>
                            </div>
                            <p className="text-secondary-text-light dark:text-gray-400 text-sm font-medium">Unread Messages</p>
                            <h3 className="text-lg font-bold text-text-light dark:text-white mt-1 truncate">Service Complete</h3>
                             <p className="text-sm text-secondary-text-light dark:text-gray-500 truncate mt-1">Your fertilizer treatment...</p>
                            <button onClick={() => setCurrentView('messages')} className="text-primary text-sm font-bold mt-4 hover:underline flex items-center gap-1">Open Inbox <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-text-light dark:text-white mb-4 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">history</span>
                          Recent Activity
                        </h3>
                        <div className="divide-y divide-border-light dark:divide-border-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden bg-card-light dark:bg-card-dark">
                             {[
                                { date: 'Oct 10', title: 'Lawn Mowing & Edging', amount: '$45.00', status: 'Paid' },
                                { date: 'Sep 26', title: 'Lawn Mowing & Edging', amount: '$45.00', status: 'Paid' },
                                { date: 'Sep 15', title: 'Seasonal Fertilization', amount: '$85.00', status: 'Paid' },
                             ].map((item, i) => (
                                 <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                     <div className="flex items-center gap-4">
                                         <div className="size-10 bg-gray-100 dark:bg-background-dark rounded-full flex items-center justify-center text-gray-500 border border-border-light dark:border-border-dark">
                                             <span className="material-symbols-outlined text-lg">check_circle</span>
                                         </div>
                                         <div>
                                             <p className="font-bold text-sm text-text-light dark:text-white">{item.title}</p>
                                             <p className="text-xs text-secondary-text-light dark:text-gray-400 font-medium">{item.date}</p>
                                         </div>
                                     </div>
                                     <div className="text-right">
                                         <p className="font-bold text-sm text-text-light dark:text-white">{item.amount}</p>
                                         <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                                            {item.status}
                                         </span>
                                     </div>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>
            )}

            {/* BILLING VIEW */}
            {currentView === 'billing' && (
                <div className="flex flex-col gap-8 h-full animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="border-b border-border-light dark:border-border-dark pb-6">
                      <h2 className="text-2xl font-bold text-text-light dark:text-white">Billing & Payments</h2>
                      <p className="text-secondary-text-light dark:text-gray-400 text-sm mt-1">Manage your invoices and payment methods.</p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 p-6 rounded-xl bg-gradient-to-br from-primary to-green-500 text-[#0d1b12] shadow-lg shadow-green-500/20 relative overflow-hidden">
                            <div className="absolute -right-6 -top-6 size-32 bg-white/20 rounded-full blur-2xl"></div>
                            <p className="font-bold opacity-80 uppercase tracking-wider text-xs">Total Balance Due</p>
                            <h3 className="text-4xl font-black mt-2 tracking-tight">${balance.toFixed(2)}</h3>
                            <div className="mt-6 flex flex-col gap-2 relative z-10">
                                <div className="flex justify-between text-sm font-bold opacity-80 border-b border-black/10 pb-2">
                                  <span>Due Date</span>
                                  <span>Oct 30, 2025</span>
                                </div>
                                <div className="flex justify-between text-sm font-bold opacity-80 pt-1">
                                  <span>Status</span>
                                  <span>{balance > 0 ? 'Pending' : 'Cleared'}</span>
                                </div>
                            </div>
                            
                            {balance > 0 ? (
                                <button onClick={handlePayment} className="mt-6 w-full py-3.5 bg-[#0d1b12] text-white font-bold rounded-lg hover:bg-black hover:scale-[1.02] transition-all shadow-lg">
                                    Pay Now
                                </button>
                            ) : (
                                <button disabled className="mt-6 w-full py-3.5 bg-[#0d1b12]/20 text-[#0d1b12] font-bold rounded-lg cursor-default border border-black/5">
                                    Paid in Full
                                </button>
                            )}
                        </div>
                        <div className="flex-1 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                             <h4 className="font-bold mb-4 flex items-center gap-2 text-text-light dark:text-white">
                                <span className="material-symbols-outlined text-primary">credit_card</span>
                                Payment Method
                             </h4>
                             <div className="flex items-center justify-between p-4 border border-border-light dark:border-border-dark rounded-xl mb-4 bg-background-light dark:bg-background-dark">
                                 <div className="flex items-center gap-3">
                                     <div className="bg-white dark:bg-card-dark p-2 rounded border border-border-light dark:border-border-dark">
                                       <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">credit_card</span>
                                     </div>
                                     <div className="text-sm">
                                         <p className="font-bold text-text-light dark:text-white">Visa ending in 4242</p>
                                         <p className="text-xs text-secondary-text-light dark:text-gray-400">Expires 12/28</p>
                                     </div>
                                 </div>
                                 <button onClick={() => handleFeatureNotReady('Edit Card')} className="text-primary text-xs font-bold hover:underline uppercase tracking-wide">Edit</button>
                             </div>
                             <button onClick={() => handleFeatureNotReady('Add Payment Method')} className="w-full py-2.5 border-2 border-dashed border-border-light dark:border-border-dark rounded-xl text-sm font-bold text-secondary-text-light dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:border-primary/50 dark:hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center gap-2">
                                 <span className="material-symbols-outlined text-lg">add_circle</span>
                                 Add New Method
                             </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-text-light dark:text-white mb-4">Invoice History</h3>
                        <div className="border border-border-light dark:border-border-dark rounded-xl overflow-hidden bg-card-light dark:bg-card-dark">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 dark:bg-background-dark text-secondary-text-light dark:text-gray-400 font-bold uppercase text-xs tracking-wider">
                                    <tr>
                                        <th className="p-4">Invoice #</th>
                                        <th className="p-4">Date</th>
                                        <th className="p-4">Amount</th>
                                        <th className="p-4">Status</th>
                                        <th className="p-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                    {[
                                        { id: 'INV-2024-001', date: 'Oct 01, 2025', amount: '$145.00', status: 'Unpaid' },
                                        { id: 'INV-2024-002', date: 'Sep 01, 2025', amount: '$130.00', status: 'Paid' },
                                        { id: 'INV-2024-003', date: 'Aug 01, 2025', amount: '$130.00', status: 'Paid' },
                                    ].map((inv) => (
                                        <tr key={inv.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                            <td className="p-4 font-bold text-text-light dark:text-white">{inv.id}</td>
                                            <td className="p-4 text-secondary-text-light dark:text-gray-400 font-medium">{inv.date}</td>
                                            <td className="p-4 text-text-light dark:text-white">{inv.amount}</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded text-xs font-bold border ${
                                                    inv.status === 'Paid' 
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800' 
                                                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
                                                }`}>
                                                    {inv.status}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <button onClick={() => handleFeatureNotReady('Download Invoice')} className="text-secondary-text-light dark:text-gray-400 hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined">download</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* SCHEDULE VIEW */}
            {currentView === 'schedule' && (
                <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                     <div className="flex justify-between items-center border-b border-border-light dark:border-border-dark pb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-text-light dark:text-white">Service Schedule</h2>
                            <p className="text-secondary-text-light dark:text-gray-400 text-sm mt-1">Upcoming visits and service history.</p>
                        </div>
                        <button onClick={() => handleFeatureNotReady('Request Change')} className="bg-primary text-[#0d1b12] px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-hover shadow-sm transition-transform active:scale-95">
                            Request Change
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-card-dark dark:to-surface-dark p-8 rounded-2xl border border-blue-100 dark:border-border-dark flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                         <div className="size-20 bg-white dark:bg-background-dark rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-border-dark relative z-10 group-hover:scale-110 transition-transform duration-300">
                             <span className="material-symbols-outlined text-4xl">event_upcoming</span>
                         </div>
                         <div className="relative z-10">
                             <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full inline-block">Next Service</p>
                             <h3 className="text-4xl font-black text-text-light dark:text-white tracking-tight">Friday, Oct 24</h3>
                             <div className="flex items-center justify-center gap-2 mt-3 text-secondary-text-light dark:text-gray-400 font-medium">
                                <span className="material-symbols-outlined text-lg">schedule</span>
                                <span>Arrival window: 8:00 AM - 11:00 AM</span>
                             </div>
                         </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-text-light dark:text-white mb-4">Upcoming Visits</h3>
                         <div className="space-y-4">
                             {[
                                 { day: '24', month: 'Oct', service: 'Regular Maintenance', notes: 'Mowing, Edging, Blowing' },
                                 { day: '07', month: 'Nov', service: 'Regular Maintenance', notes: 'Mowing, Edging, Blowing' },
                                 { day: '21', month: 'Nov', service: 'Regular Maintenance', notes: 'Mowing, Edging, Blowing' },
                                 { day: '05', month: 'Dec', service: 'Quarterly Fertilization', notes: 'Granular application' },
                             ].map((visit, i) => (
                                 <div key={i} className="group flex items-center gap-5 p-5 border border-border-light dark:border-border-dark rounded-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer bg-card-light dark:bg-card-dark shadow-sm hover:shadow-md">
                                     <div className="flex flex-col items-center justify-center w-16 h-16 bg-background-light dark:bg-background-dark rounded-xl shrink-0 border border-border-light dark:border-border-dark group-hover:border-primary/30 transition-colors">
                                         <span className="text-[10px] font-bold text-secondary-text-light dark:text-gray-500 uppercase tracking-widest">{visit.month}</span>
                                         <span className="text-2xl font-black text-text-light dark:text-white">{visit.day}</span>
                                     </div>
                                     <div className="flex-1">
                                         <h4 className="font-bold text-text-light dark:text-white text-lg group-hover:text-primary transition-colors">{visit.service}</h4>
                                         <p className="text-sm text-secondary-text-light dark:text-gray-400 mt-0.5">{visit.notes}</p>
                                     </div>
                                     <div className="size-8 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-[#0d1b12] transition-colors">
                                        <span className="material-symbols-outlined text-xl">chevron_right</span>
                                     </div>
                                 </div>
                             ))}
                         </div>
                    </div>
                </div>
            )}

             {/* MESSAGES VIEW */}
            {currentView === 'messages' && (
                <div className="flex flex-col h-full gap-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="flex justify-between items-center border-b border-border-light dark:border-border-dark pb-6">
                        <h2 className="text-2xl font-bold text-text-light dark:text-white">Messages</h2>
                         <button onClick={() => handleFeatureNotReady('Compose Message')} className="bg-primary text-[#0d1b12] px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-hover shadow-sm transition-transform active:scale-95 flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">edit_square</span>
                            Compose
                        </button>
                    </div>
                    
                    <div className="flex-1 flex flex-col border border-border-light dark:border-border-dark rounded-xl overflow-hidden bg-card-light dark:bg-card-dark shadow-sm">
                        {/* Message Item */}
                        <div className="p-5 border-b border-border-light dark:border-border-dark bg-primary/5 dark:bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-text-light dark:text-white text-base">Service Complete</h4>
                                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">2 hours ago</span>
                            </div>
                            <p className="text-sm text-secondary-text-light dark:text-gray-300 leading-relaxed line-clamp-2">
                                Hello John, we just finished the fertilization treatment for your lawn. Please water within 24 hours for best results. Let us know if you have any questions!
                            </p>
                        </div>

                         {/* Message Item */}
                         <div className="p-5 border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-text-light dark:text-white text-base">Schedule Update</h4>
                                <span className="text-xs text-secondary-text-light dark:text-gray-500">Oct 15</span>
                            </div>
                            <p className="text-sm text-secondary-text-light dark:text-gray-400 leading-relaxed line-clamp-2">
                                Your upcoming service has been rescheduled due to rain delays. We will see you on Friday instead of Thursday.
                            </p>
                        </div>

                        {/* Message Item */}
                         <div className="p-5 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-text-light dark:text-white text-base">Invoice #INV-2024-001 Available</h4>
                                <span className="text-xs text-secondary-text-light dark:text-gray-500">Oct 01</span>
                            </div>
                            <p className="text-sm text-secondary-text-light dark:text-gray-400 leading-relaxed line-clamp-2">
                                Your monthly invoice is now available for viewing and payment.
                            </p>
                        </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-background-dark/50 rounded-xl border border-border-light dark:border-border-dark flex items-center justify-center text-sm text-secondary-text-light dark:text-gray-500">
                        <span className="material-symbols-outlined mr-2">lock</span>
                        Messages are secure and private.
                    </div>
                </div>
            )}

        </main>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center p-4 py-12 md:py-20">
      <div className="w-full max-w-md bg-white dark:bg-card-dark rounded-2xl shadow-2xl border border-border-light dark:border-border-dark overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="bg-primary/10 dark:bg-primary/5 p-8 flex flex-col items-center justify-center border-b border-border-light dark:border-border-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="size-20 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 shadow-sm">
            <span className="material-symbols-outlined text-4xl">person</span>
          </div>
          <h1 className="text-2xl font-black text-text-light dark:text-white">Client Portal</h1>
          <p className="text-sm text-secondary-text-light dark:text-gray-400 text-center mt-2 max-w-[250px]">Access your account, pay bills, and schedule services.</p>
        </div>
        
        <form onSubmit={handleLogin} className="p-8 flex flex-col gap-5">
           <div>
             <label className="block text-sm font-bold text-text-light dark:text-white mb-2 ml-1">Email Address</label>
             <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">mail</span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl focus:border-primary focus:ring-primary dark:text-white dark:placeholder:text-gray-500 transition-all"
                  placeholder="name@example.com"
                  required
                />
             </div>
           </div>
           
           <div>
             <label className="block text-sm font-bold text-text-light dark:text-white mb-2 ml-1">Password</label>
             <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">lock</span>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl focus:border-primary focus:ring-primary dark:text-white dark:placeholder:text-gray-500 transition-all"
                  placeholder="••••••••"
                  required
                />
             </div>
           </div>

           <div className="flex items-center justify-between text-xs sm:text-sm">
             <label className="flex items-center gap-2 cursor-pointer text-secondary-text-light dark:text-gray-400">
               <input type="checkbox" className="rounded text-primary focus:ring-primary border-gray-300 dark:border-gray-600 dark:bg-background-dark" />
               Remember me
             </label>
             <button type="button" className="text-primary font-bold hover:underline">Forgot password?</button>
           </div>
           
           <button 
             type="submit" 
             disabled={isLoading}
             className="mt-2 w-full py-3.5 bg-primary text-[#0d1b12] font-bold rounded-xl hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
           >
             {isLoading ? (
               <>
                 <span className="size-5 border-2 border-[#0d1b12]/30 border-t-[#0d1b12] rounded-full animate-spin"></span>
                 Signing In...
               </>
             ) : (
               <>
                 Sign In
                 <span className="material-symbols-outlined text-[20px]">login</span>
               </>
             )}
           </button>
        </form>
        
        <div className="px-8 pb-8 text-center">
          <p className="text-sm text-secondary-text-light dark:text-gray-400">
            Don't have an account? <Link to="/contact" className="text-primary font-bold hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;