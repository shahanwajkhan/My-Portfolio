import React from 'react';
import { Briefcase, Calendar, MapPin, Tag, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/variants';

const ExperienceSection = () => {
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

    const experiences = [
        {
            title: 'OOP Using C++ (Training)',
            organization: 'Lovely Professional University',
            type: 'Technical Training',
            duration: '2025',
            location: 'Punjab, India',
            description: [
                'Hands-on training in Object-Oriented Programming using C++.',
                'Applied data abstraction, constructors, and file handling.',
                'Developed a Student Report Card System managing data and generating reports.'
            ],
            techStack: ['C++', 'OOP', 'Data Abstraction', 'Inheritance', 'Polymorphism'],
            credentialUrl: 'https://drive.google.com/file/d/1ydBM-hGuPa3E7RxOBg5m2Q0R9RdDBeCF/view',
            projectUrl: 'https://student-report-card-system.vercel.app/'
        }
    ];

    return (
        <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1600px]">
                <div className={`section-box reveal ${isVisible ? 'is-visible' : ''}`}>
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">My Journey</h2>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Experience</h1>
                    </div>

                    <div className="flex flex-col gap-8">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="glass p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col md:flex-row gap-8">
                                <div className="w-16 h-16 rounded-2xl bg-surfaceLight text-secondary flex items-center justify-center shrink-0 border border-white/10">
                                    <Briefcase size={32} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                                        <div>
                                            <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{exp.title}</h4>
                                            <p className="text-primary font-bold">{exp.organization}</p>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            <p>{exp.duration} | {exp.location}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-gray-400 text-sm mb-6 list-disc pl-4">
                                        {exp.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-4 mt-auto">
                                        {exp.projectUrl && (
                                            <a href={exp.projectUrl} target="_blank" rel="noreferrer" className="px-5 py-2 bg-primary/20 text-primary border border-primary/30 rounded-xl text-xs font-bold hover:bg-primary/30 transition-all">Project</a>
                                        )}
                                        {exp.credentialUrl && (
                                            <a href={exp.credentialUrl} target="_blank" rel="noreferrer" className="px-5 py-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-xl text-xs font-bold hover:bg-secondary/30 transition-all">Certificate</a>
                                        )}
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

export default React.memo(ExperienceSection);
