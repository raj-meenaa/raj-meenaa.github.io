import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const { name, description, href, imageSrc, technologies } = project;

  return (
    <a
      href={href}
      aria-label={`Link to ${name} project`}
      className="transition-transform duration-500 ease-in-out transform hover:scale-105"
    >
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center h-full overflow-hidden border border-quaternary rounded-xl group md:rounded-3xl"
      >
        <span className="absolute inset-0 opacity-50 bg-gradient-to-t from-black via-transparent to-transparent md:opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white bg-slate-950 bg-opacity-10 md:bg-opacity-5 group-hover:bg-opacity-20 transition-all duration-300 ease-out blur-2xl" />
        <span className="absolute bottom-0 w-full p-4 text-white md:p-6 transition-transform duration-300 transform translate-y-5 md:translate-y-full group-hover:translate-y-0 bg-slate-950 bg-opacity-60">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold md:text-4xl"
            >
              {name}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="my-2 text-sm text-center opacity-80 md:text-base"
            >
              {description}
            </motion.div>
            <div className="hidden flex-wrap justify-center gap-2 mt-4 md:flex">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </span>
        <img
          src={imageSrc}
          loading="lazy"
          alt={`${name} project image`}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </a>
  );
}