import SectionTemplate from "@/components/landing-page/section-template";
import ProjectTable from "@/components/projects/project-table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { ArrowUpRight } from "lucide-react";
import React from "react";

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
    </>
  );
};

export default ProjectPage;
