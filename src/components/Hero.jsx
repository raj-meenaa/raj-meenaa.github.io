import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
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
    <header className="flex flex-col items-center content-center justify-start py-10 md:pb-20 gap-16 md:gap-28 relative z-10">
      <motion.h1
        className="text-4xl font-semibold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        RAJ M33NA
      </motion.h1>

      <div className="relative z-20">
        <div className="absolute right-0 bg-blue-800 rounded-full blur-3xl w-72 h-72 opacity-20 -z-10"></div>

        <div className="flex flex-col items-center justify-center px-5">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center md:text-6xl"
          >
            <div className="hidden md:block">
              <Typewriter
                words={["Innovate. Code. Elevate."]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <div className="block md:hidden">
              <Typewriter
                words={["Innovate.", "Code.", "Elevate."]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </div>
          </motion.h1>

          <p className="relative max-w-3xl my-5 text-base text-center opacity-90 md:text-lg text-tertiary leading-5 md:leading-7">
            Embark on my coding adventure as I dive into diverse projects with a
            passion for programming and innovation. Join me as I explore new
            technologies, build creative solutions, and share my journey through
            the world of software development, one line of code at a time!
          </p>

          <figcaption className="font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 z-30">
            <div className="flex items-center justify-center space-x-2">
              <span>Captured at</span>
              <a
                href="https://github.com/RajMeena01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-200 z-30"
                style={{ position: "relative", zIndex: "30" }}
              >
                <ins className="underline decoration-2">DevHaven</ins>
              </a>
            </div>
          </figcaption>
        </div>
      </div>
    </header>
  );
}
