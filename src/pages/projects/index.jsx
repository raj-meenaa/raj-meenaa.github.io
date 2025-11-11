import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../components/projects/projectCard";
import projects from "../../constants/projects";

const ProjectPage = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate(-1)}
                className="absolute top-6 left-6 z-50 flex items-center space-x-2 px-4 py-2.5 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-full hover:bg-neutral-700/50 transition-all duration-300 group"
            >
                <svg
                    className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                    Back
                </span>
            </motion.button>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative max-w-7xl mx-auto"
            >
                {/* Animated Background Elements */}
                <div className="absolute -top-20 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />

                {/* Project Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Floating Particles Effect */}
                <div className="absolute top-0 left-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-float" />
                <div className="absolute top-20 right-1/3 w-2 h-2 bg-blue-400/30 rounded-full animate-float-delayed" />
            </motion.div>
        </div>
    );
}

export default ProjectPage;