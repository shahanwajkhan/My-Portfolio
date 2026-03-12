import React from 'react';
import { Trophy, Code, Users, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/variants';

const CountUp = ({ to, suffix = "" }) => {
    const nodeRef = React.useRef(null);
    React.useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0;
                const end = parseInt(to, 10);
                if (start === end) {
                    node.textContent = String(end) + suffix;
                    return;
                }
                let totalDuration = 2000;
                // Avoid too fast interval
                let steps = Math.min(end, 100);
                let incrementTime = totalDuration / steps;
                let stepValue = Math.ceil(end / steps);

                let timer = setInterval(() => {
                    start += stepValue;
                    if (start >= end) {
                        start = end;
                        clearInterval(timer);
                    }
                    node.textContent = String(start) + suffix;
                }, incrementTime);
                observer.disconnect();
            }
        }, { threshold: 0.1 });
        observer.observe(node);
        return () => observer.disconnect();
    }, [to, suffix]);
    return <span ref={nodeRef}>0{suffix}</span>;
};

const AchievementsSection = () => {
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

    const achievements = [
        {
            title: 'Coding Practice',
            description: 'Solved 300+ coding problems across platforms like LeetCode, HackerRank, and GeeksforGeeks, strengthening problem-solving skills.',
            tag: 'CODING',
            icon: <Code size={28} />
        },
        {
            title: 'Hackathon Achievement',
            description: 'Secured Runner-Up position in a college-level Hackathon, demonstrating strong problem-solving ability and teamwork.',
            tag: 'HACKATHON',
            link: 'https://drive.google.com/file/d/1ZXghp6RpkCMP6S-ztI6aEogYYAEhXVOL/view?usp=sharing',
            icon: <Trophy size={28} />
        },
        {
            title: 'Technical Event Volunteer',
            description: 'Contributed as a student volunteer in organizing technical events and workshops.',
            tag: 'TECH COMMUNITY',
            icon: <Users size={28} />
        }
    ];

    return (
        <section id="achievements" ref={sectionRef} className="py-24 relative overflow-hidden text-gray-100 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1600px]">
                <div className={`section-box reveal ${isVisible ? 'is-visible' : ''}`}>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Milestones</h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Achievements</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
                        {[
                            { label: "DSA Problems", value: "300+" },
                            { label: "Projects Built", value: "12+" },
                            { label: "Certifications", value: "6" },
                            { label: "Hackathons", value: "2" },
                        ].map((stat, idx) => (
                            <div key={idx} className="glass p-4 sm:p-6 rounded-2xl border border-white/5 text-center bg-white/5">
                                <h4 className="text-2xl sm:text-4xl font-bold text-white mb-1">{stat.value}</h4>
                                <p className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-widest uppercase">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-6">
                        {achievements.map((item, idx) => (
                            <div key={idx} className="glass px-5 sm:px-6 py-5 sm:py-6 rounded-2xl border border-white/5 group flex flex-col md:flex-row items-center gap-6 bg-white/[0.02]">
                                <div className="w-16 h-16 rounded-xl bg-surfaceLight text-secondary flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.description}</p>
                                </div>
                                <div className="flex-shrink-0 flex flex-col items-center md:items-end gap-3">
                                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-secondary uppercase">
                                        {item.tag}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(AchievementsSection);
