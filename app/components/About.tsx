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
                        <div className="relative">
                            {/* Decorative rings */}
                            <div className="absolute -inset-4 rounded-full border border-gray-100" />
                            <div className="absolute -inset-8 rounded-full border border-gray-50" />
                            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-gray-50">
                                <img
                                    src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/563999752_2159525777906503_796061261744362103_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=r8Ukzy85_WUQ7kNvwHiJ-BF&_nc_oc=AdnhulnMtavZfaajkXVOYsBb6Zuwl7UhZU6MOKA3asCwqAPR5Ej6THlKQBQwYjdPhz-061pvV7Z-N5AKkrudGyYl&_nc_zt=23&_nc_ht=scontent.fbkk5-3.fna&_nc_gid=ycAY0YgODT-c8uJRnwfe3Q&oh=00_AfunS80thJ1LZ0MtYbgUecHImkc_5bDE0JwdklFMZjNfYg&oe=699A50A2"
                                    alt="Nitithorn"
                                    className="h-48 w-48 rounded-full object-cover shadow-lg"
                                />
                            </div>
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
                            สวัสดีครับ ผมชื่อนายนิติธร เป็นนักศึกษาระดับประกาศนียบัตรวิชาชีพชั้นสูง จากวิทยาลัยเทคโนโลยีอรรถวิทย์พณิชยการ สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล
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
