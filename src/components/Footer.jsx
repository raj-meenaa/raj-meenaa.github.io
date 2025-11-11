// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

// function Footer() {
//   const [date, setDate] = useState(null);

//   useEffect(() => setDate(new Date().getFullYear()), []);

//   return (
//     <div className="border-b border-neutral-900 pb-12 md:pb-16">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="mb-4 mt-16  text-3xl font-bold text-center md:mt-18 md:mb-4 md:text-4xl"
//       >
//         Get in Touch
//       </motion.h2>

//       <div className="text-center">
//         <div className="flex flex-wrap justify-center gap-6 px-4 text-3xl md:text-4xl">
//           {[
//             { icon: <FaLinkedin />, href: "https://linkedin.com/in/raj-meena" },
//             { icon: <FaGithub />, href: "https://github.com/raj-meenaa" },
//             { icon: <FaSquareXTwitter />, href: "https://x.com/__rajmeena" },
//             { icon: <FaInstagram />, href: "https://instagram.com/__rajmeena" }
//           ].map((link, index) => (
//             <motion.a
//               key={index}
//               whileInView={{ opacity: 1, scale: 1 }}
//               initial={{ opacity: 0, scale: 0.5 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               href={link.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 transition-all duration-300 rounded-full hover:text-purple-400 hover:bg-neutral-900/50"
//             >
//               {link.icon}
//             </motion.a>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="mt-4 text-sm font-medium tracking-wide text-center text-neutral-400 md:text-base"
//         >
//           &copy; {date} Site by Raj M33NA. All rights reserved.
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// export default Footer;

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaSquareXTwitter,
  FaInstagram,
} from "react-icons/fa6";

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [copied, setCopied] = useState(false);

  const socials = [
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/raj-meena",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/raj-meenaa",
      label: "GitHub",
    },
    {
      icon: <FaSquareXTwitter />,
      href: "https://x.com/__rajmeena",
      label: "X (Twitter)",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/__rajmeena",
      label: "Instagram",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("heyrajmeena@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };
  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-20">
      {/* Footer band */}
      <div className="relative z-10 border-t border-neutral-800 ">
        {/* subtle background glow */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="mx-auto h-full max-w-5xl bg-[radial-gradient(60%_50%_at_50%_0%,rgba(168,85,247,0.10),transparent_70%)]" />
        </div>

        <div className="mx-auto w-full max-w-5xl px-5 py-10 md:py-12">
          {/* mini-CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <p className="text-sm tracking-widest text-purple-300/80">
              LET’S CONNECT
            </p>

            <h2 className="text-2xl font-semibold text-neutral-100 md:text-3xl">
              Open to SDE roles & interesting collabs
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:heyrajmeena@gmail.com"
                className="rounded-full border border-purple-500/30 px-4 py-2 text-sm font-medium text-neutral-100 transition-colors hover:border-purple-400 hover:bg-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                Email me
              </a>
              <button
                onClick={handleCopy}
                className="rounded-full px-4 py-2 text-sm font-medium text-neutral-300/90 hover:text-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-600"
                aria-live="polite"
              >
                {copied ? "Copied ✓" : "Copy email"}
              </button>
            </div>

            {/* social icons row – smaller & calmer than main sections */}
            <div className="mt-2 flex flex-wrap justify-center gap-4 text-2xl text-neutral-300 md:text-3xl">
              {socials.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="rounded-full p-2 transition-all hover:scale-110 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/60"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* fine print */}
          <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-400 md:flex-row md:text-left">
            <p className="order-2 md:order-1">
              &copy; {year} Raj Meena — All rights reserved.
            </p>

            <button
              type="button"
              onClick={handleBackToTop}
              className="order-1 inline-flex items-center gap-2 rounded-full px-3 py-2 text-neutral-300 transition-all hover:text-purple-300 hover:bg-neutral-800/60 focus:outline-none focus:ring-2 focus:ring-purple-500 md:order-2"
              aria-label="Back to top"
              title="Back to top"
            >
              Back to top
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
