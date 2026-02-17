"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        title: "Singpha Backhoepart E-Commerce",
        description:
            "A clean, intuitive e-commerce application with drag-and-drop functionality, filtering, and real-time updates.",
        tags: ["PHP", "Tailwind CSS", "MySQL", "JavaScript", "HTML5", "Sweetalert2"],
        link: "https://singpha.comatcproject.com",
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="relative bg-gray-50/50 py-32 px-6">
            <div ref={ref} className="mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 font-mono text-xs tracking-widest text-gray-400 uppercase">
                        What I&apos;ve built
                    </p>
                    <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                        Projects
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                {/* Projects grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                            className="card-hover group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8"
                        >
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative z-10">
                                {/* Project number */}
                                <span className="mb-4 inline-block font-mono text-xs text-gray-300">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mb-3 text-xl font-bold tracking-tight">
                                    {project.title}
                                </h3>

                                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 transition-colors group-hover:border-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Arrow icon */}
                                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors group-hover:text-black">
                                    <span>View Project</span>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        className="transition-transform group-hover:translate-x-1"
                                    >
                                        <path
                                            d="M6 3L11 8L6 13"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
