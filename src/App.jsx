// import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer";
// import Experience from "./components/Experience";
// import Introduction from "./components/Introduction";
// import Navbar from "./components/Navbar";
// import Tech from "./components/Tech";
// import Project from "./components/projects/index";
// import ProjectPage from "./pages/projects";

// function App() {
//   return (
//     <Router>
//       <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
//         <div className="fixed top-0 -z-10 h-full w-full">
//           <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
//         </div>

//         <div className="container mx-auto px-8">
//           <Navbar />
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Introduction />
//                   <Tech />
//                   <Experience />
//                   <Project />
//                 </>
//               }
//             />
//             <Route path="/projects" element={<ProjectPage />} />
//           </Routes>
//           <Footer />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Project from "./components/projects/index";
import ProjectPage from "./pages/projects";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-500/30 selection:text-purple-200">
        {/* Animated background layer */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]">
            {/* Animated gradient overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-[linear-gradient(45deg,rgba(99,102,241,0.1),rgba(168,85,247,0.1))]"
              style={{
                animation: 'pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
            />
          </div>
          
          {/* Animated noise texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Introduction />
                    <Tech />
                    <Experience />
                    <Project />
                  </motion.div>
                }
              />
              <Route
                path="/projects"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectPage />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;