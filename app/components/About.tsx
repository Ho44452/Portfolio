"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="relative py-32 px-6">
            <div ref={ref} className="mx-auto max-w-4xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 font-mono text-xs tracking-widest text-gray-400 uppercase">
                        Get to know me
                    </p>
                    <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                        About Me
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                {/* Content */}
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    {/* Avatar area */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative flex items-center justify-center">

                            {/* Outer ambient glow */}
                            <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-indigo-100/60 via-purple-50/40 to-transparent blur-2xl" />

                            {/* Spinning dashed ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                className="absolute h-72 w-72 rounded-full border border-dashed border-indigo-200/60"
                            />

                            {/* Static decorative rings */}
                            <div className="absolute h-64 w-64 rounded-full border border-gray-200/80" />
                            <div className="absolute h-60 w-60 rounded-full border border-gray-100/60" />

                            {/* Counter-spinning accent arc */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                                className="absolute h-56 w-56 rounded-full border-t-2 border-r-2 border-indigo-300/50 border-b-transparent border-l-transparent"
                            />

                            {/* Avatar container with gradient ring */}
                            <div className="relative h-52 w-52 rounded-full p-[3px] bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200 shadow-xl shadow-indigo-100/50">
                                <div className="h-full w-full rounded-full overflow-hidden bg-white">
                                    <img
                                        src="/images/563999752_2159525777906503_796061261744362103_n.jpg"
                                        alt="Nitithorn"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Subtle pulse ring */}
                            <motion.div
                                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0, 0.4] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute h-52 w-52 rounded-full border border-indigo-300/40"
                            />
                        </div>
                    </motion.div>

                    {/* Bio text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="space-y-5"
                    >
                        <p className="text-lg leading-relaxed text-gray-600">
                            สวัสดีครับ ผมชื่อนายนิติธร เป็นนักศึกษาระดับประกาศนียบัตรวิชาชีพชั้นสูง
                            จากวิทยาลัยเทคโนโลยีอรรถวิทย์พณิชยการ สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                            ตอนนี้ผมกำลังหาประสบการณ์และพัฒนาทักษะของตัวเองอยู่เสมอโดยการนำ AI มาประยุคใช้ให้เกิดประโยชน์สูงสุด
                            ถึงประสบการทำงานจะน้อยแต่ผมก็พร้อมเรียนรู้และพัฒนาตัวเองอยู่เสมอ
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            {["มีวินัย", "มีความคิดสร้างสรรค์", "แก้ปัญหาเก่ง", "ทำงานเป็นทีมได้ดี", "ปรับตัวเก่ง"].map(
                                (trait, i) => (
                                    <motion.span
                                        key={trait}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        className="rounded-full border border-gray-200 px-4 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-black hover:text-black"
                                    >
                                        {trait}
                                    </motion.span>
                                )
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
