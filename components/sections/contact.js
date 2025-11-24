"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <section id="contact" className="py-20 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get in <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="grid gap-6">
                            {[
                                { icon: Mail, title: "Email", value: "hello@darshan.dev", href: "mailto:hello@darshan.dev" },
                                { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                                { icon: MapPin, title: "Location", value: "San Francisco, CA", href: "#" }
                            ].map((item, index) => (
                                <Card key={index} className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                                    <CardContent className="p-6 flex items-center gap-4">
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-foreground">{item.title}</h3>
                                            <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                                                {item.value}
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Map or Decorative Element */}
                        <div className="relative h-64 rounded-2xl overflow-hidden border border-primary/20 bg-card/50">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-muted-foreground">Map Visualization Placeholder</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Name</label>
                                            <Input
                                                placeholder="John Doe"
                                                className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Email</label>
                                            <Input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">Subject</label>
                                        <Input
                                            placeholder="Project Inquiry"
                                            className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">Message</label>
                                        <Textarea
                                            placeholder="Tell me about your project..."
                                            className="min-h-[150px] bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all resize-none"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <Button type="submit" variant="neon" className="w-full group">
                                        Send Message
                                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
