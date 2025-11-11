// import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
// import { motion } from "framer-motion";

// function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-800 py-4 px-6 md:px-8 lg:px-12">
//       <div className="flex items-center justify-between max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="flex items-center gap-2"
//         >
//           <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
//             @rajmeena
//           </div>
//         </motion.div>

//         <div className="flex items-center gap-4 md:gap-6 text-xl md:text-2xl">
//           {[
//             { icon: <FaLinkedin />, href: "https://linkedin.com/in/raj-meena" },
//             { icon: <FaGithub />, href: "https://github.com/raj-meenaa" },
//             { icon: <FaSquareXTwitter />, href: "https://x.com/__rajmeena" },
//             { icon: <FaInstagram />, href: "https://instagram.com/__rajmeena" },
//           ].map((link, index) => (
//             <motion.a
//               key={index}
//               href={link.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -3 }}
//               className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               {link.icon}
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "sticky top-0 z-50 border-b px-4 sm:px-6 lg:px-8",
        "backdrop-blur-md transition-colors duration-300",
        // base glass
        "bg-neutral-950/50 border-neutral-800/60",
        // on scroll: slightly darker + soft shadow
        scrolled ? "bg-neutral-950/70 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]" : "",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-2.5 md:py-3.5">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            @rajmeena
          </div>
        </motion.div>

        {/* Socials (UI only) */}
        <div className="flex items-center gap-2.5 md:gap-3.5 text-xl md:text-2xl">
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
              whileHover={{ y: -2 }}
              className={[
                "rounded-full p-2",
                "text-gray-300 hover:text-purple-300",
                "hover:bg-neutral-800/60 focus:outline-none focus:ring-2 focus:ring-purple-500/40",
                "transition-all duration-200",
              ].join(" ")}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              aria-label="social-link"
              title="social"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* subtle bottom hairline gradient for consistency with the page aesthetic */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </nav>
  );
}

export default Navbar;
