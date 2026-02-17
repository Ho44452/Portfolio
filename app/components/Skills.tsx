"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "HTML / CSS", level: 90 },
            { name: "JavaScript", level: 60 },
            { name: "React", level: 20 },
            { name: "Next.js", level: 20 },
            { name: "TypeScript", level: 20 },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", level: 20 },
            { name: "Python", level: 30 },
            { name: "SQL", level: 60 },
            { name: "PHP", level: 50 },
            { name: "Git", level: 60 },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Figma", level: 10 },
            { name: "Xampp", level: 70 },
            { name: "Arduino", level: 50 },
            { name: "Visual Studio Code", level: 90 },
            { name: "Adobe Creative Cloud", level: 60 },
        ],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="relative bg-gray-50/50 py-32 px-6">
            <div ref={ref} className="mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 font-mono text-xs tracking-widest text-gray-400 uppercase">
                        What I can do
                    </p>
                    <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                        Skills & Tools
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                {/* Skills grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {skills.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + gi * 0.15 }}
                            className="card-hover rounded-2xl border border-gray-100 bg-white p-8"
                        >
                            <h3 className="mb-6 text-lg font-bold tracking-tight">
                                {group.category}
                            </h3>
                            <div className="space-y-5">
                                {group.items.map((skill, si) => (
                                    <div key={skill.name}>
                                        <div className="mb-1.5 flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-700">
                                                {skill.name}
                                            </span>
                                            <span className="font-mono text-xs text-gray-400">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                                transition={{
                                                    duration: 1,
                                                    delay: 0.4 + gi * 0.15 + si * 0.08,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className="h-full rounded-full bg-black"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
