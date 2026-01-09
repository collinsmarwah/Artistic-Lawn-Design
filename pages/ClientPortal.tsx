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
      }
  };

  const SidebarItem = ({ view, icon, label }: { view: View; icon: string; label: string }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        currentView === view
          ? 'bg-primary/20 text-text-light dark:text-white font-bold'
          : 'text-secondary-text-light dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
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
            <p className="text-xs text-secondary-text-light dark:text-gray-400">#88291 • John Doe</p>
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
                className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
              >
                <span className="material-symbols-outlined">logout</span>
                Sign Out
              </button>
           </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-white dark:bg-card-dark rounded-2xl border border-border-light dark:border-border-dark p-6 md:p-8 min-h-[600px]">
            
            {/* OVERVIEW VIEW */}
            {currentView === 'overview' && (
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-text-light dark:text-white">Dashboard Overview</h2>
                        <span className="text-sm text-secondary-text-light dark:text-gray-400">{new Date().toLocaleDateString()}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Balance Widget */}
                        <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                            <div className="flex justify-between items-start mb-2">
                                <span className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 material-symbols-outlined">attach_money</span>
                                {balance > 0 && <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">DUE</span>}
                            </div>
                            <p className="text-secondary-text-light dark:text-gray-400 text-sm">Current Balance</p>
                            <h3 className="text-2xl font-black text-text-light dark:text-white mt-1">${balance.toFixed(2)}</h3>
                            <button onClick={() => setCurrentView('billing')} className="text-primary text-sm font-bold mt-4 hover:underline">View Details &rarr;</button>
                        </div>

                         {/* Schedule Widget */}
                         <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                            <div className="flex justify-between items-start mb-2">
                                <span className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 material-symbols-outlined">event</span>
                            </div>
                            <p className="text-secondary-text-light dark:text-gray-400 text-sm">Next Service</p>
                            <h3 className="text-lg font-bold text-text-light dark:text-white mt-1">Lawn Mowing</h3>
                            <p className="text-sm text-text-light dark:text-gray-300">Fri, Oct 24 • 8am</p>
                            <button onClick={() => setCurrentView('schedule')} className="text-primary text-sm font-bold mt-3 hover:underline">View Calendar &rarr;</button>
                        </div>

                        {/* Messages Widget */}
                         <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                            <div className="flex justify-between items-start mb-2">
                                <span className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 material-symbols-outlined">mail</span>
                                <span className="bg-primary text-[#0d1b12] text-xs font-bold px-2 py-1 rounded-full">1</span>
                            </div>
                            <p className="text-secondary-text-light dark:text-gray-400 text-sm">Unread Messages</p>
                            <h3 className="text-lg font-bold text-text-light dark:text-white mt-1">Service Complete</h3>
                             <p className="text-sm text-text-light dark:text-gray-300 truncate">Your fertilizer treatment...</p>
                            <button onClick={() => setCurrentView('messages')} className="text-primary text-sm font-bold mt-3 hover:underline">Open Inbox &rarr;</button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-text-light dark:text-white mb-4">Recent Activity</h3>
                        <div className="divide-y divide-border-light dark:divide-border-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
                             {[
                                { date: 'Oct 10', title: 'Lawn Mowing & Edging', amount: '$45.00', status: 'Paid' },
                                { date: 'Sep 26', title: 'Lawn Mowing & Edging', amount: '$45.00', status: 'Paid' },
                                { date: 'Sep 15', title: 'Seasonal Fertilization', amount: '$85.00', status: 'Paid' },
                             ].map((item, i) => (
                                 <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                     <div className="flex items-center gap-4">
                                         <div className="size-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-500">
                                             <span className="material-symbols-outlined text-lg">history</span>
                                         </div>
                                         <div>
                                             <p className="font-bold text-sm text-text-light dark:text-white">{item.title}</p>
                                             <p className="text-xs text-secondary-text-light dark:text-gray-400">{item.date}</p>
                                         </div>
                                     </div>
                                     <div className="text-right">
                                         <p className="font-bold text-sm text-text-light dark:text-white">{item.amount}</p>
                                         <p className="text-xs text-green-600 font-medium">{item.status}</p>
                                     </div>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>
            )}

            {/* BILLING VIEW */}
            {currentView === 'billing' && (
                <div className="flex flex-col gap-8 h-full">
                    <h2 className="text-2xl font-bold text-text-light dark:text-white">Billing & Payments</h2>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 p-6 rounded-xl bg-primary text-[#0d1b12] shadow-lg">
                            <p className="font-medium opacity-80">Total Balance Due</p>
                            <h3 className="text-4xl font-black mt-2">${balance.toFixed(2)}</h3>
                            <p className="text-sm mt-4 font-medium opacity-80">Due Date: Oct 30, 2025</p>
                            {balance > 0 ? (
                                <button onClick={handlePayment} className="mt-6 w-full py-3 bg-[#0d1b12] text-white font-bold rounded-lg hover:bg-black transition-colors">
                                    Pay Now
                                </button>
                            ) : (
                                <button disabled className="mt-6 w-full py-3 bg-[#0d1b12]/20 text-[#0d1b12] font-bold rounded-lg cursor-default">
                                    Paid in Full
                                </button>
                            )}
                        </div>
                        <div className="flex-1 p-6 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                             <h4 className="font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined">credit_card</span>
                                Payment Method
                             </h4>
                             <div className="flex items-center justify-between p-3 border border-border-light dark:border-border-dark rounded-lg mb-4 bg-white dark:bg-card-dark">
                                 <div className="flex items-center gap-3">
                                     <span className="material-symbols-outlined text-gray-400">credit_card</span>
                                     <div className="text-sm">
                                         <p className="font-bold">Visa ending in 4242</p>
                                         <p className="text-xs text-gray-500">Expires 12/28</p>
                                     </div>
                                 </div>
                                 <button className="text-primary text-sm font-bold">Edit</button>
                             </div>
                             <button className="w-full py-2 border border-border-light dark:border-border-dark rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
                                 Add Payment Method
                             </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-text-light dark:text-white mb-4">Invoice History</h3>
                        <div className="border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 dark:bg-gray-800/50 text-secondary-text-light dark:text-gray-400 font-medium">
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
                                        <tr key={inv.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                                            <td className="p-4 font-bold">{inv.id}</td>
                                            <td className="p-4 text-gray-500">{inv.date}</td>
                                            <td className="p-4">{inv.amount}</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded text-xs font-bold ${inv.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                    {inv.status}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <button className="text-primary hover:underline">Download PDF</button>
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
                <div className="flex flex-col gap-6">
                     <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-text-light dark:text-white">Service Schedule</h2>
                        <button className="bg-primary text-[#0d1b12] px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-hover">
                            Request Change
                        </button>
                    </div>

                    <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-border-light dark:border-border-dark flex flex-col items-center justify-center text-center gap-4">
                         <div className="size-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                             <span className="material-symbols-outlined text-3xl">event_upcoming</span>
                         </div>
                         <div>
                             <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">Next Service</p>
                             <h3 className="text-3xl font-black text-text-light dark:text-white">Friday, Oct 24</h3>
                             <p className="text-gray-500 mt-1">Arrival window: 8:00 AM - 11:00 AM</p>
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
                                 <div key={i} className="flex items-center gap-4 p-4 border border-border-light dark:border-border-dark rounded-xl hover:border-primary transition-colors cursor-pointer bg-white dark:bg-card-dark">
                                     <div className="flex flex-col items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg shrink-0">
                                         <span className="text-xs font-bold text-gray-500 uppercase">{visit.month}</span>
                                         <span className="text-xl font-black text-text-light dark:text-white">{visit.day}</span>
                                     </div>
                                     <div className="flex-1">
                                         <h4 className="font-bold text-text-light dark:text-white">{visit.service}</h4>
                                         <p className="text-sm text-gray-500">{visit.notes}</p>
                                     </div>
                                     <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                                 </div>
                             ))}
                         </div>
                    </div>
                </div>
            )}

             {/* MESSAGES VIEW */}
            {currentView === 'messages' && (
                <div className="flex flex-col h-full gap-4">
                    <h2 className="text-2xl font-bold text-text-light dark:text-white">Messages</h2>
                    
                    <div className="flex-1 flex flex-col border border-border-light dark:border-border-dark rounded-xl overflow-hidden bg-white dark:bg-card-dark">
                        {/* Message Item */}
                        <div className="p-4 border-b border-border-light dark:border-border-dark bg-blue-50/50 dark:bg-blue-900/10 cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold text-text-light dark:text-white">Service Complete</h4>
                                <span className="text-xs text-gray-500">2 hours ago</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                Hello John, we just finished the fertilization treatment for your lawn. Please water within 24 hours for best results. Let us know if you have any questions!
                            </p>
                        </div>

                         {/* Message Item */}
                         <div className="p-4 border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold text-text-light dark:text-white">Schedule Update</h4>
                                <span className="text-xs text-gray-500">Oct 15</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                Your upcoming service has been rescheduled due to rain delays. We will see you on Friday instead of Thursday.
                            </p>
                        </div>

                        {/* Message Item */}
                         <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold text-text-light dark:text-white">Invoice #INV-2024-001 Available</h4>
                                <span className="text-xs text-gray-500">Oct 01</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                Your monthly invoice is now available for viewing and payment.
                            </p>
                        </div>
                    </div>
                    
                    <button className="w-full py-3 bg-primary hover:bg-primary-hover text-[#0d1b12] font-bold rounded-lg flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">add</span>
                        New Message
                    </button>
                </div>
            )}

        </main>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center p-4 py-12 md:py-20">
      <div className="w-full max-w-md bg-white dark:bg-card-dark rounded-2xl shadow-xl border border-border-light dark:border-border-dark overflow-hidden">
        <div className="p-8 pb-0 text-center">
          <div className="size-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
            <span className="material-symbols-outlined text-3xl">lock</span>
          </div>
          <h1 className="text-2xl font-black text-text-light dark:text-white">Client Portal</h1>
          <p className="text-secondary-text-light dark:text-gray-400 mt-2 text-sm">
            Sign in to manage your account, pay bills, and schedule services.
          </p>
        </div>

        <form onSubmit={handleLogin} className="p-8 flex flex-col gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text-light dark:text-gray-400 mb-2">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark h-11 px-4 focus:border-primary focus:ring-primary dark:focus:border-primary text-text-light dark:text-white placeholder:text-gray-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text-light dark:text-gray-400 mb-2">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark h-11 px-4 focus:border-primary focus:ring-primary dark:focus:border-primary text-text-light dark:text-white placeholder:text-gray-400 transition-colors"
            />
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-text-light dark:text-gray-300">
              <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-primary font-medium hover:underline">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full mt-2 h-12 bg-primary hover:bg-primary-hover text-[#0d1b12] font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="size-5 border-2 border-[#0d1b12] border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                <span>Sign In</span>
                <span className="material-symbols-outlined">login</span>
              </>
            )}
          </button>
        </form>

        <div className="p-4 bg-gray-50 dark:bg-[#15251b] border-t border-border-light dark:border-border-dark text-center">
          <p className="text-sm text-secondary-text-light dark:text-gray-400">
            Don't have an account? <Link to="/contact" className="text-primary font-bold hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
      
       <p className="mt-8 text-xs text-gray-400 text-center max-w-sm">
        PROTOTYPE MODE: Any email/password will work. Login is simulated.
      </p>
    </div>
  );
};

export default ClientPortal;