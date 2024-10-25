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
       className="my-20 text-center text-4xl">Projects</motion.h2>
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
                <a href="/#projects" className="inline-flex items-center font-medium text-purple-600 hover:underline">
                        Explore all projects
                        <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </p>
            </div>
        </div>
    );
}

