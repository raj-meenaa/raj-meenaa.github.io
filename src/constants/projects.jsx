import project1 from "../assets/projects/Drum-kit.png";
import project2 from "../assets/about.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
const projects = [
    {
        name: "Twitter Clone",
        description: "Twitter clone with a full-featured interface for posting tweets, following users, and engaging with content. Includes responsive design for seamless use on both desktop and mobile devices.",
        href: "https://github.com/RajMeena01/twitter-clone",
        imageSrc: project2,
        technologies: ["Node.js", "React.js", "Express.js", "mongoDB"],
    },
    {
        name: "Book Store",
        description: "MERN stack book store project with a comprehensive book management system. Allows sellers to manage inventory, track sales, and handle orders, all through a responsive and user-friendly interface for seamless book management.",
        href: "https://github.com/RajMeena01/BookStore",
        imageSrc: project3,
        technologies: ["Node.js", "React.js", "Express.js", "mongoDB"],
    },
    {
        name: "Drum-Kit",
        description: "Interactive drum kit application featuring diverse drum sounds, with support for both keyboard and mouse inputs. Designed with a responsive, user-friendly interface for optimal playability across desktop and mobile devices.",
        href: "https://rajmeena01.github.io/drumkit/",
        imageSrc: project1,
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        name: "Tic-Tac",
        description: "Classic Tic-Tac-Toe game with an intuitive interface. Play against another player, featuring responsive design for seamless gameplay across both desktop and mobile devices.",
        href: "https://github.com/RajMeena01/tictac",
        imageSrc: project4,
        technologies: ["HTML", "CSS", "JavaScript"],
    },
]

export default projects;
