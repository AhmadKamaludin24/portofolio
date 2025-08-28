import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Button from "./components/Button";
import ButtonGradient from "../src/assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Lanyard from "./components/jsrepo/Lanyard/Lanyard";
import ProjectSection from "./components/ProjectSection";
import { BotMessageSquare } from "lucide-react";
import Chatbot from "./components/ak-bot";
import { AnimatePresence, motion } from "framer-motion";
function App() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      {/* Wrapper seluruh halaman */}
      <div className="relative overflow-hidden pt-[4.7rem]">
        {/* Background Lanyard */}
        <div className="absolute top-[7rem] lg:-top-[20rem] left-0 w-full h-[1000px] lg:h-[2000px] z-10">
  <Lanyard fov={window.innerWidth < 768 ? 15 : 25} />
</div>

        {/* Konten */}
        <Header />
        <Hero />
        <AboutSection />
        <ProjectSection />

        <AnimatePresence>
          <motion.button
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "linear", repeat: Infinity }}
            onClick={() => setisOpen(!isOpen)}
            className="fixed z-50 bottom-7 right-7  bg-[#1B1B2E] text-white p-4 rounded-full shadow-lg hover:bg-[#252134] transition flex items-center justify-center">
            <BotMessageSquare className="w-12 h-12 max-sm:w-8 max-sm:h-8" />
          </motion.button>
        </AnimatePresence>

        <Chatbot isOpen={isOpen} />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
