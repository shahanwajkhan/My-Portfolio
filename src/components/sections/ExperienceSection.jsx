import React from 'react';
import { Briefcase, Calendar, MapPin, Tag, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/variants';

const ExperienceSection = () => {
    const experiences = [
        {
            title: 'OOP Using C++ (Training)',
            organization: 'Lovely Professional University',
            type: 'Technical Training',
            duration: '2025',
            location: 'Punjab, India',
            description: [
                'Completed hands-on training in Object-Oriented Programming using C++, learning fundamental concepts such as classes, objects, inheritance, polymorphism, encapsulation, and abstraction.',
                'Applied these concepts through practical coding exercises, modular program development, and debugging tasks to strengthen problem-solving and software development skills.',
                'Developed modular programs by applying data abstraction, constructors, destructors, and file handling, improving code structure and reusability.',
                'The training also strengthened problem-solving abilities, logical thinking, and debugging skills through practical exercises and mini-project implementations.',
                'Developed a Student Report Card System as a project during the training, implementing OOP concepts to manage student data, calculate grades, and generate structured report outputs. The project helped improve skills in modular programming, logical problem-solving, and file handling in C++.'
            ],
            techStack: ['C++', 'Object-Oriented Programming', 'Data Abstraction', 'Inheritance', 'Polymorphism', 'File Handling', 'Problem Solving'],
            credentialUrl: 'https://drive.google.com/file/d/1ydBM-hGuPa3E7RxOBg5m2Q0R9RdDBeCF/view',
            projectUrl: 'https://student-report-card-system.vercel.app/'
        }
    ];

    return (
        <section id="experience" className="py-24 relative overflow-hidden border-t border-white/5">
            {/* Background elements */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1600px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-box"
                >
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer(0.1)}
                    >
                        <motion.div variants={fadeIn('up')}>
                            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">My Journey</h2>
                        </motion.div>
                        <motion.div variants={fadeIn('up')}>
                            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 skill-title-glow tracking-tight text-center">Experience</h3>
                        </motion.div>
                        <motion.div variants={fadeIn('up')}>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Professional experience, technical training, and hands-on learning.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer(0.2)}
                    >
                        {experiences.map((exp, idx) => (
                            <motion.div key={idx} variants={fadeIn('up')} style={{ perspective: 1000 }}>
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                    className="glass p-5 sm:p-8 rounded-3xl border border-white/5 hover:border-secondary/20 transition-all duration-300 relative group flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 shadow-md overflow-hidden w-full will-change-transform"
                                    style={{
                                        borderRadius: '24px',
                                        background: 'rgba(20,20,30,0.7)',
                                        border: '1px solid rgba(255,255,255,0.08)'
                                    }}
                                >
                                    {/* Animated glow on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/15 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                    {/* Left accent bar */}
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-secondary to-primary opacity-60 group-hover:opacity-100 group-hover:w-2 transition-all duration-300"></div>

                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10 w-full">

                                        {/* Icon */}
                                        <div className="w-20 h-20 rounded-2xl bg-surfaceLight text-secondary flex items-center justify-center shrink-0 border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.15)] group-hover:bg-secondary/20 group-hover:scale-110 group-hover:text-white group-hover:border-secondary/30 transition-all duration-500">
                                            <Briefcase size={36} />
                                        </div>

                                        <div className="flex-1 flex flex-col w-full text-center md:text-left">
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                                                <div>
                                                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-secondary transition-all leading-tight">
                                                        {exp.title}
                                                    </h4>
                                                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                                                        <p className="text-primary font-bold text-xl">
                                                            {exp.organization}
                                                        </p>
                                                        <span className="hidden sm:inline text-gray-500">•</span>
                                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary tracking-wider">
                                                            {exp.type}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Date & Location block on the right for Desktop */}
                                                <div className="flex flex-col items-center md:items-end gap-2 text-xs sm:text-sm text-gray-400 font-medium shrink-0 bg-white/5 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-white/5">
                                                    <span className="flex items-center gap-2"><Calendar size={14} className="text-secondary" /> {exp.duration}</span>
                                                    <span className="flex items-center gap-2"><MapPin size={14} className="text-secondary" /> {exp.location}</span>
                                                </div>
                                            </div>

                                            <div className="border-t border-white/10 pt-5 mt-2">
                                                <ul className="space-y-3 text-gray-300 leading-relaxed group-hover:text-white/90 transition-colors text-base text-left">
                                                    {Array.isArray(exp.description) ? (
                                                        exp.description.map((point, index) => (
                                                            <li key={index} className="flex items-start gap-3">
                                                                <span className="text-secondary mt-2 flex-shrink-0">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(139,92,246,0.8)]"></div>
                                                                </span>
                                                                <span>{point}</span>
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <p>{exp.description}</p>
                                                    )}
                                                </ul>
                                            </div>

                                            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end w-full mt-6 gap-6">
                                                {/* Tech Stack Badges */}
                                                {exp.techStack && (
                                                    <motion.div
                                                        variants={staggerContainer(0.05)}
                                                        initial="hidden"
                                                        whileInView="visible"
                                                        viewport={{ once: true }}
                                                        className="flex flex-wrap items-center justify-center md:justify-start gap-2 max-w-2xl"
                                                    >
                                                        {exp.techStack.map((tech, i) => (
                                                            <motion.span
                                                                key={i}
                                                                variants={fadeIn('up', 0, 0.4)}
                                                                className="px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 rounded-lg border border-white/10 flex items-center gap-1.5 hover:bg-secondary/20 hover:text-white hover:border-secondary/40 transition-colors shadow-sm cursor-default"
                                                            >
                                                                <Tag size={12} className="text-secondary" /> {tech}
                                                            </motion.span>
                                                        ))}
                                                    </motion.div>
                                                )}

                                                {/* Action Buttons */}
                                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                                    {exp.projectUrl && (
                                                        <motion.a
                                                            whileHover={{ scale: 1.05, x: 2 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            href={exp.projectUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                                                        >
                                                            <ExternalLink size={18} />
                                                            View Project
                                                        </motion.a>
                                                    )}

                                                    {/* Credential Button */}
                                                    {exp.credentialUrl && (
                                                        <motion.a
                                                            whileHover={{ scale: 1.05, x: -2 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            href={exp.credentialUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary/10 to-primary/10 hover:from-secondary/20 hover:to-primary/20 text-secondary hover:text-white border border-secondary/30 hover:border-secondary rounded-xl text-sm font-bold transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]"
                                                        >
                                                            <ExternalLink size={18} />
                                                            Certificate
                                                        </motion.a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
