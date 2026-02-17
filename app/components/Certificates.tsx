"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const certificates = [
    {
        title: "ประกาศนียบัตรประกวดสิ่งประดิษฐ์",
        issuer: "Attawit Commercial Technology College",
        date: "2023",
        description:
            "รางวัลเหรียญเงิน ระดับปวช ถังขยะเปิดปิดอัตโนมัติ โดยใช้ Arduino",
        image: "/images/certificate1.jpg",
    },
    {
        title: "ประกาศนียบัตรทักษะการเขียนโปรแกรม",
        issuer: "Attawit Commercial Technology College",
        date: "2024",
        description:
            "ทักษะการเขียนโปรแกรม ระดับปวส โดยใช้ C++",
        image: "/images/certificate2.jpg",
    },
];

export default function Certificates() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });


    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <section id="certificates" className="relative py-32 px-6 bg-gray-50/50">
                <div ref={ref} className="mx-auto max-w-5xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="mb-16 text-center"
                    >
                        <p className="mb-3 font-mono text-xs tracking-widest text-gray-500 uppercase">
                            Achievements
                        </p>
                        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                            Certificates
                        </h2>
                        <div className="section-divider mb-8" />
                    </motion.div>

                    {/* Certificates grid */}
                    <div className="grid gap-8 sm:grid-cols-2">
                        {certificates.map((cert, i) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                            >
                                {/* Thumbnail */}
                                <div
                                    className="relative h-48 w-full overflow-hidden cursor-pointer bg-gray-100"
                                    onClick={() => setSelectedImage(cert.image)}
                                >
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay icon on hover */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    {/* Issuer & Date */}
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                            {cert.issuer}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {cert.date}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                        {cert.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mb-6 text-sm leading-relaxed text-gray-600">
                                        {cert.description}
                                    </p>


                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Image Modal / Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-white/70 hover:text-white"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImage}
                            alt="Certificate Full View"
                            className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // ป้องกันไม่ให้คลิกที่รูปแล้วปิด Modal
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}