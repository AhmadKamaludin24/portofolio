import React from "react";
import Section from "./Section";
import Button from "./Button";
import { projects } from "../constans";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <Section
      crosses
      customPaddings
      id={"project"}
      className="pt-[12rem] max-sm:pt-[7rem] -mt-[5.25rem]"
      crossesOffset="lg:translate-y-[5.25rem]">
      <div className="max-w-[100rem] px-2 max-sm:pb-32 mx-auto relative pb-32  flex flex-col items-center">
        <div className="flex flex-col gap-5 justify-center items-center max-w-3xl">
          <h1 className="h1 text-center">
            Work That Speaks Louder Than Words.
          </h1>
          <h2 className="h6 font-code text-center max-sm:text-sm text-n-2">
            Here are some of my favorite projects where design and functionality
            meet. Each one represents my approach: thoughtful, user-focused, and
            built with precision.
          </h2>

         
        </div>
        

         <div className="flex lg:flex-wrap max-sm:flex-col gap-10 my-10">

           {projects.map((item)=>(
            <ProjectCard key={item.id} title={item.title} subtitle={item.description} imgUrl={item.imageUrl} cta={item.cta}/>
           ))}
            
           

            
          </div>

      </div>
    </Section>
  );
};

export default ProjectSection;
