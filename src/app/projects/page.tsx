"use client";
import React, { useEffect, useState } from "react";
import SectionTemplate from "@/components/landing-page/section-template";
import ProjectTable from "@/components/projects/project-table";
import { Skeleton } from "@/components/ui/skeleton";
import { getProjects } from "@/lib/supabase/queries";
import { Projects } from "@/lib/supabase/supabase.types";

const ProjectPage = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Projects[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        const transformedProjects = projectsData.map((project) => ({
          ...project,
          stack: project.stack ?? [""],
        }));
        setProjects(transformedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <section>
        <div className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
          <SectionTemplate title="Works of mine" pill="✨ Projects" />
        </div>
      </section>
      <section>
        <div className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
          <div className="md:max-w-[750px] w-full lg:max-w-[950px]">
            {loading ? (
              <div className="">
                <div className=" grid grid-cols-4 grid-rows-2 gap-5">
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                </div>
                <div className=" -mt-8 grid grid-cols-4 grid-rows-2 gap-5">
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                  <Skeleton className="h-10 " />
                </div>
              </div>
            ) : (
              <ProjectTable projects={projects} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
