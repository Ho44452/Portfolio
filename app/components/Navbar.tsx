"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [typedText, setTypedText] = useState("");
    const fullName = "Nitithorn";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Typing animation
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullName.slice(0, i + 1));
            i++;
            if (i >= fullName.length) clearInterval(interval);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    const handleNav = useCallback((href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo with typing animation */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="group flex items-center gap-2 text-lg font-bold tracking-tight"
                >
                    <span className="inline-block h-2 w-2 rounded-full bg-black transition-transform group-hover:scale-150" />
                    <span className="font-mono">
                        {typedText}
                        <span className="typing-cursor" />
                    </span>
                </button>

                {/* Desktop links */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNav(link.href)}
                            className="relative text-sm font-medium text-gray-700 transition-colors hover:text-black"
                        >
                            <span>{link.label}</span>
                            <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-black transition-all duration-300 hover:w-full group-hover:w-full" />
                        </button>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen((p) => !p)}
                    className="relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={mobileOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                        className="block h-[1.5px] w-5 bg-black"
                    />
                    <motion.span
                        animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block h-[1.5px] w-5 bg-black"
                    />
                    <motion.span
                        animate={mobileOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                        className="block h-[1.5px] w-5 bg-black"
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-gray-100 bg-white md:hidden"
                    >
                        <div className="flex flex-col gap-1 px-6 py-4">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => handleNav(link.href)}
                                    className="py-3 text-left text-base font-medium text-gray-600 transition-colors hover:text-black"
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
