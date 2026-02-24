"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SkillLevel = "Beginner" | "Basic" | "Intermediate" | "Advanced" | "Expert";

const levelStyles: Record<SkillLevel, string> = {
    Beginner: "bg-gray-100 text-gray-600 border-gray-200",
    Basic: "bg-blue-50 text-blue-700 border-blue-200",
    Intermediate: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Advanced: "bg-purple-50 text-purple-700 border-purple-200",
    Expert: "bg-amber-50 text-amber-700 border-amber-200",
};

const levelDots: Record<SkillLevel, number> = {
    Beginner: 1,
    Basic: 2,
    Intermediate: 3,
    Advanced: 4,
    Expert: 5,
};

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "HTML / CSS", level: "Advanced" as SkillLevel },
            { name: "JavaScript", level: "Intermediate" as SkillLevel },
            { name: "React", level: "Basic" as SkillLevel },
            { name: "Next.js", level: "Basic" as SkillLevel },
            { name: "TypeScript", level: "Basic" as SkillLevel },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", level: "Basic" as SkillLevel },
            { name: "Python", level: "Basic" as SkillLevel },
            { name: "SQL", level: "Intermediate" as SkillLevel },
            { name: "PHP", level: "Intermediate" as SkillLevel },
            { name: "Git", level: "Intermediate" as SkillLevel },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Figma", level: "Beginner" as SkillLevel },
            { name: "Xampp", level: "Advanced" as SkillLevel },
            { name: "Arduino", level: "Intermediate" as SkillLevel },
            { name: "Visual Studio Code", level: "Expert" as SkillLevel },
            { name: "Adobe Creative", level: "Basic" as SkillLevel },
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
                            <div className="space-y-4">
                                {group.items.map((skill, si) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3 + gi * 0.15 + si * 0.08,
                                        }}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-2.5">
                                            {/* Skill dots indicator */}
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map((dot) => (
                                                    <span
                                                        key={dot}
                                                        className={`inline-block h-1.5 w-1.5 rounded-full ${dot <= levelDots[skill.level]
                                                            ? "bg-black"
                                                            : "bg-gray-200"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span
                                            className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${levelStyles[skill.level]
                                                }`}
                                        >
                                            {skill.level}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
