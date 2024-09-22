import { motion } from "framer-motion";
function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <div className="pt-6 my-auto text-center space-y-4">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-xl font-semibold tracking-wide text-gray-200 md:text-3xl"
            >
              Hello, fellow tech explorer!
              <br />
              Dive into my world where coding meets creativity, and innovation sparks exciting new possibilities.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="py-3 italic font-medium tracking-wide text-white text-md md:text-lg opacity-90"
            >
              I&apos;m a software developer fueled by a passion for coding and discovering new technologies. <br /> Occasionally, I <del className="px-1 text-white line-through bg-red-600"> disrupt </del> <ins className="px-1 text-white bg-blue-800"> optimize </ins> my development environment. <br /> I’m excited to bring my skills to projects that inspire innovation and deliver impactful results.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
