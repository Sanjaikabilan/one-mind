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
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";

interface Project {
  p_name: string;
  p_category: string;
  p_stack: any;
  preview: string;
}

interface Props {
  projects: Project[];
}

const ProjectTable: React.FC<Props> = ({ projects }) => {
  return (
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
            <TableCell className="font-medium">{project.p_name}</TableCell>
            <TableCell className=" text-xs sm:text-l">
              {project.p_category}
            </TableCell>
            <TableCell className="sm:grid sm:gap-2 sm:grid-cols-4">
                {project.p_stack.map((stackItem: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined, stackIndex: Key | null | undefined) => (
                    <div key={stackIndex} className="text-xs mb-1.5 pl-1 pr-1 sm:text-l w-17 sm:max-w-20 dark:text-white border border-brand-sunglow rounded-lg justify-center text-center">{stackItem}</div>
                ))}
              {/*  */}
            </TableCell>
            <TableCell className="text-right hover:underline">
              <a
                href={project.preview}
                className="justify-end items-center flex"
              >
                <span className="">Link</span>
                <ArrowUpRight size={18} />
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProjectTable;
