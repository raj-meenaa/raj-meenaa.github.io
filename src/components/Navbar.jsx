import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
function Navbar() {
  return <nav className="mb-0 flex items-center justify-between pt-6">
  <div className="flex flex-shrink-0 items-center">
  <div className="mx-2 text-4xl font-bold">@</div>
  </div>
  <div className="m-8 flex items-center justify-center gap-4 text-2xl">
  <a href="https://www.linkedin.com/in/raj-meena/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    <a href="https://github.com/raj-meenaa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    <a href="https://x.com/__rajmeena" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
    <a href="https://www.instagram.com/__rajmeena/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    
  </div>
</nav>
}

export default Navbar