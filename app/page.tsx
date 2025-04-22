"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    ChevronDown,
    ExternalLink,
    Briefcase,
    User,
    Cpu,
    Send,
    Menu,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Wait for component to mount to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = theme === "dark";
    const bgColor = isDark ? "#0d1117" : "#ffffff";
    const textColor = isDark ? "#ffffff" : "#1f2937";
    const mutedTextColor = isDark ? "#9ca3af" : "#6b7280";
    const headerBgColor = isDark
        ? "rgba(13, 17, 23, 0.95)"
        : "rgba(255, 255, 255, 0.95)";
    const borderColor = isDark ? "rgba(55, 65, 81, 0.3)" : "rgba(0, 0, 0, 0.1)";
    const accentColor = "#4285f4";
    const accentLightColor = isDark
        ? "rgba(66, 133, 244, 0.1)"
        : "rgba(66, 133, 244, 0.1)";

    return (
        <div
            className="min-h-screen"
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            <header
                className="sticky top-0 z-50 w-full"
                style={{
                    backgroundColor: headerBgColor,
                    backdropFilter: "blur(8px)",
                    borderBottom: `1px solid ${borderColor}`,
                }}
            >
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="font-bold text-xl">
                            Portfolio
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="#home"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="#about"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="#projects"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#skills"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Skills
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu size={24} />
                    </button>

                    <div className="flex items-center gap-2">
                        <ModeToggle />
                        <Button variant="default">Get in Touch</Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div
                        className="md:hidden"
                        style={{ backgroundColor: headerBgColor }}
                    >
                        <div className="container py-4 flex flex-col space-y-4">
                            <Link
                                href="#home"
                                className="text-sm font-medium hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="#about"
                                className="text-sm font-medium hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="#projects"
                                className="text-sm font-medium hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                href="#skills"
                                className="text-sm font-medium hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Skills
                            </Link>
                            <Link
                                href="#contact"
                                className="text-sm font-medium hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            <main
                className="container py-8 md:py-12"
                style={{ border: "none" }}
            >
                {/* Hero Section */}
                <section
                    id="home"
                    className="py-12 md:py-24 lg:py-32 space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div
                                className="inline-block px-4 py-1 rounded-full"
                                style={{
                                    backgroundColor: accentLightColor,
                                    color: accentColor,
                                }}
                            >
                                Full-Stack Developer
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                                Creating digital
                                <span className="text-gradient">
                                    {" "}
                                    experiences
                                </span>
                            </h1>
                            <p
                                className="text-xl"
                                style={{ color: mutedTextColor }}
                            >
                                I build innovative web applications with modern
                                technologies to solve real-world problems.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="rounded-md btn-glow"
                                    style={{ backgroundColor: accentColor }}
                                >
                                    View My Work
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-md"
                                >
                                    Download Resume
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="card-shadow p-8 rounded-2xl relative">
                            <div
                                className="absolute -top-4 -left-4 w-24 h-24 rounded-xl"
                                style={{
                                    backgroundColor: "rgba(66, 133, 244, 0.2)",
                                }}
                            ></div>
                            <div className="relative z-10 card-inset p-6 rounded-xl">
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <img
                                        src="/placeholder.svg?height=600&width=600"
                                        alt="Developer Portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-16">
                        <Link
                            href="#about"
                            className="flex flex-col items-center gap-2 transition-colors"
                            style={{ color: mutedTextColor }}
                        >
                            <span className="text-sm">
                                Scroll to learn more
                            </span>
                            <ChevronDown className="h-4 w-4 animate-bounce" />
                        </Link>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-12 md:py-24 section-divider">
                    <div className="container">
                        <div className="flex items-center gap-2 mb-8">
                            <User
                                className="h-6 w-6"
                                style={{ color: accentColor }}
                            />
                            <h2 className="text-3xl font-bold tracking-tight">
                                About Me
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-4">
                                <p
                                    className="text-xl"
                                    style={{ color: mutedTextColor }}
                                >
                                    I'm a passionate full-stack developer with a
                                    focus on creating intuitive and performant
                                    web applications.
                                </p>
                                <p style={{ color: mutedTextColor }}>
                                    With over 5 years of experience in web
                                    development, I've worked on a variety of
                                    projects ranging from small business
                                    websites to complex enterprise applications.
                                    My approach combines technical expertise
                                    with creative problem-solving to deliver
                                    solutions that not only meet but exceed
                                    client expectations.
                                </p>
                                <p style={{ color: mutedTextColor }}>
                                    I believe in continuous learning and staying
                                    updated with the latest technologies and
                                    best practices in the industry. When I'm not
                                    coding, you can find me exploring new hiking
                                    trails, experimenting with photography, or
                                    contributing to open-source projects.
                                </p>
                            </div>
                            <div className="card-shadow p-6 rounded-xl">
                                <div className="card-inset p-6 rounded-xl space-y-4">
                                    <h3 className="font-bold text-xl">
                                        Quick Facts
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span
                                                style={{ color: accentColor }}
                                                className="font-bold"
                                            >
                                                •
                                            </span>
                                            <span>
                                                Based in San Francisco, CA
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span
                                                style={{ color: accentColor }}
                                                className="font-bold"
                                            >
                                                •
                                            </span>
                                            <span>
                                                5+ years of professional
                                                experience
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span
                                                style={{ color: accentColor }}
                                                className="font-bold"
                                            >
                                                •
                                            </span>
                                            <span>
                                                Computer Science degree from UC
                                                Berkeley
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span
                                                style={{ color: accentColor }}
                                                className="font-bold"
                                            >
                                                •
                                            </span>
                                            <span>
                                                Worked with 20+ clients
                                                worldwide
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span
                                                style={{ color: accentColor }}
                                                className="font-bold"
                                            >
                                                •
                                            </span>
                                            <span>
                                                Fluent in English and Spanish
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section
                    id="projects"
                    className="py-12 md:py-24 section-divider"
                >
                    <div className="container">
                        <div className="flex items-center gap-2 mb-8">
                            <Briefcase
                                className="h-6 w-6"
                                style={{ color: accentColor }}
                            />
                            <h2 className="text-3xl font-bold tracking-tight">
                                Featured Projects
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* E-Commerce Dashboard Project */}
                            <div className="p-6 group">
                                <div className="project-card rounded-lg overflow-hidden">
                                    <div className="aspect-video relative overflow-hidden">
                                        <img
                                            src="/placeholder.svg?height=300&width=500&text=E-Commerce+Dashboard"
                                            alt="E-Commerce Dashboard Preview"
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                            style={{
                                                backgroundColor:
                                                    "rgba(66, 133, 244, 0.8)",
                                            }}
                                        >
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="rounded-md"
                                            >
                                                View Project
                                                <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-xl">
                                                E-Commerce Dashboard
                                            </h3>
                                            <div className="flex gap-2">
                                                <Link
                                                    href="https://github.com/yourusername/ecommerce-dashboard"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                    className="hover:text-primary"
                                                >
                                                    <Github className="h-5 w-5" />
                                                </Link>
                                                <Link
                                                    href="https://ecommerce-dashboard-demo.vercel.app"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                    className="hover:text-primary"
                                                >
                                                    <ExternalLink className="h-5 w-5" />
                                                </Link>
                                            </div>
                                        </div>
                                        <p
                                            className="text-sm"
                                            style={{ color: mutedTextColor }}
                                        >
                                            A comprehensive dashboard for
                                            e-commerce businesses with real-time
                                            analytics, inventory management, and
                                            order processing.
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="tag">React</span>
                                            <span className="tag">Next.js</span>
                                            <span className="tag">
                                                Supabase
                                            </span>
                                            <span className="tag">
                                                Recharts
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* AI Content Generator Project */}
                            <div className="p-6 group">
                                <div className="project-card rounded-lg overflow-hidden">
                                    <div className="aspect-video relative overflow-hidden">
                                        <img
                                            src="/placeholder.svg?height=300&width=500&text=AI+Content+Generator"
                                            alt="AI Content Generator Preview"
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                            style={{
                                                backgroundColor:
                                                    "rgba(66, 133, 244, 0.8)",
                                            }}
                                        >
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="rounded-md"
                                            >
                                                View Project
                                                <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-xl">
                                                AI Content Generator
                                            </h3>
                                            <div className="flex gap-2">
                                                <Link
                                                    href="https://github.com/yourusername/ai-content-generator"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                    className="hover:text-primary"
                                                >
                                                    <Github className="h-5 w-5" />
                                                </Link>
                                                <Link
                                                    href="https://ai-content-generator.vercel.app"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                    className="hover:text-primary"
                                                >
                                                    <ExternalLink className="h-5 w-5" />
                                                </Link>
                                            </div>
                                        </div>
                                        <p
                                            className="text-sm"
                                            style={{ color: mutedTextColor }}
                                        >
                                            A tool that leverages OpenAI's GPT
                                            models to generate blog posts,
                                            social media content, and marketing
                                            copy.
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="tag">
                                                TypeScript
                                            </span>
                                            <span className="tag">
                                                OpenAI API
                                            </span>
                                            <span className="tag">
                                                Tailwind CSS
                                            </span>
                                            <span className="tag">
                                                Vercel AI SDK
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Fitness Tracker App Project */}
                            <div className="p-6 group">
                                <div className="project-card rounded-lg overflow-hidden">
                                    <div className="aspect-video relative overflow-hidden">
                                        <img
                                            src="/placeholder.svg?height=300&width=500&text=Fitness+Tracker+App"
                                            alt="Fitness Tracker App Preview"
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                            style={{
                                                backgroundColor:
                                                    "rgba(66, 133, 244, 0.8)",
                                            }}
                                        >
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="rounded-md"
                                            >
                                                View Project
                                                <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-xl">
                                                Fitness Tracker App
                                            </h3>
                                            <div className="flex gap-2">
                                                <Link
                                                    href="https://github.com/yourusername/fitness-tracker"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                    className="hover:text-primary"
                                                >
                                                    <Github className="h-5 w-5" />
                                                </Link>
                                                <Link
                                                    href="https://fitness-tracker-app.vercel.app"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                    className="hover:text-primary"
                                                >
                                                    <ExternalLink className="h-5 w-5" />
                                                </Link>
                                            </div>
                                        </div>
                                        <p
                                            className="text-sm"
                                            style={{ color: mutedTextColor }}
                                        >
                                            A mobile-first web app that helps
                                            users track workouts, set fitness
                                            goals, and monitor progress with
                                            visual analytics.
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="tag">
                                                React Native
                                            </span>
                                            <span className="tag">
                                                Firebase
                                            </span>
                                            <span className="tag">D3.js</span>
                                            <span className="tag">Expo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Button variant="outline" className="rounded-md">
                                View All Projects
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-12 md:py-24 section-divider">
                    <div className="container">
                        <div className="flex items-center gap-2 mb-8">
                            <Cpu
                                className="h-6 w-6"
                                style={{ color: accentColor }}
                            />
                            <h2 className="text-3xl font-bold tracking-tight">
                                Skills & Expertise
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="card-shadow p-6 rounded-xl">
                                    <div className="card-inset p-4 rounded-lg">
                                        <h3 className="font-bold text-xl mb-4">
                                            Frontend Development
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                "React",
                                                "Next.js",
                                                "TypeScript",
                                                "Tailwind CSS",
                                                "JavaScript",
                                                "HTML/CSS",
                                            ].map((skill) => (
                                                <div
                                                    key={skill}
                                                    className="flex items-center gap-2"
                                                >
                                                    <div
                                                        className="w-2 h-2 rounded-full"
                                                        style={{
                                                            backgroundColor:
                                                                accentColor,
                                                        }}
                                                    ></div>
                                                    <span>{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-shadow p-6 rounded-xl">
                                    <div className="card-inset p-4 rounded-lg">
                                        <h3 className="font-bold text-xl mb-4">
                                            Backend Development
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                "Node.js",
                                                "Express",
                                                "Python",
                                                "Django",
                                                "PostgreSQL",
                                                "MongoDB",
                                            ].map((skill) => (
                                                <div
                                                    key={skill}
                                                    className="flex items-center gap-2"
                                                >
                                                    <div
                                                        className="w-2 h-2 rounded-full"
                                                        style={{
                                                            backgroundColor:
                                                                accentColor,
                                                        }}
                                                    ></div>
                                                    <span>{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="card-shadow p-6 rounded-xl">
                                    <div className="card-inset p-4 rounded-lg">
                                        <h3 className="font-bold text-xl mb-4">
                                            Tools & Platforms
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                "Git",
                                                "Docker",
                                                "AWS",
                                                "Vercel",
                                                "GitHub Actions",
                                                "Figma",
                                            ].map((skill) => (
                                                <div
                                                    key={skill}
                                                    className="flex items-center gap-2"
                                                >
                                                    <div
                                                        className="w-2 h-2 rounded-full"
                                                        style={{
                                                            backgroundColor:
                                                                accentColor,
                                                        }}
                                                    ></div>
                                                    <span>{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-shadow p-6 rounded-xl">
                                    <div className="card-inset p-4 rounded-lg">
                                        <h3 className="font-bold text-xl mb-4">
                                            Soft Skills
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                "Problem Solving",
                                                "Communication",
                                                "Team Collaboration",
                                                "Project Management",
                                                "Agile Methodology",
                                                "User Experience",
                                            ].map((skill) => (
                                                <div
                                                    key={skill}
                                                    className="flex items-center gap-2"
                                                >
                                                    <div
                                                        className="w-2 h-2 rounded-full"
                                                        style={{
                                                            backgroundColor:
                                                                accentColor,
                                                        }}
                                                    ></div>
                                                    <span>{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section
                    id="contact"
                    className="py-12 md:py-24 section-divider"
                >
                    <div className="container">
                        <div className="flex items-center gap-2 mb-8">
                            <Send
                                className="h-6 w-6"
                                style={{ color: accentColor }}
                            />
                            <h2 className="text-3xl font-bold tracking-tight">
                                Get In Touch
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p
                                    className="text-xl"
                                    style={{ color: mutedTextColor }}
                                >
                                    Interested in working together? Feel free to
                                    reach out through any of the channels below
                                    or fill out the contact form.
                                </p>
                                <div className="space-y-4 mt-6">
                                    <div className="card-shadow p-4 rounded-xl">
                                        <div className="card-inset p-4 rounded-lg flex items-center gap-4">
                                            <Mail
                                                className="h-5 w-5"
                                                style={{ color: accentColor }}
                                            />
                                            <a
                                                href="mailto:hello@example.com"
                                                className="hover:text-primary transition-colors"
                                            >
                                                hello@example.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <a
                                            href="#"
                                            className="card-shadow p-3 rounded-xl inline-flex"
                                        >
                                            <div className="card-inset p-2 rounded-lg hover:text-primary transition-colors">
                                                <Github className="h-5 w-5" />
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="card-shadow p-3 rounded-xl inline-flex"
                                        >
                                            <div className="card-inset p-2 rounded-lg hover:text-primary transition-colors">
                                                <Linkedin className="h-5 w-5" />
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className="card-shadow p-3 rounded-xl inline-flex"
                                        >
                                            <div className="card-inset p-2 rounded-lg hover:text-primary transition-colors">
                                                <Twitter className="h-5 w-5" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-shadow p-6 rounded-xl">
                                <div className="card-inset p-6 rounded-lg">
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="name"
                                                    className="text-sm font-medium"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    className="w-full px-3 py-2 border rounded-md"
                                                    style={{
                                                        backgroundColor: isDark
                                                            ? "hsl(222 47% 7%)"
                                                            : "#f8f9fa",
                                                        borderColor: isDark
                                                            ? "hsl(217.2 32.6% 17.5%)"
                                                            : "#dee2e6",
                                                    }}
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="email"
                                                    className="text-sm font-medium"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    className="w-full px-3 py-2 border rounded-md"
                                                    style={{
                                                        backgroundColor: isDark
                                                            ? "hsl(222 47% 7%)"
                                                            : "#f8f9fa",
                                                        borderColor: isDark
                                                            ? "hsl(217.2 32.6% 17.5%)"
                                                            : "#dee2e6",
                                                    }}
                                                    placeholder="Your email"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="subject"
                                                className="text-sm font-medium"
                                            >
                                                Subject
                                            </label>
                                            <input
                                                id="subject"
                                                type="text"
                                                className="w-full px-3 py-2 border rounded-md"
                                                style={{
                                                    backgroundColor: isDark
                                                        ? "hsl(222 47% 7%)"
                                                        : "#f8f9fa",
                                                    borderColor: isDark
                                                        ? "hsl(217.2 32.6% 17.5%)"
                                                        : "#dee2e6",
                                                }}
                                                placeholder="Subject"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="message"
                                                className="text-sm font-medium"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={4}
                                                className="w-full px-3 py-2 border rounded-md resize-none"
                                                style={{
                                                    backgroundColor: isDark
                                                        ? "hsl(222 47% 7%)"
                                                        : "#f8f9fa",
                                                    borderColor: isDark
                                                        ? "hsl(217.2 32.6% 17.5%)"
                                                        : "#dee2e6",
                                                }}
                                                placeholder="Your message"
                                            ></textarea>
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full rounded-md"
                                            style={{
                                                backgroundColor: accentColor,
                                            }}
                                        >
                                            Send Message
                                            <Send className="ml-2 h-4 w-4" />
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer
                className="py-6 md:py-8"
                style={{
                    borderTop: `1px solid ${borderColor}`,
                }}
            >
                <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p
                            className="text-sm"
                            style={{ color: mutedTextColor }}
                        >
                            © {new Date().getFullYear()} Your Name. All rights
                            reserved.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            style={{ color: mutedTextColor }}
                            className="hover:text-primary transition-colors"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            style={{ color: mutedTextColor }}
                            className="hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            style={{ color: mutedTextColor }}
                            className="hover:text-primary transition-colors"
                        >
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            style={{ color: mutedTextColor }}
                            className="hover:text-primary transition-colors"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

