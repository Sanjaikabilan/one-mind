"use client";

import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"; // Import necessary components
import { ArrowUpRight } from "lucide-react"; // Import ArrowUpRight icon
import { Badge } from "../ui/badge";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
  Key,
} from "react";

import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import CursorCircle from "../CursorCircle";

interface Project {
  id : number;
  title : string | null;
  domain: string | null;
  category: string | null;
  stack: any;
  preview: string | null;
  previewImage: string | null;
}



interface Props {
  projects: Project[];
}

const ProjectTable: React.FC<Props> = ({ projects }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const previewRef = useRef(null);
  let timeoutId = useRef<number | null>(null);
  let isTouchDevice = false;

if (typeof window !== 'undefined') {
  isTouchDevice = window.matchMedia('(hover: none)').matches;
}

  const handleMouseOver = (
    e: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
    preview: string | React.SetStateAction<null>
  ) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setPreviewImage(preview as React.SetStateAction<null>);
    gsap.to(previewRef.current, {
      x: e.clientX,
      y: e.clientY,
      opacity: 1,
      duration: 0.3,
    });
  };

  const handleMouseOut = () => {
    if (timeoutId.current !== null) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = window.setTimeout(() => {
      setPreviewImage(null);
      gsap.to(previewRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }, 300); // delay in milliseconds
  };

  const handleMouseMove = (e: { clientX: any; clientY: any }) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    let x = e.clientX + 50;
    let y = e.clientY;

    // Adjust the x position if the preview div would go out of the viewport
    if (x + 250 > screenWidth) {
      // 250 is the width of the preview div
      x = screenWidth - 250;
    }

    // Adjust the y position if the preview div would go out of the viewport
    if (y + 150 > screenHeight) {
      // 150 is the height of the preview div
      y = e.clientY - 150;
    }

    gsap.to(previewRef.current, {
      x: x,
      y: y,
      duration: 0.3,
    });
  };
  return (
    <>
      {/* <CursorCircle /> */}
      <Table>
        <TableCaption className="dark:bg-white bg-brand-sunglow text-black/70 dark:text-black">
          A list of works till now
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Project Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stack</TableHead>
            <TableHead className="text-right">Preview</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium interactable" datatype="name">
                {project.title}
              </TableCell>
              <TableCell className=" text-xs sm:text-l">
                {project.category}
              </TableCell>
              <TableCell className="sm:grid sm:gap-2 sm:grid-cols-4">
                {project.stack.map(
                  (
                    stackItem:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined,
                    stackIndex: Key | null | undefined
                  ) => (
                    <div
                      key={stackIndex}
                      className="text-xs mb-1.5 pl-1 pr-1 sm:text-l w-17 sm:max-w-20 dark:text-white border border-brand-sunglow rounded-lg justify-center text-center"
                    >
                      {stackItem}
                    </div>
                  )
                )}
                {/*  */}
              </TableCell>
              <TableCell
                className="text-right hover:underline interactable"
                // datatype="link"
                data-type="link"
                onMouseOver={(e) =>
                  !isTouchDevice && handleMouseOver(e, project.preview)
                }
                onMouseOut={handleMouseOut}
                onMouseMove={handleMouseMove}
              >
                <a
                  href={project.preview || ""}
                  className="justify-end items-center flex"
                >
                  <span className="">Link</span>
                  <ArrowUpRight size={18} />
                </a>
                <div
                  ref={previewRef}
                  onMouseOver={() => clearTimeout(timeoutId.current!)}
                  onMouseOut={handleMouseOut}
                  className="bg-sunglow-100 fixed top-0 left-0 z-20 transition-all duration-500 ease-in-out flex justify-center items-center h-[150px] w-[250px] pointer-events-none"
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    opacity: opacity,
                  }}
                >
                  {project.previewImage && (
                    <Image
                      src={project.previewImage}
                      alt="preview"
                      width={300}
                      height={300}
                      className="shadow-lg w-[80%] h-[70%]"
                    />
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ProjectTable;
