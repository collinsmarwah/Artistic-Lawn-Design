import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Initial greeting from the bot
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hi! How can I help you with your lawn care needs today?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText;
    setInputText('');
    setIsLoading(true);

    // Update UI with user message immediately
    setMessages(prev => [...prev, { role: 'user', text: userText }]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Prepare history from existing messages state
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are a friendly and helpful customer support assistant for Artistic Lawn Design, a professional landscaping and lawn care company based in Cape Coral, Florida.
          
          Company Details:
          - Name: Artistic Lawn Design
          - Location: 2119 NE 13th Pl, Cape Coral, FL 33909
          - Phone: (239) 699-7323
          - Email: Aldincorporated@aol.com
          - Services: Lawn maintenance (mowing, edging, blowing), Landscape Design (native plants, tropical gardens), Hardscaping (pavers, patios, retaining walls), Tree Care (trimming, removal), Fertilization, Sod Installation, and Commercial/HOA maintenance.
          - Key Selling Points: Dependable, fair pricing, local expertise, transparency.
          
          Your Goal: Answer user questions about services, pricing (give general answers like "Pricing varies based on property size, please request a free quote"), availability, and contact information. Encourage users to use the "Get a Quote" or "Contact" page for specific estimates.
          
          Tone: Professional, warm, and helpful. Keep answers concise (under 3 sentences where possible).`,
        },
        history: history
      });

      const result = await chat.sendMessage({ message: userText });
      const responseText = result.text || "I'm sorry, I couldn't process that request. Please try again.";

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later or call us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-[#0d1b12] shadow-xl hover:scale-105 transition-all duration-300 ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open chat"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col w-[350px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-100px)] bg-white dark:bg-[#1a2e22] rounded-2xl shadow-2xl overflow-hidden border border-border-light dark:border-border-dark animate-in slide-in-from-bottom-10 fade-in duration-200">
          
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between text-[#0d1b12]">
            <div className="flex items-center gap-3">
               <div className="flex size-8 items-center justify-center rounded-full bg-white/20">
                <span className="material-symbols-outlined text-xl">smart_toy</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Artistic Assistant</h3>
                <p className="text-xs opacity-80">Ask me anything!</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-black/10 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-background-light dark:bg-background-dark scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-[#0d1b12] rounded-tr-none' 
                    : 'bg-white dark:bg-[#1a2e22] text-text-light dark:text-white border border-border-light dark:border-border-dark rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                <div className="bg-white dark:bg-[#1a2e22] rounded-2xl rounded-tl-none px-4 py-3 border border-border-light dark:border-border-dark shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-[#1a2e22] border-t border-border-light dark:border-border-dark flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-background-light dark:bg-background-dark border-transparent focus:border-primary focus:ring-0 rounded-full px-4 text-sm text-text-light dark:text-white placeholder:text-gray-400"
            />
            <button 
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="size-10 flex items-center justify-center bg-primary text-[#0d1b12] rounded-full hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;