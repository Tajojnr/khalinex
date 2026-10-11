"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, ArrowRight } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  link?: { label: string; href: string };
}

function getBotResponse(userText: string): Message {
  const query = userText.toLowerCase().trim();
  const id = Date.now().toString();

  if (query.includes("ship") || query.includes("cargo") || query.includes("air") || query.includes("sea") || query.includes("rate")) {
    return {
      id, sender: "bot",
      text: "✈️ Express Air Freight: 5–7 days from China to Lagos.\n🚢 Sea Freight: 30–45 days for bulk CBM cargo.\n\nAll rates include Nigeria customs clearance.",
      link: { label: "Calculate Shipping Quote", href: "/services/shipping" },
    };
  }

  if (query.includes("source") || query.includes("1688") || query.includes("taobao") || query.includes("alibaba") || query.includes("buy")) {
    return {
      id, sender: "bot",
      text: "🇨🇳 Simply paste a 1688 or Alibaba link. Our Guangzhou team verifies factory authenticity, negotiates RMB prices, and handles procurement!",
      link: { label: "Submit Sourcing Request", href: "/services/sourcing" },
    };
  }

  if (query.includes("rmb") || query.includes("yuan") || query.includes("alipay") || query.includes("pay") || query.includes("naira")) {
    return {
      id, sender: "bot",
      text: "💱 You pay in Naira to our corporate bank account in Nigeria, and our Guangzhou office settles your Chinese supplier via Alipay or WeChat Pay within 1 hour!",
      link: { label: "Contact Payment Desk", href: "/contact" },
    };
  }

  if (query.includes("track") || query.includes("where") || query.includes("klx")) {
    return {
      id, sender: "bot",
      text: "📦 Enter your waybill tracking ID (e.g. KLX-2025-8841) on our tracking portal to see real-time updates from Guangzhou to Lagos.",
      link: { label: "Open Tracking Portal", href: "/track" },
    };
  }

  return {
    id, sender: "bot",
    text: "I am LinX AI! I can assist with Air/Sea Freight, China Sourcing, RMB Payments, Tracking, or KhalineX Academy courses. How can I help you?",
    link: { label: "Talk to Human Support", href: "https://wa.me/2348000000000" },
  };
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! 👋 I'm LinX AI, your KhalineX virtual trade assistant. How can I help you today?",
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = (userQuery?: string) => {
    const textToSend = userQuery || input;
    if (!textToSend.trim()) return;

    setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "user", text: textToSend }]);
    if (!userQuery) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, getBotResponse(textToSend)]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="btn-primary !p-4 !rounded-full shadow-brand flex items-center gap-2.5"
          >
            <div className="relative">
              <Bot className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-dark-950 animate-pulse" />
            </div>
            <span className="hidden sm:inline font-bold text-xs pr-1">Ask LinX AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[90vw] sm:w-[380px] h-[500px] bg-white rounded-3xl shadow-strong border border-dark-100 flex flex-col overflow-hidden"
          >
            <div className="bg-dark-950 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center text-white font-bold">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xs text-white">LinX AI Assistant</h3>
                  <p className="text-[10px] text-emerald-400 font-semibold">Online • KhalineX Desk</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 text-white/60 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-surface-secondary p-2 border-b border-dark-50 flex gap-1.5 overflow-x-auto text-[10px] font-semibold">
              <button onClick={() => handleSend("Air Rates")} className="bg-white border px-2.5 py-1 rounded-full whitespace-nowrap">✈️ Air Rates</button>
              <button onClick={() => handleSend("Sourcing")} className="bg-white border px-2.5 py-1 rounded-full whitespace-nowrap">🇨🇳 Sourcing</button>
              <button onClick={() => handleSend("RMB Pay")} className="bg-white border px-2.5 py-1 rounded-full whitespace-nowrap">💱 RMB Pay</button>
              <button onClick={() => handleSend("Track")} className="bg-white border px-2.5 py-1 rounded-full whitespace-nowrap">📦 Track</button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[82%] p-3 rounded-2xl ${msg.sender === "user" ? "bg-brand-500 text-white" : "bg-surface-secondary text-dark-950 border border-dark-50"}`}>
                    <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                    {msg.link && (
                      <a href={msg.link.href} className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-brand-600 bg-white px-2.5 py-1 rounded border border-brand-200">
                        {msg.link.label} <ArrowRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && <div className="text-[10px] text-dark-400">Typing...</div>}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-3 border-t flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask LinX AI..."
                className="flex-1 bg-surface-secondary px-3 py-2 rounded-xl text-xs outline-none"
              />
              <button type="submit" className="btn-primary !p-2">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
