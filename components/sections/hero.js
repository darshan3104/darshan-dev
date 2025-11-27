"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import PixelBlast from "@/components/ui/pixel-blast";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
            {/* PixelBlast Background */}
            <div className="absolute inset-0 z-0">
                <PixelBlast
                    variant="square"
                    pixelSize={24}
                    color="#A3E635"
                    patternScale={2}
                    patternDensity={1}
                    speed={0.3}
                    enableRipples={true}
                    rippleIntensityScale={9}
                    rippleSpeed={0.5}
                    edgeFade={0.2}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                        <span className="text-sm font-medium text-primary animate-pulse">
                            Available for new projects
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-gradient-x">
                            Future of Web
                        </span>
                    </h1>

                    <div className="h-12 mb-8 overflow-hidden">
                        <div className=" text-xl md:text-2xl text-muted-foreground" data-text="Full-Stack Developer | AI Engineer | Innovator">
                            Full-Stack Developer | AI Engineer | Innovator
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Button variant="neon" size="lg" className="w-full sm:w-auto text-base group" asChild>
                            <a href="#experience">
                                View My Work
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-base" asChild>
                            <a href="/Darshan Resume.pdf" download="Darshan_Resume.pdf">
                                Download CV
                                <Download className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        {[[Github, "https://github.com/darshan3104"], [Linkedin, "https://www.linkedin.com/in/darshan-r-857057250"]].map(([Icon, href], index) => (
                            <motion.a
                                key={index}
                                href={href}
                                whileHover={{ scale: 1.1, color: "#A3E635" }}
                                className="text-muted-foreground transition-colors"
                            >
                                <Icon className="h-6 w-6" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
