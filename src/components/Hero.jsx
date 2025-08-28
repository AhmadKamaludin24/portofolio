import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constans/index";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import Lanyard from "./jsrepo/Lanyard/Lanyard";
import { motion } from "framer-motion";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <div className=" max-sm:pb-32">
      <Section
        className="pt-[12rem] max-sm:pt-[7rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="home">
        <div className="container relative min-h-svh" ref={parallaxRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // mulai bawah
            whileInView={{ opacity: 1, y: 0 }} // ke posisi normal
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // animasi hanya sekali
            className="relative z-20 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
              Your Ideas, Turned Into Stunning Websites. {` `}
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Hi, I’m Ahmad Kamaludin – a Front-End Developer passionate about
              transforming ideas into clean, responsive, and high-performing
              digital experiences.
            </p>
            <Button
              href="https://www.linkedin.com/in/ahmad-kamaludin-098826298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              white>
              Get in Touch
            </Button>
          </motion.div>

          <div className="relative max-w-[23rem] mx-auto md:max-w-3xl xl:mb-24">
            <div className="absolute inset-0 -top-[20rem] w-[108%] max-md:-top-[16rem] max-md:w-[200%]  left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <img
                src={heroBackground}
                className="w-full max-w-[1440px] object-contain"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>

            <BackgroundCircles />
          </div>
        </div>

        <BottomLine />
      </Section>
    </div>
  );
};

export default Hero;
