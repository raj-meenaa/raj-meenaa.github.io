import projects from "../../constants/projects";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="border-b border-neutral-900 pb-12 md:pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-8 text-3xl font-bold text-center md:my-18 md:text-4xl"
      >
        Projects
      </motion.h2>

      <div className="relative mx-auto w-full max-w-5xl px-4 md:px-8">
        {/* soft background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(60%_40%_at_50%_0%,rgba(96,165,250,0.25),transparent_70%)]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 place-items-center">
          {projects
            .filter((_p, i) => i < 4)
            .map((project, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="w-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </div>

        {/* centered CTA, not right-aligned */}
        <div className="mt-6 flex justify-center">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 px-4 py-2 text-sm font-medium text-purple-300 transition-all hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          >
            Explore All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 -translate-x-0.5 transition-transform group-hover:translate-x-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
