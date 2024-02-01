import Header from "@/components/landing-page/header";
import React from "react";
import Image from "next/image";
import { CLIENTS } from "@/lib/data/constants";
import Bentogrid from "@/components/projects-page/bento-grid";

const ProjectsPage = () => {
  return (
    <main>
      <Header></Header>
      <Bentogrid></Bentogrid>
    </main>
  );
};

export default ProjectsPage;
