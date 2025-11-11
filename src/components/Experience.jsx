import { EXPERIENCES } from "../constants/experience";
import { motion } from "framer-motion";
function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-12 md:pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-8 text-3xl font-bold text-center md:my-18 md:text-4xl"
      >
        Experience
      </motion.h2>

      <div className="px-4 md:px-8">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-12 last:mb-0 group">
            <div className="flex flex-wrap gap-6 lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/5 min-w-[200px]"
              >
                <p className="text-lg font-mono text-purple-400 md:text-xl">
                  {experience.year}
                </p>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-2/3 relative pl-6 border-l-2 border-purple-900/30"
              >
                <h6 className="mb-2 text-xl font-semibold md:text-2xl">
                  {experience.role}
                  <span className="block mt-1 text-sm font-medium text-purple-300 md:text-base">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-4 text-base leading-relaxed text-neutral-300 md:text-lg">
                  {experience.description}
                </p>
                {/* <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs font-mono rounded-full bg-neutral-900/80 text-purple-400 md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience;
