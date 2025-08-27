import React from "react";
import Button from "./Button";

const ProjectCard = ({title, subtitle, imgUrl, cta}) => {
  return (
    <div
      className="block relative p-0.5 bg-n-8 h-[40rem] max-sm:h-auto max-sm:w-full bg-no-repeat bg-[length:100%_100%]"
      style={{
        backgroundImage: "url(/card-1.svg)",
      }}>
      <div className="relative  z-2 p-12 max-sm:p-4 flex flex-col justify-between h-full">
  <div>
    <div className="h-[16rem] object-cover -z-4 rounded-3xl overflow-hidden">
      <img
        src={imgUrl}
        className="h-full w-full object-contain rounded-3xl"
        alt="project image"
      />
    </div>
    <div className="mt-5">
      <h1 className="h3">{title}</h1>
      <h2 className="min-h-[5rem]">{subtitle}</h2>
    </div>
  </div>
  <div className="mt-5 flex justify-end">
    <Button href={cta} px={"px-5"} py={"py-2.5"}>
      View Project
    </Button>
  </div>
</div>

    </div>
  );
};

export default ProjectCard;
