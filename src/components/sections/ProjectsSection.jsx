import React, { useState } from 'react';
import { ExternalLink, Github, X, Maximize2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/variants';

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'AI Projects', 'Full Stack', 'Web Apps', 'Machine Learning'];

    const projects = [
        {
            title: 'University Management System',
            description: 'Built a full-stack platform with course management, student records, and role-based access control. Features streamlined administrative workflows and responsive UI.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Django', 'SQLite', 'Bootstrap 5', 'AJAX'],
            categories: ['Full Stack', 'Web Apps'],
            github: 'https://github.com/shahanwajkhan/University-Management-System',
            demo: 'https://ums-project.vercel.app/',
            image: '/images/projects/ums_logo.png'
        },
        {
            title: 'Cricket Management System',
            description: 'A robust web-based system to manage teams, players, and match schedules with real-time stats tracking and a dedicated manager dashboard.',
            tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
            categories: ['Full Stack', 'Web Apps'],
            github: 'https://github.com/shahanwajkhan/Cricket-Management-System',
            demo: 'https://cricket-hub-y63h.vercel.app/',
            image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=600&auto=format&fit=crop'
        },
        {
            title: 'DevOrbit AI Chatbot',
            description: 'AI-powered learning assistant platform featuring structured coding support, assignment generation, and interactive quizzes powered by LLMs.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'Flask', 'Gemini API'],
            categories: ['AI Projects', 'Full Stack'],
            github: 'https://github.com/shahanwajkhan',
            demo: '#',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop'
        },
        {
            title: 'Traffic Management System',
            description: 'Centralized system for monitoring traffic violations. Features precise fine management and a user-friendly admin dashboard for authorities.',
            tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Tailwind CSS'],
            categories: ['Web Apps', 'Full Stack'],
            github: 'https://github.com/shahanwajkhan/Traffic-Management-System',
            demo: '#',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
        },
        {
            title: 'AI Flashcard Generator',
            description: 'AI-powered application that instantly generates study flashcards from any input topic to boost learning retention and interactive study.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Gemini API'],
            categories: ['AI Projects', 'Web Apps'],
            github: 'https://github.com/shahanwajkhan/AI-Flashcard-Generator',
            demo: '#',
            image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop'
        },
        {
            title: 'AI Tutor Hub Chatbot',
            description: 'Intelligent tutoring chatbot providing interactive educational support and personalized learning journeys for students using advanced ML models.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'AI/ML', 'Gemini API'],
            categories: ['AI Projects', 'Machine Learning'],
            github: 'https://github.com/shahanwajkhan/AI-Tutor-Hub-Chatbot',
            demo: '#',
            image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&auto=format&fit=crop'
        },
        {
            title: 'Student Report Card System',
            description: 'A comprehensive academic management platform for students and administrators. Features academic results tracking, performance analytics, report card downloads, and role-based access control.',
            tech: ['HTML', 'CSS', 'JavaScript', 'C++'],
            categories: ['Full Stack', 'Web Apps'],
            github: 'https://github.com/shahanwajkhan/Student-Report-Card-System',
            demo: 'https://student-report-card-system.vercel.app/',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop'
        }
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.categories.includes(activeFilter));

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)] rounded-full -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.1)_0%,_transparent_70%)] rounded-full translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-[1600px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-box"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer(0.1)}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeIn('up')} className="text-sm font-bold tracking-widest text-primary uppercase mb-2">My Work</motion.h2>
                        <motion.h3 variants={fadeIn('up')} className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Featured <span className="text-gradient">Projects</span>
                        </motion.h3>
                        <motion.p variants={fadeIn('up')} className="text-gray-400 max-w-2xl mx-auto text-lg text-center">
                            Exploring the intersection of AI, Full Stack development, and modern web architecture.
                        </motion.p>
                    </motion.div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === cat
                                    ? 'bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                                    : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                    transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                                    whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)", borderColor: "rgba(59,130,246,0.5)" }}
                                    className="project-card group flex flex-col overflow-hidden h-full text-left bg-surface border border-white/5 transition-colors duration-300 rounded-2xl"
                                >
                                    {/* Project Image with Hover Zoom */}
                                    <div className="h-56 relative overflow-hidden bg-white/5 text-left">
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content Details */}
                                    <div className="p-8 flex flex-col flex-1 text-left">
                                        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors text-left">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3 text-left">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack Badges */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tech.map((t) => (
                                                <span key={t} className="tech-badge">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex items-center gap-4 mt-auto">
                                            <motion.a
                                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.6)" }}
                                                whileTap={{ scale: 0.95 }}
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 btn-primary-gradient px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm text-white bg-gradient-to-r from-primary to-secondary relative overflow-hidden"
                                            >
                                                Live Demo <ExternalLink size={16} />
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.15)" }}
                                                whileTap={{ scale: 0.95 }}
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300"
                                                title="View GitHub Repository"
                                            >
                                                <Github size={20} />
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
