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
    <header className="flex flex-col items-center content-center justify-start py-10 md:pb-20 gap-16 md:gap-28">
      
      <motion.h1
        className="text-4xl font-semibold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
          RaJ M33NA
      </motion.h1>

      <div className="relative">
        <div className="absolute right-0 bg-blue-800 rounded-full blur-3xl w-72 h-72 opacity-20"></div>

        <div className="flex flex-col items-center justify-center px-5">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center md:text-6xl"
          >
            <Typewriter
              words={['Innovate. Code. Elevate.']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h1>

          <p className="relative max-w-3xl my-5 text-base text-center opacity-90 md:text-lg text-tertiary leading-5 md:leading-7">
            Embark on my coding adventure as I dive into diverse projects with a
            passion for programming and innovation. Join me as I explore new
            technologies, build creative solutions, and share my journey through
            the world of software development, one line of code at a time!
          </p>
        </div>
      </div>
    </header>
  );
}







// TSparticles




// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { loadFull } from "tsparticles";
// import Particles from "react-tsparticles";
// import { useCallback } from "react";

// export default function Hero() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   // tsParticles config
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   const particlesOptions = {
//     fpsLimit: 60,
//     interactivity: {
//       events: {
//         onHover: {
//           enable: true,
//           mode: "repulse",
//         },
//         resize: true,
//       },
//       modes: {
//         repulse: {
//           distance: 200,
//         },
//       },
//     },
//     particles: {
//       color: {
//         value: "#FF0000",
//       },
//       links: {
//         color: "#ffffff",
//         distance: 150,
//         enable: true,
//         opacity: 0.5,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 2,
//         direction: "none",
//         outMode: "bounce",
//       },
//       number: {
//         value: 50,
//         density: {
//           enable: true,
//           value_area: 800,
//         },
//       },
//       opacity: {
//         value: 0.5,
//       },
//       shape: {
//         type: "circle",
//       },
//       size: {
//         value: 5,
//         random: true,
//       },
//     },
//     detectRetina: true,
//   };

//   return (
//     <header className="relative flex flex-col items-center content-center justify-start py-10 md:pb-20 gap-16 md:gap-28">
//       {/* Particles Background */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={particlesOptions}
//         className="absolute top-0 left-0 w-full h-full z-0" // Fullscreen background
//       />

//       {/* Hero Content */}
//       <motion.h1
//         className="text-4xl font-semibold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 z-10"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         RaJ M33NA
//       </motion.h1>

//       <div className="relative z-10">
//         <div className="absolute right-0 bg-blue-800 rounded-full blur-3xl w-72 h-72 opacity-20"></div>

//         <div className="flex flex-col items-center justify-center px-5">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl font-bold text-center md:text-6xl"
//           >
//             <Typewriter
//               words={["Innovate. Code. Elevate."]}
//               loop={0}
//               cursor
//               cursorStyle="_"
//               typeSpeed={50}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </motion.h1>

//           <p className="relative max-w-3xl my-5 text-base text-center opacity-90 md:text-lg text-tertiary leading-5 md:leading-7">
//             Embark on my coding adventure as I dive into diverse projects with a
//             passion for programming and innovation. Join me as I explore new
//             technologies, build creative solutions, and share my journey through
//             the world of software development, one line of code at a time!
//           </p>
//         </div>
//       </div>
//     </header>
//   );
// }
