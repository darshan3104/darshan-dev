"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import ColorBends from "../ColorBends";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EmailJS configuration
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

            // Send email using EmailJS with form reference
            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );

            console.log("EmailJS Success:", result);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute inset-0">
                <ColorBends
                    colors={["#ff1a75", "#a020ff", "#00ffff"]}
                    rotation={20}
                    speed={0.3}
                    scale={1.5}
                    frequency={2.0}
                    warpStrength={1.8}
                    mouseInfluence={1.2}
                    parallax={0.9}
                    noise={0.2}
                />
            </div>
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
                                { icon: Mail, title: "Email", value: "darshanravi0804@gmail.com", href: "mailto:darshanravi0804@gmail.com" },
                                { icon: Phone, title: "Phone", value: "+91 8660011466", href: "tel:+918660011466" },
                                { icon: MapPin, title: "Location", value: "Bengaluru, Karnataka, India", href: "#" }
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
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Name</label>
                                            <Input
                                                name="from_name"
                                                placeholder="John Doe"
                                                className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Email</label>
                                            <Input
                                                name="from_email"
                                                type="email"
                                                placeholder="john@example.com"
                                                className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">Subject</label>
                                        <Input
                                            name="subject"
                                            placeholder="Project Inquiry"
                                            className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">Message</label>
                                        <Textarea
                                            name="message"
                                            placeholder="Tell me about your project..."
                                            className="min-h-[150px] bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all resize-none"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                        />
                                    </div>

                                    {submitStatus === "success" && (
                                        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm">
                                            ✓ Message sent successfully! I'll get back to you soon.
                                        </div>
                                    )}

                                    {submitStatus === "error" && (
                                        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                                            ✗ Failed to send message. Please try again or contact me directly.
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        variant="neon"
                                        className="w-full group"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
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
