import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/variants';

const EducationSection = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const educationData = [
        {
            institution: 'Lovely Professional University',
            degree: 'B.Tech Computer Science and Engineering',
            duration: '2023 – Present',
            location: 'Punjab, India',
            description: 'Focused on AI, Machine Learning, Data Structures, and Full Stack Development.'
        },
        {
            institution: 'St. Xavier’s Public School',
            degree: 'Intermediate (12th Grade)',
            duration: '2021 – 2023',
            location: 'Gorakhpur, UP',
            description: 'Focused on PCM (Physics, Chemistry, Mathematics).'
        },
        {
            institution: 'Smart Move Academy',
            degree: 'Matriculation (10th Grade)',
            duration: '2020 – 2021',
            location: 'Machwa, Bihar',
            description: 'Secondary education with focus on science and math.'
        },
    ];

    return (
        <section id="education" ref={sectionRef} className="py-24 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1600px]">
                <div className={`section-box reveal ${isVisible ? 'is-visible' : ''}`}>
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Academics</h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Education</h3>
                    </div>

                    <div className="relative max-w-5xl mx-auto mt-20">
                        <div className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 bg-white/5 rounded-full"></div>

                        {educationData.map((edu, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center z-20">
                                        <GraduationCap size={20} className="text-secondary" />
                                    </div>
                                    <div className="hidden md:block w-[45%]"></div>
                                    <div className={`w-full pl-[70px] md:pl-0 md:w-[45%] text-left`}>
                                        <div className="glass p-5 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                                            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                                            <p className="text-primary font-semibold mb-4">{edu.institution}</p>
                                            <div className="flex flex-col gap-2 text-sm text-gray-500 mb-5">
                                                <span className="flex items-center gap-1.5"><Calendar size={14} /> {edu.duration}</span>
                                                <span className="flex items-center gap-1.5"><MapPin size={14} /> {edu.location}</span>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(EducationSection);
