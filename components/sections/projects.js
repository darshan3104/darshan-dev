"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, X, Award, FileText } from "lucide-react";

const certifications = [
    {
        id: 1,
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2024",
        image: "/api/placeholder/600/400",
        skills: ["Cloud Architecture", "Security", "Scalability"],
        credentialLink: "#",
        details: "Validated expertise in designing distributed systems on AWS. Covers advanced networking, security, and cost-optimization strategies."
    },
    {
        id: 2,
        title: "Meta Front-End Developer",
        issuer: "Meta",
        date: "2023",
        image: "/api/placeholder/600/400",
        skills: ["React", "UX/UI", "JavaScript"],
        credentialLink: "#",
        details: "Comprehensive professional certificate covering advanced React patterns, responsive design principles, and web accessibility standards."
    },
    {
        id: 3,
        title: "Google Data Analytics",
        issuer: "Google",
        date: "2023",
        image: "/api/placeholder/600/400",
        skills: ["Data Visualization", "R Programming", "SQL"],
        credentialLink: "#",
        details: "In-depth training on data cleaning, analysis, and visualization. Practical experience with SQL, R, and Tableau for data-driven decision making."
    }
];

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certifications" className="py-20 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-primary">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Continuous learning and professional development milestones.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            layoutId={`cert-card-${cert.id}`}
                            onClick={() => setSelectedCert(cert)}
                            className="cursor-pointer group"
                        >
                            <Card className="h-full overflow-hidden border-primary/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.1)]">
                                <div className="relative aspect-video overflow-hidden bg-zinc-900 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
                                    <Award className="text-primary/20 w-20 h-20 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/20 backdrop-blur-md">
                                            {cert.issuer}
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Issued: {cert.date}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.slice(0, 2).map((skill) => (
                                            <span key={skill} className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                                                {skill}
                                            </span>
                                        ))}
                                        {cert.skills.length > 2 && (
                                            <span className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                                                +{cert.skills.length - 2}
                                            </span>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certification Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`cert-card-${selectedCert.id}`}
                            className="relative w-full max-w-2xl bg-card border border-primary/20 rounded-2xl shadow-[0_0_50px_rgba(163,230,53,0.2)] overflow-hidden z-10"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-4 right-4 z-20 rounded-full bg-background/50 backdrop-blur-md hover:bg-destructive hover:text-white transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedCert(null);
                                }}
                            >
                                <X className="h-5 w-5" />
                            </Button>

                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground">{selectedCert.title}</h3>
                                        <p className="text-primary">{selectedCert.issuer}</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Skills Validated</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedCert.skills.map((skill) => (
                                                <Badge key={skill} variant="outline" className="border-primary/20 text-primary/80">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Description</h4>
                                        <p className="text-foreground/80 leading-relaxed">
                                            {selectedCert.details}
                                        </p>
                                    </div>

                                    <div className="pt-4 flex gap-4">
                                        <Button variant="neon" className="w-full sm:w-auto">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            View Credential
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
