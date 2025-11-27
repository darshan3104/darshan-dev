"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GridScan } from "../GridScan";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden z-10">
            <div className="absolute inset-0 z-10">
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#392e4e"
                    gridScale={0.1}
                    scanColor="#A3E635"
                    scanOpacity={0.3}
                    enablePost
                    bloomIntensity={0.4}
                    chromaticAberration={0.001}
                    noiseIntensity={0.001}
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
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="sticky top-24"
                    >
                        <Card className="relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <CardContent className="p-8">
                                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Darshan R - Profile Picture"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Bio & Journey */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold text-primary">Darshan R</h3>
                                <p className="text-xl font-medium text-foreground/80">Full Stack Developer</p>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    Passionate about building scalable web applications and exploring the frontiers of AI.
                                    I combine technical expertise with creative problem-solving to deliver exceptional digital experiences.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-semibold border-b border-primary/20 pb-2 inline-block">My Projects</h3>
                            <div className="relative pl-8 border-l-2 border-primary/20 space-y-10">
                                {[
                                    { year: "2025", title: "AI - Powered Research Paper Summarizer", desc: "AI-ML Research" },
                                    { year: "2024", title: "Phishing Detection System", desc: "Cybersecurity" },
                                    { year: "2024", title: "Decentralized Identity and Credential Verification System", desc: "Blockchain" },
                                ].map((item, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(163,230,53,0.3)]" />
                                        <div className="text-primary font-mono text-sm mb-1">{item.year}</div>
                                        <div className="font-bold text-xl mb-1">{item.title}</div>
                                        <div className="text-muted-foreground">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
