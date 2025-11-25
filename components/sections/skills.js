"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
    Code2, Database, Layout, Server, Smartphone, Terminal,
    Cpu, Globe, Layers, Box
} from "lucide-react";
import Hyperspeed from "../Hyperspeed";

const skills = [
    {
        category: "Frontend",
        icon: Layout,
        items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    },
    {
        category: "AI & ML",
        icon: Cpu,
        items: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face"],
    },
    {
        category: "DevOps",
        icon: Box,
        items: ["Docker", "CI/CD", "Git", "Linux"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-background/50 relative">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Hyperspeed
                    effectOptions={{
                        onSpeedUp: () => { },
                        onSlowDown: () => { },
                        distortion: 'turbulentDistortion',
                        length: 400,
                        roadWidth: 10,
                        islandWidth: 1,
                        lanesPerRoad: 4,
                        fov: 90,
                        fovSpeedUp: 150,
                        speedUp: 2,
                        carLightsFade: 0.4,
                        totalSideLightSticks: 20,
                        lightPairsPerRoadWay: 40,
                        shoulderLinesWidthPercentage: 0.02,
                        brokenLinesWidthPercentage: 0.02,
                        brokenLinesLengthPercentage: 0.5,
                        lightStickWidth: [0.12, 0.5],
                        lightStickHeight: [1.3, 1.7],
                        movingAwaySpeed: [60, 80],
                        movingCloserSpeed: [-120, -160],
                        carLightsLength: [400 * 0.03, 400 * 0.2],
                        carLightsRadius: [0.02, 0.14],
                        carWidthPercentage: [0.1, 0.2],
                        carShiftX: [-0.8, 0.8],
                        carFloorSeparation: [0, 5],
                        colors: {
                            roadColor: 0x000000,          // Pure black
                            islandColor: 0x0A0A0A,        // Slight dark grey (near black)
                            background: 0x000000,         // Black background

                            shoulderLines: 0xCCFF00,      // Lime yellow-green
                            brokenLines: 0x99FF33,        // Brighter lime variant

                            leftCars: [
                                0x00FF66, // Neon green
                                0x33FF99, // Soft lime green
                                0x66FF33  // Bright lime
                            ],
                            rightCars: [
                                0x00CC44, // Deep green
                                0x009933, // Darker neon green
                                0x003300  // Deep forest green
                            ],

                            sticks: 0x99FF33, // Lime sticks
                        }
                    }}
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
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, scalable applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-transparent border-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        <skill.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                        {skill.category}
                                    </h3>
                                    <ul className="space-y-2">
                                        {skill.items.map((item, i) => (
                                            <li key={i} className="flex items-center text-muted-foreground">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
