import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/variants';

const EducationSection = () => {
    const educationData = [
        {
            institution: 'Lovely Professional University',
            degree: 'B.Tech Computer Science and Engineering',
            duration: '2023 – Present',
            location: 'Punjab, India',
            description: 'Focused on AI, Machine Learning, Data Structures, and Full Stack Development. Participated in various hackathons and technical clubs.'
        },
        {
            institution: 'St. Xavier’s Public School',
            degree: 'Intermediate (12th Grade)',
            duration: '2021 – 2023',
            location: 'Gorakhpur, UP',
            description: 'Focused on PCM (Physics, Chemistry, Mathematics) with a strong foundation in analytical and logical reasoning.'
        },
        {
            institution: 'Smart Move Academy',
            degree: 'Matriculation (10th Grade)',
            duration: '2020 – 2021',
            location: 'Machwa, Bihar',
            description: 'Completed secondary education with a focus on core science and mathematics, developing a base for technical studies.'
        },
    ];

    return (
        <section id="education" className="py-24 relative overflow-hidden border-t border-white/5">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.1)_0%,_transparent_70%)] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

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
                            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Academics</h2>
                        </motion.div>
                        <motion.div variants={fadeIn('up')}>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Edu<span className="text-gradient hover:animate-pulse cursor-default">cation</span></h3>
                        </motion.div>
                        <motion.div variants={fadeIn('up')}>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                My academic journey and technical learning background.
                            </p>
                        </motion.div>
                    </motion.div>

                    <div className="relative max-w-5xl mx-auto mt-20">
                        {/* Timeline Center Line (Desktop) / Left Line (Mobile) */}
                        <div className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-secondary/50 via-primary/30 to-transparent rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)]"></div>

                        {educationData.map((edu, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, type: "spring", bounce: 0.3, delay: 0.2 }}
                                    className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-surface border-4 border-secondary flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.6)] z-20 hover:scale-110 transition-transform duration-300 cursor-default">
                                        <GraduationCap size={24} className="text-secondary" />
                                    </div>

                                    {/* Spacer for empty side on desktop */}
                                    <div className="hidden md:block w-[45%]"></div>

                                    {/* Content Card */}
                                    <div className={`w-full pl-[70px] md:pl-0 md:w-[45%] ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.4)" }}
                                            className="glass p-8 rounded-3xl border border-white/10 hover:border-secondary/50 transition-all duration-300 relative group overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent text-left"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
                                            <div className="relative z-10">
                                                <h4 className={`text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors leading-tight ${isEven ? 'md:text-right text-left' : 'text-left'}`}>
                                                    {edu.degree}
                                                </h4>
                                                <p className={`text-primary font-semibold text-lg mb-4 ${isEven ? 'md:text-right text-left' : 'text-left'}`}>
                                                    {edu.institution}
                                                </p>
                                                <div className={`flex flex-col gap-2 text-sm text-gray-400 font-medium mb-5 ${isEven ? 'md:items-end items-start' : 'items-start'}`}>
                                                    <span className="flex items-center gap-1.5"><Calendar size={16} className="text-secondary" /> {edu.duration}</span>
                                                    <span className="flex items-center gap-1.5"><MapPin size={16} className="text-secondary" /> {edu.location}</span>
                                                </div>
                                                <div className="h-[2px] w-full bg-white/10 mb-5 group-hover:bg-secondary/40 transition-colors"></div>
                                                <p className={`text-gray-300 text-sm leading-relaxed ${isEven ? 'md:text-right text-left' : 'text-left'}`}>
                                                    {edu.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationSection;
