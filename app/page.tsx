"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
    Github,
    Linkedin,
    ChevronDown,
    ExternalLink,
    Briefcase,
    User,
    Cpu,
    Send,
    Menu,
    Award,
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
                        <Link
                            href="/"
                            className="font-bold text-xl"
                            style={{ color: accentColor }}
                        >
                            Oswaldo Da Conceicao
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
                            href="#certificates"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Certificates
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
                    className="py-12 md:py-24 lg:py-30 space-y-8"
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
                                I'm a full-stack developer with a strong
                                interest in cloud computing and a passion for
                                building meaningful web applications.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-md btn-glow"
                                    style={{ backgroundColor: accentColor }}
                                >
                                    <a
                                        href="#projects"
                                        className="flex items-center gap-2 transition-transform"
                                    >
                                        View My Work
                                        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="rounded-md"
                                >
                                    <a
                                        href="./resume/resume-oswaldo.pdf"
                                        download
                                        className="flex items-center"
                                    >
                                        <span className="flex items-center">
                                            Download Resume
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </span>
                                    </a>
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
                            <div className="relative z-10 card-inset p-8 rounded-xl">
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <img
                                        src="./img/profile.jpg?height=250&width=250"
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
                    <div className="container text-center">
                        <div className="flex justify-center items-center gap-2 mb-8">
                            <User
                                className="h-6 w-6"
                                style={{ color: accentColor }}
                            />
                            <h2 className="text-3xl font-bold tracking-tight">
                                About Me
                            </h2>
                        </div>
                        <div className="space-y-4 max-w-5xl mx-auto">
                            <p
                                className="text-3xl font-extrabold"
                                style={{ color: accentColor }}
                            >
                                I'm a full-stack developer and cloud engineer
                                with a strong passion for building user-friendly
                                and efficient web applications.
                            </p>
                            <p
                                className="text-xl font-semibold "
                                style={{ color: mutedTextColor }}
                            >
                                Exploring new tools and technologies is
                                something I genuinely enjoy, especially when it
                                comes to{" "}
                                <a
                                    className="underline"
                                    style={{ textDecorationColor: accentColor }}
                                >
                                    coding
                                </a>
                                , exploring new{" "}
                                <a
                                    className="underline"
                                    style={{ textDecorationColor: accentColor }}
                                >
                                    frameworks
                                </a>
                                , and improving my development skills through
                                personal{" "}
                                <a
                                    className="underline"
                                    style={{ textDecorationColor: accentColor }}
                                >
                                    projects
                                </a>
                                . In my free time, you’ll often find me playing{" "}
                                <a
                                    className="underline"
                                    style={{ textDecorationColor: accentColor }}
                                >
                                    video games
                                </a>
                                ,{" "}
                                <a
                                    className="underline"
                                    style={{ textDecorationColor: accentColor }}
                                >
                                    reading manga
                                </a>
                                , or{" "}
                                <a
                                    className="underline"
                                    style={{ textDecorationColor: accentColor }}
                                >
                                    watching movies
                                </a>
                                . Activities that not only entertain me but also
                                inspire many of my creative ideas in tech.
                            </p>
                            <p
                                className="text-xl font-semibold"
                                style={{ color: mutedTextColor }}
                            >
                                For me, web development is more than just
                                writing code. It's about creating experiences
                                that people enjoy using.
                            </p>
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
                            {/* Gencara Bangkit Capstone Project */}
                            <div className="p-6 group">
                                <div className="project-card rounded-lg overflow-hidden">
                                    <div className="aspect-video relative overflow-hidden">
                                        <img
                                            src="./img/bangkit.png?height=300&width=500&text=Gencara"
                                            alt="Gencara Bangkit Capstone Project Preview"
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                            style={{
                                                backgroundColor:
                                                    "rgba(21, 59, 119, 0.8)",
                                            }}
                                        >
                                            <Button
                                                asChild
                                                variant="secondary"
                                                size="sm"
                                                className="rounded-md"
                                            >
                                                <a href="https://github.com/oswldc/Project-Capstone">
                                                    View Project
                                                    <ExternalLink className="ml-2 h-4 w-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-xl">
                                                Gencara Bangkit Capstone Project
                                            </h3>
                                            <div className="flex gap-2">
                                                <Link
                                                    href="https://github.com/oswldc/Project-Capstone"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                    className="hover:text-primary"
                                                >
                                                    <Github className="h-5 w-5" />
                                                </Link>
                                            </div>
                                        </div>
                                        <p
                                            className="text-sm"
                                            style={{ color: mutedTextColor }}
                                        >
                                            A mobile-friendly web application
                                            that helps users learn Indonesian
                                            Sign Language (SIBI) through
                                            interactive materials, quizzes, and
                                            real-time sign recognition powered
                                            by machine learning.
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="tag">
                                                Express JS
                                            </span>
                                            <span className="tag">
                                                Cloud Run
                                            </span>
                                            <span className="tag">
                                                Cloud Storage
                                            </span>
                                            <span className="tag">
                                                Firebase
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Notes-app Project */}
                            <div className="p-6 group">
                                <div className="project-card rounded-lg overflow-hidden">
                                    <div className="aspect-video relative overflow-hidden">
                                        <img
                                            src="./img/dicoding.jpg?height=300&width=500&text=Notes+app+Backend"
                                            alt="Notes-app Preview"
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                            style={{
                                                backgroundColor:
                                                    "rgba(21, 59, 119, 0.8)",
                                            }}
                                        >
                                            <Button
                                                asChild
                                                variant="secondary"
                                                size="sm"
                                                className="rounded-md"
                                            >
                                                <a href="https://github.com/oswldc/notes-app-back-end">
                                                    View Project
                                                    <ExternalLink className="ml-2 h-4 w-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-xl">
                                                Notes-app Back-end
                                            </h3>
                                            <div className="flex gap-2">
                                                <Link
                                                    href="https://github.com/oswldc/notes-app-back-end"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                    className="hover:text-primary"
                                                >
                                                    <Github className="h-5 w-5" />
                                                </Link>
                                            </div>
                                        </div>
                                        <p
                                            className="text-sm"
                                            style={{ color: mutedTextColor }}
                                        >
                                            The backend of the Notes-App is
                                            built using Node.JS. It supports
                                            features such as note creation,
                                            editing, categorization, and secure
                                            cloud storage, ensuring a seamless
                                            and scalable experience for users.
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="tag">Node Js</span>
                                            <span className="tag">
                                                REST API
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Asclepius Project */}
                            <div className="p-6 group">
                                <div className="project-card rounded-lg overflow-hidden">
                                    <div className="aspect-video relative overflow-hidden">
                                        <img
                                            src="./img/dicoding.jpg?height=300&width=500&text=Asclepius+Backend+App"
                                            alt="Asclepius Backend Preview"
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                            style={{
                                                backgroundColor:
                                                    "rgba(21, 59, 119, 0.8)",
                                            }}
                                        >
                                            <Button
                                                asChild
                                                variant="secondary"
                                                size="sm"
                                                className="rounded-md"
                                            >
                                                <a href="https://github.com/oswldc/submission-oswaldo">
                                                    View Project
                                                    <ExternalLink className="ml-2 h-4 w-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-xl">
                                                Asclepius Backend
                                            </h3>
                                            <div className="flex gap-2">
                                                <Link
                                                    href="https://github.com/oswldc/submission-oswaldo"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                    className="hover:text-primary"
                                                >
                                                    <Github className="h-5 w-5" />
                                                </Link>
                                            </div>
                                        </div>
                                        <p
                                            className="text-sm"
                                            style={{ color: mutedTextColor }}
                                        >
                                            Deploying machine learning model for
                                            checking cancer in google cloud
                                            platfrom
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="tag">
                                                Google Cloud Platform
                                            </span>
                                            <span className="tag">
                                                Cloud Run
                                            </span>
                                            <span className="tag">
                                                Cloud Storage
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 hover:translate-y-[-4px]">
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
                                                "MySQL",
                                                "PostgreSQL",
                                                "REST API",
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
                                                "Railway",
                                                "Vercel",
                                                "Google Cloud Platforms",
                                                "Figma",
                                                "Postman",
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

                {/* Certificates Section */}
                <section
                    id="certificates"
                    className="py-12 md:py-24 section-divider"
                >
                    <div className="container">
                        <div className="flex items-center gap-2 mb-8">
                            <Award
                                className="h-6 w-6"
                                style={{ color: accentColor }}
                            />
                            <h2 className="text-3xl font-bold tracking-tight">
                                Certificates & Achievements
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Left scroll button */}
                            <button
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-md hover:bg-background/90 transition-all"
                                onClick={() => {
                                    const container = document.getElementById(
                                        "certificates-container"
                                    );
                                    if (container) {
                                        container.scrollBy({
                                            left: -300,
                                            behavior: "smooth",
                                        });
                                    }
                                }}
                                aria-label="Scroll left"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-left"
                                >
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>

                            {/* Certificates container with horizontal scroll */}
                            <div
                                id="certificates-container"
                                className="flex overflow-y-auto gap-4 pb-8 px-8 snap-x snap-mandatory scrollbar-hide"
                                style={{
                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                    scrollBehavior: "smooth",
                                }}
                            >
                                {/* Bangkit Certification */}
                                <div className="min-w-[400px] max-w-[400px] flex-shrink-0 snap-center">
                                    <div
                                        className="project-card rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl"
                                        style={{
                                            transformOrigin: "center bottom",
                                            boxShadow:
                                                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                        }}
                                    >
                                        <div className="p-6 flex items-center justify-center">
                                            <img
                                                src="./certification/bangkit.png?height=150&width=150&text=AWS"
                                                alt="Bangkit Certification"
                                                className="h-24 w-24 object-contain"
                                            />
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <h3 className="font-bold text-xl text-center">
                                                Bangkit Academy Certification
                                            </h3>
                                            <p
                                                className="text-sm text-center"
                                                style={{
                                                    color: mutedTextColor,
                                                }}
                                            >
                                                Bangkit Academy
                                            </p>
                                            <div className="flex justify-between items-center pt-4">
                                                <span
                                                    className="text-sm"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                >
                                                    Issued: Jul 2024
                                                </span>
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm"
                                                    className="rounded-md"
                                                >
                                                    <a href="">
                                                        Verify
                                                        <ExternalLink className="ml-2 h-4 w-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Menjadi Google Cloud Engineer */}
                                <div className="min-w-[400px] max-w-[400px] flex-shrink-0 snap-center">
                                    <div
                                        className="project-card rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl"
                                        style={{
                                            transformOrigin: "center bottom",
                                            boxShadow:
                                                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                        }}
                                    >
                                        <div className="p-6 flex items-center justify-center">
                                            <img
                                                src="./certification/MGCE.png?height=150&width=150&text=GCE"
                                                alt="Menjadi Google Cloud Engineer"
                                                className="h-24 w-24 object-contain"
                                            />
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <h3 className="font-bold text-xl text-center">
                                                Menjadi Google Cloud Engineer
                                            </h3>
                                            <p
                                                className="text-sm text-center"
                                                style={{
                                                    color: mutedTextColor,
                                                }}
                                            >
                                                Dicoding Indonesia
                                            </p>
                                            <div className="flex justify-between items-center pt-4">
                                                <span
                                                    className="text-sm"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                >
                                                    Issued: May 2024
                                                </span>
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm"
                                                    className="rounded-md"
                                                >
                                                    <a href="https://www.dicoding.com/certificates/JMZV39OWQPN9">
                                                        Verify
                                                        <ExternalLink className="ml-2 h-4 w-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* System Administration and IT Infrastructure Services */}
                                <div className="min-w-[400px] max-w-[400px] flex-shrink-0 snap-center">
                                    <div
                                        className="project-card rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl"
                                        style={{
                                            transformOrigin: "center bottom",
                                            boxShadow:
                                                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                        }}
                                    >
                                        <div className="p-6 flex items-center justify-center">
                                            <img
                                                src="./certification/SystemAdministration.png?height=150&width=150&text=Meta"
                                                alt="Meta Frontend Certification"
                                                className="h-24 w-24 object-contain"
                                            />
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <h3 className="font-bold text-xl text-center">
                                                System Administration and IT
                                                Infrastructure Services
                                            </h3>
                                            <p
                                                className="text-sm text-center"
                                                style={{
                                                    color: mutedTextColor,
                                                }}
                                            >
                                                Google
                                            </p>
                                            <div className="flex justify-between items-center pt-4">
                                                <span
                                                    className="text-sm"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                >
                                                    Issued: Feb 2024
                                                </span>
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm"
                                                    className="rounded-md"
                                                >
                                                    <a href="https://www.coursera.org/account/accomplishments/certificate/SMPRF3S8QQ6M">
                                                        Verify
                                                        <ExternalLink className="ml-2 h-4 w-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Google Cloud Computing Foundations: Cloud Computing Fundamentals */}
                                <div className="min-w-[400px] max-w-[400px] flex-shrink-0 snap-center">
                                    <div
                                        className="project-card rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl"
                                        style={{
                                            transformOrigin: "center bottom",
                                            boxShadow:
                                                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                        }}
                                    >
                                        <div className="p-6 flex items-center justify-center">
                                            <img
                                                src="./certification/fundamentals.png?height=150&width=150&text=Azure"
                                                alt="Google Cloud Computing Foundations: Cloud Computing Fundamentals"
                                                className="h-24 w-24 object-contain"
                                            />
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <h3 className="font-bold text-xl text-center">
                                                Google Cloud Computing
                                                Foundations: Cloud Computing
                                                Fundamentals
                                            </h3>
                                            <p
                                                className="text-sm text-center"
                                                style={{
                                                    color: mutedTextColor,
                                                }}
                                            >
                                                Google Cloud Skill Boost
                                            </p>
                                            <div className="flex justify-between items-center pt-4">
                                                <span
                                                    className="text-sm"
                                                    style={{
                                                        color: mutedTextColor,
                                                    }}
                                                >
                                                    Issued: Mar 2024
                                                </span>
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm"
                                                    className="rounded-md"
                                                >
                                                    <a href="https://www.cloudskillsboost.google/public_profiles/1098a9a8-330e-41ab-aa4c-e2b4ba5f006a/badges/8237344?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share">
                                                        Verify
                                                        <ExternalLink className="ml-2 h-4 w-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right scroll button */}
                            <button
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-md hover:bg-background/90 transition-all"
                                onClick={() => {
                                    const container = document.getElementById(
                                        "certificates-container"
                                    );
                                    if (container) {
                                        container.scrollBy({
                                            left: 300,
                                            behavior: "smooth",
                                        });
                                    }
                                }}
                                aria-label="Scroll right"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-right"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex justify-center mt-8">
                            <Button
                                asChild
                                variant="secondary"
                                size="sm"
                                className="rounded-md hover:translate-y-[-4px]"
                            >
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/oswaldodaconceicao/details/certifications/"
                                >
                                    View All Certificates
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
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
                        <div className="flex flex-col items-center justify-center text-center">
                            <p
                                className="text-xl max-w-2xl mb-8"
                                style={{ color: mutedTextColor }}
                            >
                                Interested in working together? Feel free to
                                reach out through any of the channels below. I'm
                                always open to discussing new projects, creative
                                ideas, or opportunities to be part of your
                                vision.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                <a
                                    href="https://github.com/oswldc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:translate-y-[-4px]"
                                    style={{
                                        backgroundColor: accentLightColor,
                                        color: accentColor,
                                        boxShadow:
                                            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                    }}
                                >
                                    <Github className="h-5 w-5" />
                                    <span className="font-medium">GitHub</span>
                                </a>

                                <a
                                    href="https://linkedin.com/in/oswaldodaconceicao"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:translate-y-[-4px]"
                                    style={{
                                        backgroundColor: accentLightColor,
                                        color: accentColor,
                                        boxShadow:
                                            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                    }}
                                >
                                    <Linkedin className="h-5 w-5" />
                                    <span className="font-medium">
                                        LinkedIn
                                    </span>
                                </a>
                                <a
                                    href="https://discord.com/users/502783354010206218"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:translate-y-[-4px]"
                                    style={{
                                        backgroundColor: accentLightColor,
                                        color: accentColor,
                                        boxShadow:
                                            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                    }}
                                >
                                    <img
                                        src="./discord.png"
                                        alt="Discord"
                                        className="h-5 w-5"
                                        style={{ fill: accentColor }}
                                    />
                                    <span className="font-medium">Discord</span>
                                </a>
                            </div>

                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="rounded-full hover:translate-y-[-4px] outline-solid"
                                style={{
                                    color: accentColor,
                                    backgroundColor: accentLightColor,
                                    borderColor: accentColor,
                                }}
                            >
                                <a
                                    href="./resume/resume-oswaldo.pdf"
                                    download
                                    className="flex items-center"
                                >
                                    <span className="flex items-center">
                                        Download Resume
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </span>
                                </a>
                            </Button>
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
                            © {new Date().getFullYear()} Oswaldo Da Conceicao.
                            All rights reserved.
                        </p>
                    </div>
                    <div className="flex items-center gap-4"></div>
                </div>
            </footer>
        </div>
    );
}

