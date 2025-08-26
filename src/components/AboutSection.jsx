import React from "react";
import Section from "./Section";
import { collabApps } from "../constans";
import {LeftCurve, RightCurve} from "./design/Collaboration"
import Button from "./Button";

const AboutSection = () => {
  return (
    <Section
      crosses
      id="about"
      className="pt-[12rem] px-7 max-sm:pt-[8rem] -mt-[5.25rem]"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings>
      <div className="lg:max-w-[100rem] w-full max-sm:pb-32 mx-auto relative py-24 flex max-md:flex-col items-center justify-between  lg:gap-10">
        <div className="flex flex-col gap-5 lg:max-w-3xl">
          <h1 className="h1  ">
            Pixels Are My Playground, Code Is My Language.
          </h1>
          <h2 className="h6 font-code text-n-2 max-sm:text-sm">
            I love the harmony between design and development. With a deep
            passion for visuals and clean code, I turn static concepts into
            interactive, responsive experiences. My approach combines aesthetics
            with performance, ensuring your ideas look great and work flawlessly
            across any device.
          </h2>
          <Button href="#project" className={"w-96 absolute lg:-bottom-[1.7rem] lg:left-[5.5rem]"} >
            See my work 
            </Button>
        </div>
        <div className="flex flex-col flex-1 justify-center pt-32 items-center gap-5">
          <div className="relative flex left-1/2 -translate-x-1/2 scale:77 lg:w-[32rem] w-[20rem] aspect-square border border-n-6 rounded-full">
          <div className="flex lg:w-80 w-56 m-auto border border-n-6 aspect-square rounded-full">
            <div className="aspect-square w-[10rem] bg-conic-gradient p-[0.2rem] m-auto rounded-full">
                <div className="h-full w-full flex justify-center items-center bg-n-6 rounded-full">
                    <img src="/ak.png" alt="kamal" className="w-full object-contain" />
                </div>
            </div>
          </div>
          <ul>{collabApps.map((item, index)=>(
            <li key={index} className={`absolute left-1/2 top-0 h-1/2 -ml-[2.1rem] origin-bottom rotate-${index * 45}`}>
                <div className="relative -top-[2.6rem] flex w-[4.2rem] h-[4.2rem] border border-n-6 rounded-full bg-n-11 p-">
                    <img src={item.icon} className="m-auto" alt="logo" width={item.width} height={item.height}/>
                </div>
            </li>
          ))}</ul>
          <LeftCurve />
          <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
