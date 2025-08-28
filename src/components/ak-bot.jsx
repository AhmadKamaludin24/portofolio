"use client";
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { heroBackground } from "../assets";
import ReactMarkdown from "react-markdown";

export default function ChatBot({ isOpen }) {
  const [lang, setlang] = useState("en");
  const [isLangSwitching, setIsLangSwitching] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Halo! Saya asisten AI untuk Ahmad Kamaludin. Apa yang ingin kamu ketahui tentang saya?",
    },
  ]);

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        text:
          lang === "en"
            ? "Hello! I am the AI assistant for Ahmad Kamaludin. What would you like to know about me?"
            : "Halo! Saya asisten AI untuk Ahmad Kamaludin. Apa yang ingin kamu ketahui tentang saya?",
      },
    ]);
  }, [lang]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

 
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  
const handleLanguageSwitch = () => {
  if (isLangSwitching) return; 

  setlang((prev) => (prev === "en" ? "id" : "en"));


  setTimeout(() => {
    setIsLangSwitching(false);
  }, 50000);
};

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://portofolio-ai-backed.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text, language: lang }),
      });
      const data = await response.json();

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: data.reply },
        ]);
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
    <AnimatePresence>
      <motion.div  initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={` ${isOpen ? "fixed" : "hidden"}  bg-n-8 z-[100] max-sm:left-4 max-sm:w-[90%] bottom-40 max-sm:bottom-24 right-40 w-[380px] h-[550px]  text-white rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden border border-[#3F3A52]`}>
      <img
        src={heroBackground}
        alt="bg"
        height={550}
        className="object-cover absolute inset-0 bottom-0 -z-1"
      />
      {/* Header */}
      <div className="bg-[#252134] w-full flex items-center justify-between px-6 py-2 text-[#CAC6DD] font-semibold text-xl">
        <h1>Ak-bot</h1>
        <button
          disabled={isLangSwitching}
          onClick={handleLanguageSwitch}
          className="w-10 flex justify-center items-center h-10 rounded-full bg-n-5">
          <p className="text-sm font-normal">{lang}</p>
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1  overflow-y-auto px-6 py-4 space-y-4 max-h-[400px] scrollbar-thin scrollbar-thumb-[#3F3A52] scrollbar-track-[#15131D] flex flex-col">
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
              }`}>
              <ReactMarkdown
                components={{
                  strong: ({ children }) => (
                    <strong className="font-bold">{children}</strong>
                  ),
                  code: ({ children }) => (
                    <code className="bg-[#252134] px-1 py-0.5 rounded text-[#FFD580]">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-[#252134] p-3 rounded-lg overflow-x-auto">
                      {children}
                    </pre>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-1">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-1">
                      {children}
                    </ol>
                  ),
                  p: ({ children }) => <p className="mb-2">{children}</p>,
                }}>
                {msg.text}
              </ReactMarkdown>
            </motion.div>
          ))}

          {/* Loading dots */}
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-[#3F3A52] text-[#FFFFFF] self-start p-4 rounded-2xl flex gap-1">
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-200">.</span>
              <span className="animate-bounce delay-400">.</span>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-3 p-4   bg-[#15131D]">
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
          className="p-3 rounded-full bg-[#3F3A52] hover:bg-[#474060] transition">
          <Send className="w-5 h-5 text-[#FFFFFF]" />
        </button>
      </div>
    </motion.div>
    </AnimatePresence>
    
  );
}
