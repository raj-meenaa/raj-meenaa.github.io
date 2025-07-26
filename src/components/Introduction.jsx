import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Introduction() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <header className="flex flex-col items-center justify-start py-12 md:pt-24 px-4 sm:px-6 relative z-10">
      <motion.div
        className="relative w-full max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated background elements */}
        <div className="absolute -top-20 right-1/4 bg-blue-800 rounded-full blur-[100px] w-72 h-72 opacity-20 -z-10 md:blur-[150px] md:w-96 md:h-96" />
        <div className="absolute top-1/3 left-1/4 bg-pink-600 rounded-full blur-[80px] w-64 h-64 opacity-15 -z-10 md:blur-[120px] md:w-80 md:h-80" />

        {/* Main name heading */}
        <motion.h1
          className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600
                     md:text-6xl lg:text-7xl xl:text-8xl mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          RAJ MEENA
        </motion.h1>

        {/* Typewriter section */}
        <motion.div
          className="relative z-20 mb-10 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-6 md:text-4xl lg:text-5xl text-gray-100">
              <div className="hidden md:block">
                <Typewriter
                  words={["Innovate. Code. Elevate.", "Build. Learn. Repeat.", "Design. Develop. Deliver."]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                  cursorColor="#9333ea"
                />
              </div>
              <div className="block md:hidden">
                <Typewriter
                  words={["Innovate.", "Code.", "Elevate.", "Build.", "Learn.", "Repeat."]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1000}
                  cursorColor="#9333ea"
                />
              </div>
            </h2>

            {/* Description paragraph */}
            <motion.p
              className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 md:text-xl md:leading-relaxed
                         lg:text-2xl lg:leading-relaxed mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Embark on a coding adventure through innovative projects and technological exploration. 
              Join me in building creative solutions while sharing insights from my software development journey.
            </motion.p>

            {/* Call-to-action section */}
            <motion.div
              className="group inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="https://github.com/raj-meenaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                <span className="text-lg md:text-xl font-medium bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Explore My Work on
                </span>
                <span className="ml-2 text-xl md:text-2xl font-bold underline decoration-2 underline-offset-4 decoration-purple-500/50 hover:decoration-purple-400 transition-all">
                  DevHaven
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
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}