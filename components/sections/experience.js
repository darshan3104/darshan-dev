"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import PixelBlast from "../ui/pixel-blast";

const experience = [
    {
        type: "Mini Project",
        title: "Decentralized Identity and Credential Verification System",
        company: "Mini Project",
        period: "2024 - Present",
        description: "A secure, tamper-proof platform for verifying identities and educational or professional credentials using blockchain technology.",
        skills: ["Next.js", "Node.js", "PostgreSQL", "Redux", "Solidity", "Web3.js", "MetaMask", "Ethereum"]
    },
    {
        type: "Hubby",
        title: "Phishing Detection System",
        company: "Hubby",
        period: "2024 - 2025",
        description: "Developed a machine learning-based phishing detection system to identify and prevent phishing attacks on websites.",
        skills: ["React", "Node.js", "PostgreSQL", "Redis", "Next.js", "Tailwind CSS", "TypeScript", "Git"  ]
    },
    {
        type: "Hackathon",
        title: "AI - Powered Research Paper Summarizer",
        company: "Hackathon",
        period: "2024 - 2025",
        description: "Developed an AI-powered research paper summarizer using natural language processing techniques to extract key insights and findings from research papers.",
        skills: ["Machine Learning", "Algorithms", "System Design"]
    },
    {
        type: "Hubby",
        title: "Lovix AI - An AI code editor System",
        company: "Hubby",
        period: "2025 - Present",
        description: "A smart, intelligent, and context-aware AI-powered code editor for faster, cleaner, and more intuitive software development.",
        skills: [ "Node.js", "PostgreSQL", "Redis", "Next.js", "Tailwind CSS", "TypeScript", "Git"  ]
    }
];

export default function Experience() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section id="experience" ref={containerRef} className="py-20 bg-background relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <PixelBlast
                    variant="square"
                    pixelSize={24}
                    color="#A3E635"
                    patternScale={10}
                    patternDensity={1}
                    speed={0.3}
                    enableRipples={true}
                    rippleIntensityScale={9}
                    rippleSpeed={0.5}
                    edgeFade={0.2}
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-primary">Project Journey</span>
                    </h2>
                </motion.div>

                <div className="space-y-12">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content */}
                            <div className="flex-1 w-full">
                                <Card className="border-primary/10 hover:border-primary/30 transition-colors group">
                                    <CardContent className="p-6 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                            {item.type === "work" ? <Briefcase className="w-24 h-24" /> : <GraduationCap className="w-24 h-24" />}
                                        </div>

                                        <div className="relative z-10">
                                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                                                {item.period}
                                            </span>
                                            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                            <p className="text-primary/80 font-medium mb-4">{item.company}</p>
                                            <p className="text-muted-foreground mb-4">
                                                {item.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.skills.map((skill) => (
                                                    <span key={skill} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Timeline Node */}
                            <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
                                <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(163,230,53,0.5)] z-10" />
                                <div className="absolute w-12 h-12 rounded-full bg-primary/20 animate-pulse" />
                            </div>

                            {/* Spacer */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
