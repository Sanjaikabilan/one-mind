import SectionTemplate from "@/components/landing-page/section-template";
import ProjectTable from "@/components/projects/project-table";
import { PROJECTS } from "@/lib/data/constants";
import React from "react";
import { getProjects } from "@/lib/supabase/queries";




const ProjectPage = () => {
  return (
    <>
      <section>
        <div
          className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col
        gap-4 md:justify-center md:items-center"
        >
          <SectionTemplate
            title="Works of mine"
            pill="✨ Projects"
          ></SectionTemplate>
        </div>
      </section>

      <section>
        <div
          className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col
        gap-4 md:justify-center md:items-center"
        >
          <div className=" md:max-w-[750px] w-full lg:max-w-[950px]">
          <ProjectTable projects={PROJECTS} />
          </div>
        </div>
      </section>
      <section>

      </section>
    </>
  );
};

export default ProjectPage;
