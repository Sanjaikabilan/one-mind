"use client";
import SectionTemplate from "@/components/landing-page/section-template";
import ProjectTable from "@/components/projects/project-table";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PROJECTS } from "@/lib/data/constants";
import { getProjects } from "@/lib/supabase/queries";
import { Projects } from "@/lib/supabase/supabase.types";
import { ArrowUpRight } from "lucide-react";
import { title } from "process";
import React, {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";

const ProjectPage = () => {
  const [project, setProject] = useState<Projects[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        const transformedProjects = projectsData.map((project) => ({
          ...project,
          stack: project.stack ?? [""], // Provide a default value of an empty array if stack is null
        }));
        setProject(transformedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

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
            <ProjectTable projects={project}></ProjectTable>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
