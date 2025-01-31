import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-800 py-4 px-6 md:px-8 lg:px-12">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            @rajmeena
          </div>
        </motion.div>

        <div className="flex items-center gap-4 md:gap-6 text-xl md:text-2xl">
          {[
            { icon: <FaLinkedin />, href: "https://linkedin.com/in/raj-meena" },
            { icon: <FaGithub />, href: "https://github.com/raj-meenaa" },
            { icon: <FaSquareXTwitter />, href: "https://x.com/__rajmeena" },
            { icon: <FaInstagram />, href: "https://instagram.com/__rajmeena" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;