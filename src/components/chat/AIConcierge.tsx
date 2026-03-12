"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, Sparkles, ChevronDown } from "lucide-react";

/* ══════════════════════════════════════════════
   CHAT BUBBLE — Individual message styling
   ══════════════════════════════════════════════ */

interface ChatBubbleProps {
    role: "bot" | "user";
    message: string;
    isTyping?: boolean;
}

function ChatBubble({ role, message, isTyping }: ChatBubbleProps) {
    if (isTyping) {
        return (
            <div className="flex items-start gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-copper/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles size={14} className="text-copper" />
                </div>
                <div className="bg-forest-dark border border-copper/10 rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-copper/60 animate-[pulse_1.4s_ease-in-out_infinite]" />
                        <span className="w-2 h-2 rounded-full bg-copper/60 animate-[pulse_1.4s_ease-in-out_0.2s_infinite]" />
                        <span className="w-2 h-2 rounded-full bg-copper/60 animate-[pulse_1.4s_ease-in-out_0.4s_infinite]" />
                    </div>
                </div>
            </div>
        );
    }

    if (role === "bot") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-3 mb-4"
            >
                <div className="w-7 h-7 rounded-full bg-copper/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles size={14} className="text-copper" />
                </div>
                <div className="bg-forest-dark border border-copper/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-parchment-light text-sm leading-relaxed">{message}</p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-end mb-4"
        >
            <div className="bg-copper/10 border border-copper/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                <p className="text-parchment-light text-sm leading-relaxed">{message}</p>
            </div>
        </motion.div>
    );
}

/* ══════════════════════════════════════════════
   QUICK ACTION CHIPS
   ══════════════════════════════════════════════ */

const QUICK_ACTIONS = [
    "Portfolio Strategy",
    "Schedule Consultation",
    "Our Philosophy",
];

/* ══════════════════════════════════════════════
   AI CONCIERGE — Main Widget
   ══════════════════════════════════════════════ */

interface Message {
    id: string;
    role: "bot" | "user";
    text: string;
}

const WELCOME_MESSAGE: Message = {
    id: "welcome",
    role: "bot",
    text: "Welcome to Continental Heritage. I'm your private wealth concierge. How may I assist you today?",
};

export function AIConcierge() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const [hasSeenGreeting, setHasSeenGreeting] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-show greeting after 6 seconds
    useEffect(() => {
        const showTimer = setTimeout(() => {
            if (!hasSeenGreeting && !isOpen) {
                setShowGreeting(true);
            }
        }, 6000);

        return () => clearTimeout(showTimer);
    }, [hasSeenGreeting, isOpen]);

    // Auto-hide greeting after 12 seconds
    useEffect(() => {
        if (showGreeting) {
            const hideTimer = setTimeout(() => {
                setShowGreeting(false);
                setHasSeenGreeting(true);
            }, 12000);
            return () => clearTimeout(hideTimer);
        }
    }, [showGreeting]);

    // Auto-scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    // Focus input when panel opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        const userMsg: Message = {
            id: `user-${Date.now()}`,
            role: "user",
            text: trimmed,
        };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate bot response (visual only — no real AI backend)
        setTimeout(() => {
            setIsTyping(false);
            const botMsg: Message = {
                id: `bot-${Date.now()}`,
                role: "bot",
                text: "Thank you for your inquiry. A member of our Private Wealth team will follow up with you shortly. In the meantime, feel free to explore our services or schedule a confidential consultation.",
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1800);
    };

    const handleQuickAction = (action: string) => {
        setInput(action);
        const userMsg: Message = {
            id: `user-${Date.now()}`,
            role: "user",
            text: action,
        };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const responses: Record<string, string> = {
                "Portfolio Strategy": "Our portfolio strategies are tailored to each client's risk profile and generational goals. We employ a multi-asset approach combining traditional equities, fixed income, and alternative investments. Shall I connect you with a Portfolio Director?",
                "Schedule Consultation": "I'd be happy to arrange a confidential consultation. Our advisors are available Monday through Friday, 9:00 AM – 5:00 PM AEST. Please visit our Contact page or I can have a Relationship Manager reach out to you.",
                "Our Philosophy": "Continental Heritage is founded on three pillars: Institutional Memory, Absolute Discretion, and Aligned Interests. For 47 years, these principles have guided our approach to multigenerational wealth preservation.",
            };
            const botMsg: Message = {
                id: `bot-${Date.now()}`,
                role: "bot",
                text: responses[action] || "Thank you for your interest. How else may I assist you?",
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1500);
    };

    return (
        <>
            {/* ── FLOATING WIDGET CONTAINER ── */}
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 pointer-events-none">
                
                {/* ── GREETING TOOLTIP ── */}
                <AnimatePresence>
                    {showGreeting && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10, x: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10, x: 10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="bg-gradient-to-br from-[rgba(13,40,24,0.95)] to-[rgba(8,26,16,0.98)]
                                       backdrop-blur-md border border-copper/20 rounded-2xl rounded-br-sm p-4 w-64 md:w-72
                                       shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(176,125,75,0.15)]
                                       pointer-events-auto relative group origin-bottom-right"
                        >
                            <div className="flex gap-3 items-start cursor-pointer" onClick={() => { setIsOpen(true); setShowGreeting(false); setHasSeenGreeting(true); }}>
                                <div className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center shrink-0 mt-0.5 border border-copper/15">
                                    <Sparkles size={14} className="text-copper" />
                                </div>
                                <div>
                                    <h4 className="text-parchment-light text-sm font-medium mb-1 tracking-wide">Heritage Concierge</h4>
                                    <p className="text-sage text-xs leading-relaxed">
                                        I am here and ready to assist you. How can I help preserve your legacy today?
                                    </p>
                                </div>
                            </div>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowGreeting(false);
                                    setHasSeenGreeting(true);
                                }}
                                className="absolute top-2 right-2 p-1.5 text-sage/40 hover:text-copper transition-colors opacity-0 group-hover:opacity-100"
                                aria-label="Dismiss greeting"
                            >
                                <X size={14} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── FLOATING BUBBLE ── */}
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            onClick={() => {
                                setIsOpen(true);
                                setShowGreeting(false);
                                setHasSeenGreeting(true);
                            }}
                            className="w-14 h-14 md:w-16 md:h-16 rounded-full
                                       bg-gradient-to-br from-copper to-copper-dark
                                       shadow-[0_4px_20px_rgba(176,125,75,0.4),0_0_40px_rgba(176,125,75,0.15)]
                                       flex items-center justify-center
                                       hover:shadow-[0_6px_30px_rgba(176,125,75,0.6)] hover:scale-105
                                       active:scale-95 transition-all duration-300 group pointer-events-auto relative"
                            aria-label="Open Heritage Concierge"
                        >
                            <MessageCircle
                                size={24}
                                className="text-forest group-hover:scale-110 transition-transform relative z-10"
                                strokeWidth={2}
                            />
                            {/* Pulse ring */}
                            <span className="absolute inset-0 rounded-full border-2 border-copper/40 animate-ping opacity-30" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* ── EXPANDED CHAT PANEL ── */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Mobile backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 30, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed z-[9999]
                                       /* Mobile: full-screen sheet from bottom */
                                       bottom-0 left-0 right-0 h-[85vh]
                                       /* Desktop: floating panel */
                                       md:bottom-6 md:right-6 md:left-auto md:h-[560px] md:w-[400px]
                                       md:rounded-2xl
                                       rounded-t-2xl
                                       overflow-hidden
                                       flex flex-col
                                       bg-gradient-to-b from-[rgba(13,40,24,0.97)] to-[rgba(8,26,16,0.99)]
                                       backdrop-blur-2xl
                                       border border-copper/15
                                       shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(176,125,75,0.1)]"
                        >
                            {/* ── HEADER ── */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-copper/10 shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-copper to-copper-dark flex items-center justify-center">
                                        <Sparkles size={18} className="text-forest" />
                                    </div>
                                    <div>
                                        <h3 className="text-parchment-light text-sm font-medium tracking-wide">Heritage Concierge</h3>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            <span className="text-sage text-[10px] uppercase tracking-widest">Online</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {/* Mobile pull-down indicator */}
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="md:hidden p-1.5 text-sage/70 hover:text-copper transition-colors"
                                        aria-label="Minimize chat"
                                    >
                                        <ChevronDown size={20} />
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-1.5 rounded-full hover:bg-copper/10 text-sage/70 hover:text-copper transition-all"
                                        aria-label="Close chat"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* ── MESSAGES ── */}
                            <div className="flex-1 overflow-y-auto px-5 py-4 scrollbar-thin">
                                {messages.map(msg => (
                                    <ChatBubble key={msg.id} role={msg.role} message={msg.text} />
                                ))}
                                {isTyping && <ChatBubble role="bot" message="" isTyping />}
                                <div ref={messagesEndRef} />

                                {/* Quick Actions — show only if 1 message (welcome) */}
                                {messages.length === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.4 }}
                                        className="flex flex-wrap gap-2 mt-4"
                                    >
                                        {QUICK_ACTIONS.map(action => (
                                            <button
                                                key={action}
                                                onClick={() => handleQuickAction(action)}
                                                className="px-3 py-1.5 rounded-full border border-copper/20 text-copper text-xs
                                                           tracking-wider uppercase
                                                           hover:bg-copper/10 hover:border-copper/40
                                                           active:scale-95
                                                           transition-all duration-200"
                                            >
                                                {action}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </div>

                            {/* ── INPUT BAR ── */}
                            <div className="px-4 pb-4 pt-3 border-t border-copper/10 shrink-0 bg-forest-dark/30">
                                <form
                                    onSubmit={e => { e.preventDefault(); handleSend(); }}
                                    className="flex items-center gap-2"
                                >
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={e => setInput(e.target.value)}
                                        placeholder="Ask about our services..."
                                        className="flex-1 bg-forest border border-copper/15 rounded-xl px-4 py-3
                                                   text-parchment-light text-sm placeholder:text-sage/50
                                                   focus:outline-none focus:border-copper/40 focus:shadow-[0_0_10px_rgba(176,125,75,0.08)]
                                                   transition-all duration-300"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!input.trim()}
                                        className="w-11 h-11 rounded-xl bg-copper flex items-center justify-center
                                                   hover:bg-copper-light active:scale-95
                                                   disabled:opacity-30 disabled:cursor-not-allowed
                                                   transition-all duration-200 shrink-0"
                                        aria-label="Send message"
                                    >
                                        <Send size={16} className="text-forest" />
                                    </button>
                                </form>
                                <p className="text-sage/40 text-[10px] tracking-wider uppercase text-center mt-2">
                                    Heritage AI Concierge · For informational purposes only
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
