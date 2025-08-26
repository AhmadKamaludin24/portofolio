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
function App() {
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
        
      </div>

      <ButtonGradient />
    </>
  );
}


export default App
