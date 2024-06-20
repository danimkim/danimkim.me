import * as React from "react";
import CommonSection from "../CommonSection";
import ProjectCard from "./ProjectCard.component";

export default function ProjectSection() {
  return (
    <CommonSection className="lg:items-center">
      {/* a11y-hidden */}
      <h2 className="hidden">Selected Projects</h2>

      <div className="lg:w-full lg:h-1/3 lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:gap-4 ">
        <ProjectCard title="Alacarte Mall" onClickHandler={() => {}} />
        <ProjectCard title="HLI Website" onClickHandler={() => {}} />
        <ProjectCard title="Kiwitter" onClickHandler={() => {}} />
        <ProjectCard title="Project02" onClickHandler={() => {}} />
      </div>
    </CommonSection>
  );
}
