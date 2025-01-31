import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
  const [date, setDate] = useState(null);

  useEffect(() => setDate(new Date().getFullYear()), []);

  return (
    <div className="border-b border-neutral-900 pb-12 md:pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-3xl font-bold text-center md:my-20 md:text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center">
        <div className="flex flex-wrap justify-center gap-6 px-4 text-3xl md:text-4xl">
          {[
            { icon: <FaLinkedin />, href: "https://linkedin.com/in/raj-meena" },
            { icon: <FaGithub />, href: "https://github.com/raj-meenaa" },
            { icon: <FaSquareXTwitter />, href: "https://x.com/__rajmeena" },
            { icon: <FaInstagram />, href: "https://instagram.com/__rajmeena" }
          ].map((link, index) => (
            <motion.a
              key={index}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 transition-all duration-300 rounded-full hover:text-purple-400 hover:bg-neutral-900/50"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 text-sm font-medium tracking-wide text-center text-neutral-400 md:text-base"
        >
          &copy; {date} Site by Raj M33NA. All rights reserved.
        </motion.div>
      </div>
    </div>
  );
}
export default Footer;