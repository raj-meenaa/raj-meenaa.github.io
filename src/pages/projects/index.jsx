import { useNavigate } from "react-router-dom";
import ProjectCard from "../../components/projects/projectCard";
import projects from "../../constants/projects";

const ProjectPage = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col items-center p-10 overflow-hidden">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="absolute top-5 left-5 flex items-center px-3 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
                {/* Back Button Icon */}
                <svg
                    className="w-5 h-5 mr-2"
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
                Back
            </button>

            <div className="relative max-w-4xl mt-12">
                <div className="absolute w-full h-full overflow-hidden bg-blue-300 rounded-full opacity-10 blur-3xl -right-20"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-2 md:gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;

