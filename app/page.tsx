"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import project1 from "@/public/project1.png";
import project2 from "@/public/project2.png";
import project3 from "@/public/project3.png";
import project4 from "@/public/project4.png";
import analytics1 from "@/public/analytics1.png";
import analytics2 from "@/public/analytics2.png";
import {
  Mail,
  ExternalLink,
  ArrowDown,
  Code2,
  Database,
  Server,
  Layout,
  Globe,
} from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";
import Analytics from "./components/Analytics";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const projects = [
  {
    title: "Cherishie",
    description:
      "Cherishie is a heartwarming platform where you can capture, share, and celebrate special moments with your loved ones.",
    image: project1.src,
    tags: ["Next.js", "Tailwind CSS", "Framer-Motion"],
    link: "https://cherishie.vercel.app/",
  },
  {
    title: "Demolnf",
    description:
      "Demolnf is a simple fullstack lost and found website to help students retrive their belongings.",
    image: project2.src,
    tags: ["Next.js", "Tailwind CSS", "Framer-Motion"],
    link: "https://demolnf.vercel.app/",
  },
  {
    title: "zyflix",
    description:
      "Zyflix is a free online movie streaming platform offering high-quality movies with no ads and no subscription required. Watch instantly anytime, anywhere.",
    image: project4.src,
    tags: ["Next.js", "Tailwind CSS", "Framer-Motion"],
    link: "https://zyflix.vercel.app/",
  },
  {
    title: "anishiex",
    description:
      "Anishiex brings you the latest anime episodes in a fast, clean, and beautifully designed platform. Stream sub or dub, discover trending shows, and enjoy a seamless anime watching experience built for fans who want convenience, speed, and quality.",
    image: project3.src,
    tags: ["Next.js", "Tailwind CSS", "Framer-Motion"],
    link: "https://anishiex.vercel.app/",
  },
];

const analyticsShowcase = [
  {
    title: "Real-Time User Traffic",
    subtitle: "GOOGLE ANALYTICS",
    description:
      "Google Analytics snapshot showing active users, traffic sources, and engagement metrics across my deployed projects. Consistent organic growth with returning visitors.",
    image: analytics1.src,
  },
  {
    title: "Backend Performance & Observability Metrics",
    subtitle: "BACKEND",
    description:
      "Real-time observability from a production environment showcasing backend stability, efficiency, and scalability under active user load. Processed 2.1K+ function invocations in 12 hours. Maintained a low 0.5% error rate with zero timeouts. Achieved consistent CPU performance with optimized response times (avg ~33ms). Ensured stable memory usage and minimal throttling during fluctuating traffic. This demonstrates a backend system built for real-world usage, delivering reliable performance and efficient resource management.",
    image: analytics2.src,
  },
];

const skills = [
  { name: "React", icon: Code2, mastery: "50%" },
  { name: "Node.js", icon: Server, mastery: "50%" },
  { name: "MongoDB", icon: Database, mastery: "70%" },
  { name: "Express", icon: Server, mastery: "45%" },
  { name: "Next.js", icon: Globe, mastery: "65%" },
  { name: "Tailwind CSS", icon: Layout, mastery: "45%" },
];

gsap.registerPlugin(ScrollToPlugin);

const Page = () => {
  const [hide, setHide] = useState(true);
  const scrollIntoView = (path: string) => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: path === "#" ? 0 : path,
      ease: "power2.inOut",
    });
  };
  useEffect(() => {
    setHide(false);
  }, []);
  if (hide) return null;
  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-white/6"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a
            onClick={() => scrollIntoView("#")}
            className="text-lg font-bold tracking-tight cursor-pointer"
          >
            Zyrill
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a
              onClick={() => scrollIntoView("#about")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => scrollIntoView("#projects")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </a>
            <a
              onClick={() => scrollIntoView("#analytics")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Analytics
            </a>
            <a
              onClick={() => scrollIntoView("#skills")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Skills
            </a>
            <a
              onClick={() => scrollIntoView("#contact")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </a>
          </div>
          <a
            onClick={() => scrollIntoView("#contact")}
            className="hidden sm:inline-flex px-4 py-2 cursor-pointer rounded-full bg-emerald-500 text-black text-sm font-semibold hover:bg-emerald-400 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-linear-to-br from-emerald-500/20 via-teal-500/10 to-transparent blur-3xl pointer-events-none" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.span
            variants={item}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-wide"
          >
            Available for work
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Zyrill Lautrezo
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-neutral-400 text-base sm:text-lg max-w-xl mx-auto"
          >
            I build fast, scalable, and user-focused web applications with the
            MERN stack &amp; Next.js.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <a
              onClick={() => scrollIntoView("#projects")}
              className="px-6 py-3 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors text-sm"
            >
              View Projects
            </a>
            <a
              onClick={() => scrollIntoView("#contact")}
              className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors text-sm"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-16">
            <a
              href="#about"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <ArrowDown className="w-5 h-5 mx-auto animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <motion.span
            variants={item}
            className="text-emerald-400 text-sm font-medium tracking-wide uppercase"
          >
            About
          </motion.span>
          <motion.h2
            variants={item}
            className="mt-3 text-3xl md:text-4xl font-bold"
          >
            A bit about me
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-6 text-neutral-400 leading-relaxed"
          >
            I&apos;m a developer focused on building modern web apps using the
            MERN stack and scalable backend systems. I care about performance,
            clean UI, and real-world usability.
          </motion.p>
          <motion.p
            variants={item}
            className="mt-4 text-neutral-400 leading-relaxed"
          >
            When I&apos;m not coding, I explore new technologies and sharpen my
            skills. I believe in writing clean, maintainable code that solves
            real problems for real people.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32 bg-white/1">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.span
            variants={item}
            className="block text-center text-emerald-400 text-sm font-medium tracking-wide uppercase"
          >
            Work
          </motion.span>
          <motion.h2
            variants={item}
            className="mt-3 text-center text-3xl md:text-4xl font-bold"
          >
            Featured Projects
          </motion.h2>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group rounded-2xl border border-white/6 bg-white/2 overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-white/5 text-neutral-300 border border-white/6"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_Blank"
                    className="inline-flex items-center gap-1.5 mt-5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    View Project <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Analytics Showcase */}
      <section id="analytics" className="py-24 md:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.span
            variants={item}
            className="block text-center text-emerald-400 text-sm font-medium tracking-wide uppercase"
          >
            Proof of Impact
          </motion.span>
          <motion.h2
            variants={item}
            className="mt-3 text-center text-3xl md:text-4xl font-bold"
          >
            Real Analytics, Real Users, Real Performance
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-4 text-center text-neutral-400 max-w-2xl mx-auto"
          >
            Not just projects these are live systems handling real traffic, real
            users, and real-world conditions.
          </motion.p>

          <div className="mt-14 flex flex-col gap-8">
            {analyticsShowcase.map((entry, index) => (
              <Analytics
                image={entry.image}
                title={entry.title}
                subtitle={entry.subtitle}
                description={entry.description}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 md:py-32 bg-white/1">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.span
            variants={item}
            className="block text-center text-emerald-400 text-sm font-medium tracking-wide uppercase"
          >
            Expertise
          </motion.span>
          <motion.h2
            variants={item}
            className="mt-3 text-center text-3xl md:text-4xl font-bold"
          >
            Skills &amp; Technologies
          </motion.h2>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="group p-5 rounded-2xl border border-white/6 bg-white/2 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-emerald-400" />
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className="text-xs text-neutral-500">
                      {skill.mastery}
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/6 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-linear-to-r from-emerald-500 to-teal-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.mastery }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-xl mx-auto px-6 text-center"
        >
          <motion.span
            variants={item}
            className="text-emerald-400 text-sm font-medium tracking-wide uppercase"
          >
            Contact
          </motion.span>
          <motion.h2
            variants={item}
            className="mt-3 text-3xl md:text-4xl font-bold"
          >
            Let&apos;s work together
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-neutral-400">
            Have a project in mind? I&apos;d love to hear about it.
          </motion.p>

          <motion.div variants={item} className="mt-8">
            <a
              href="mailto:lautrezov@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              lautrezov@gmail.com
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex justify-center gap-4"
          >
            <a
              href="https://github.com/codexstackdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/6 hover:bg-white/5 transition-colors text-neutral-400 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/6 hover:bg-white/5 transition-colors text-neutral-400 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/6 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <span>&copy; {new Date().getFullYear()} Zyrill Lautrezo</span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
};

export default Page;
