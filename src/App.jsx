import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Introduction />
                  <Tech />
                  <Experience />
                  <Project />
                </>
              }
            />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
