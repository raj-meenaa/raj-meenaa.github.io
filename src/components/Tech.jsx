// import { RiReactjsLine } from "react-icons/ri";
// import { FaNodeJs} from "react-icons/fa";
// import Python from "../assets/Tech/python.svg";
// import Clang from "../assets/Tech/clang.svg"
// import {
//   SiExpress,
//   SiCplusplus,
//   SiJavascript,
//   SiMongodb,
//   SiMysql,
// } from "react-icons/si";
// import { motion } from "framer-motion";
// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });
// function Tech() {
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Technologies
//       </motion.h2>
//       <motion.div
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, x: -100 }}
//         transition={{ duration: 1.5 }}
//         className="flex flex-wrap justify-center items-center gap-4"
//       >
//         <motion.div
//           variants={iconVariants(1.9)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <img src={Clang} alt="" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(1)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiCplusplus className="text-7xl text-blue-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(1.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <img src={Python} alt="" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(1.9)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiJavascript className="text-7xl text-yellow-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(1.3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiMongodb className="text-7xl text-green-500" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(1.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiExpress className="text-7xl" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(1.6)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <RiReactjsLine className="text-7xl text-cyan-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <FaNodeJs className="text-7xl text-green-500" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiMysql className="text-7xl text-blue-400" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default Tech;




import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import Python from "../assets/Tech/python.svg";
import Clang from "../assets/Tech/clang.svg";
import { SiExpress, SiCplusplus, SiJavascript, SiMongodb, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Tech() {
  return (
    <div className="border-b border-neutral-800 pb-24 px-4 md:px-8 lg:px-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-16 text-3xl font-bold text-center md:my-24 md:text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
      >
        {[
          { icon: <img src={Clang} alt="C" />, duration: 1.9 },
          { icon: <SiCplusplus className="text-blue-400" />, duration: 1, color: "blue-400" },
          { icon: <img src={Python} alt="Python" />, duration: 1.5 },
          { icon: <SiJavascript className="text-yellow-400" />, duration: 1.9, color: "yellow-400" },
          { icon: <SiMongodb className="text-green-500" />, duration: 1.3, color: "green-500" },
          { icon: <SiExpress className="text-gray-100" />, duration: 1.5 },
          { icon: <RiReactjsLine className="text-cyan-400" />, duration: 1.6, color: "cyan-400" },
          { icon: <FaNodeJs className="text-green-500" />, duration: 2.5, color: "green-500" },
          { icon: <SiMysql className="text-blue-400" />, duration: 2, color: "blue-400" },
        ].map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-neutral-800 bg-neutral-900/50 hover:border-purple-600/50 transition-all duration-300"
          >
            <div className="text-6xl mb-2 transition-transform duration-300 group-hover:scale-110">
              {tech.icon}
            </div>
            <div className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-mono text-purple-400">
              {tech?.color && tech.color.split('-')[0]}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Tech;