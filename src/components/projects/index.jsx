import projects from "../../constants/projects";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-start px-5 py-10 overflow-hidden">
      <div className="flex flex-col  items-center  justify-center w-full max-w-4xl gap-5">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h2>
        <div className="relative w-full">
          <div className="absolute w-full h-full overflow-hidden bg-blue-300 rounded-full opacity-10 blur-3xl -right-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects
              .filter((_project, index) => index < 4)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </div>
        <p className="w-full mt-5 text-base text-right text-gray-500">
          <a
            href="/#projects"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            <span className="text-lg md:text-xl font-medium bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Explore All Projects
            </span>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 -translate-x-1 group-hover:translate-x-0 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
          </a>
        </p>
      </div>
    </div>
  );
}