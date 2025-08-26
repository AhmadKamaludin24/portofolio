"use client";
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Halo! Saya asisten AI untuk Ahmad Kamaludin. Apa yang ingin kamu ketahui tentang saya?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll saat ada pesan baru
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      });
      const data = await response.json();

      // Tambahkan delay kecil supaya animasi loading terlihat
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
        setLoading(false);
      }, 500);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Maaf terjadi kesalahan di server" },
      ]);
      setLoading(false);
    }
  };

  return (
    <div className="fixed z-50 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-[90%] bottom-40 max-sm:bottom-24 right-40 w-[380px] h-[520px] bg-[#1B1B2E] text-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#3F3A52]">
      {/* Header */}
      <div className="bg-[#252134] px-6 py-4 text-[#CAC6DD] font-semibold text-xl">
        AI ChatBot
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 max-h-[400px] scrollbar-thin scrollbar-thumb-[#3F3A52] scrollbar-track-[#15131D] flex flex-col">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-2xl text-base max-w-[80%] leading-relaxed ${
                msg.role === "assistant"
                  ? "bg-[#3F3A52] text-[#FFFFFF] self-start"
                  : "bg-[#474060] text-[#FFFFFF] self-end ml-auto"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}

          {/* Loading dots */}
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-[#3F3A52] text-[#FFFFFF] self-start p-4 rounded-2xl flex gap-1"
            >
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-200">.</span>
              <span className="animate-bounce delay-400">.</span>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-3 p-4 bg-[#15131D]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Tulis pesan..."
          className="flex-1 px-4 py-3 bg-[#252134] text-[#FFFFFF] rounded-xl outline-none placeholder-[#6C7275] text-lg"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="p-3 rounded-full bg-[#3F3A52] hover:bg-[#474060] transition"
        >
          <Send className="w-5 h-5 text-[#FFFFFF]" />
        </button>
      </div>
    </div>
  );
}
