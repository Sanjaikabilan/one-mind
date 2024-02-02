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

interface Project {
  p_name: string;
  p_category: string;
  p_stack: string;
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
            <TableCell className=" text-xs sm:text-l" >{project.p_category}</TableCell>
            <TableCell className="" >
              <Badge><p className="text-xs sm:text-l" >{project.p_stack}</p></Badge>
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
