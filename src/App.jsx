import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Button from './components/Button'
import ButtonGradient from '../src/assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import Lanyard from './components/jsrepo/Lanyard/Lanyard'
import ProjectSection from './components/ProjectSection'
import { BotMessageSquare } from 'lucide-react'
import Chatbot from './components/ak-bot'
import { AnimatePresence, motion } from 'framer-motion'
function App() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      {/* Wrapper seluruh halaman */}
      <div className="relative overflow-hidden pt-[4.7rem]">
        {/* Background Lanyard */}
        <div className="absolute inset-0 -top-[80rem] max-sm:-top-[110rem] w-full h-full z-1">
          <Lanyard fov={55} position={[0,0,30]}/>
        </div>

        {/* Konten */}
        <Header />
        <Hero />
        <AboutSection />
         <ProjectSection/>

      <AnimatePresence>
        <motion.button
          initial={{  scale: 0.8 }}
          animate={{   scale: 1 }}
          
          transition={{ duration: 1, ease: "linear", repeat: Infinity,  }}
          onClick={() => setisOpen(!isOpen)}
          className="fixed z-50 bottom-7 right-7  bg-[#1B1B2E] text-white p-4 rounded-full shadow-lg hover:bg-[#252134] transition flex items-center justify-center"
        >
          <BotMessageSquare className="w-12 h-12 max-sm:w-8 max-sm:h-8" />
        </motion.button>
      </AnimatePresence>


       <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed z-50 bottom-40 right-40 max-sm:bottom-24 max-sm:right-1/2 max-sm:-translate-x-1/2"
            >
              <Chatbot/>
            </motion.div>
          )}
        </AnimatePresence>


      </div>

      <ButtonGradient />
    </>
  );
}


export default App
