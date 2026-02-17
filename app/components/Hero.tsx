"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20">
            <ParticleBackground />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-4 font-mono text-sm tracking-widest text-gray-600 uppercase"
                >
                    Hello, I&apos;m
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-shimmer mb-6 text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl"
                >
                    Nitithorn
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-gray-700 sm:text-xl"
                >
                    A passionate student crafting digital experiences
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                >
                    <a
                        href="#projects"
                        className="glow-hover rounded-full bg-black px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-gray-800"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="glow-hover rounded-full border border-gray-200 px-8 py-3.5 text-sm font-medium text-black transition-all hover:border-black"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </div>


        </section>
    );
}
