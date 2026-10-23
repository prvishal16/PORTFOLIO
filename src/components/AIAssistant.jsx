import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaRobot, FaXmark, FaPaperPlane } from 'react-icons/fa6';
import { assistantKnowledge, profile } from '../data/portfolio';

const findAnswer = (message) => {
  const text = message.toLowerCase();
  const match = assistantKnowledge.qa.find((entry) =>
    entry.keywords.some((kw) => text.includes(kw))
  );
  return match ? match.answer : assistantKnowledge.fallback;
};

const quickPrompts = ['Skills?', 'Experience?', 'Projects?', 'Contact info?'];

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: assistantKnowledge.greeting },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { from: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: findAnswer(trimmed) }]);
      setIsTyping(false);
    }, 750);
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => setIsOpen((o) => !o)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[9000] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ff2a2a] shadow-[0_10px_35px_rgba(255,42,42,0.5)] flex items-center justify-center text-white"
        aria-label="Open AI assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <FaXmark size={22} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <FaRobot size={24} />
            </motion.span>
          )}
        </AnimatePresence>
        {!isOpen && <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#ff2a2a] animate-pulse" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.92 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-6 z-[9000] w-[90vw] max-w-[360px] h-[480px] max-h-[70vh] bg-[#0d0d0d] border border-white/10 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#ff2a2a] to-[#a30000] px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <FaRobot className="text-white" size={18} />
              </div>
              <div>
                <p className="text-white font-black text-sm leading-tight">Portfolio Assistant</p>
                <p className="text-white/70 text-[11px] font-semibold">Ask about {profile.shortName}'s work</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium leading-relaxed ${
                      m.from === 'user'
                        ? 'bg-[#ff2a2a] text-white rounded-br-sm'
                        : 'bg-white/10 text-white/90 rounded-bl-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white/60 px-4 py-2.5 rounded-2xl rounded-bl-sm text-xs flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick prompts */}
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickPrompts.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[11px] font-bold hover:bg-white/15 hover:text-white transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 px-4 py-3 border-t border-white/10"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff2a2a] transition-colors"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-full bg-[#ff2a2a] flex items-center justify-center text-white hover:bg-[#e01f1f] transition-colors shrink-0"
                aria-label="Send"
              >
                <FaPaperPlane size={13} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
