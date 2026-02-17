"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 py-8 px-6">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-sm text-gray-400"
                >
                    © {new Date().getFullYear()} Nitithorn. All rights reserved.
                </motion.p>


            </div>
        </footer>
    );
}
