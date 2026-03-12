import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = React.useRef(null);

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

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-[1600px]">
                <div className={`section-box reveal ${isVisible ? 'is-visible' : ''}`}>
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">My Work</h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Exploring the intersection of AI, Full Stack development, and modern web architecture.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${activeFilter === cat
                                    ? 'bg-primary text-white border-transparent'
                                    : 'bg-white/5 text-gray-400 border border-white/5 hover:border-primary/50 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.title}
                                className="project-card flex flex-col overflow-hidden h-full text-left bg-surface border border-white/5 transition-all duration-300 rounded-2xl hover:border-primary/30"
                            >
                                <div className="h-48 sm:h-56 relative overflow-hidden bg-white/5">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>

                                <div className="p-5 sm:p-8 flex flex-col flex-1">
                                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 hover:text-primary transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-gray-400 border border-white/5 uppercase tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 bg-primary text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold">
                                            Live Demo <ExternalLink size={16} />
                                        </a>
                                        <a href={project.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(ProjectsSection);
