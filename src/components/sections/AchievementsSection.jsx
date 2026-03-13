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
    const achievements = [
        {
            title: 'Coding Practice',
            description: 'Solved 150+ coding problems across platforms like LeetCode, HackerRank, and GeeksforGeeks, strengthening problem-solving skills, algorithms, and data structures knowledge.',
            tag: 'CODING',
            icon: <Code size={28} />
        },
        {
            title: 'Hackathon Achievement',
            description: 'Secured Runner-Up position in a college-level Hackathon, demonstrating strong problem-solving ability, teamwork, and the capability to build a functional solution under strict time constraints.',
            tag: 'HACKATHON',
            link: 'https://drive.google.com/file/d/1ZXghp6RpkCMP6S-ztI6aEogYYAEhXVOL/view?usp=sharing',
            icon: <Trophy size={28} />
        },
        {
            title: 'Technical Event Volunteer',
            description: 'Contributed as a student volunteer in organizing technical events and workshops, helping coordinate activities, manage sessions, and support knowledge sharing within the student community.',
            tag: 'TECH COMMUNITY',
            icon: <Users size={28} />
        }
    ];

    const particles = React.useMemo(() => {
        return [...Array(6)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
        }));
    }, []);

    // removed floating variant for performance

    return (
        <section id="achievements" className="py-24 relative overflow-hidden text-gray-100 border-t border-white/5">
            {/* Static Background elements */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.15000000000000002)_0%,_transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
            ></div>

            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15000000000000002)_0%,_transparent_70%)] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
            ></div>

            {/* Subtle static particles */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: p.left,
                        top: p.top,
                        width: p.width,
                        height: p.height,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.4)',
                        pointerEvents: 'none',
                    }}
                />
            ))}

            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1600px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-box"
                >
                    <motion.div
                        className="text-center max-w-2xl mx-auto mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer(0.1)}
                    >
                        <motion.div variants={fadeIn('up')}>
                            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Milestones</h2>
                        </motion.div>
                        <motion.div variants={fadeIn('up')}>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 skill-title-glow tracking-tight text-center">Achievements</h3>
                        </motion.div>
                        <motion.div variants={fadeIn('up')}>
                            <p className="text-gray-400 text-lg">
                                Milestones, problem solving, and community contributions.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer(0.1)}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
                    >
                        {[
                            { label: "DSA Problems", value: "150", suffix: "+" },
                            { label: "Projects Built", value: "12", suffix: "+" },
                            { label: "Certifications", value: "7", suffix: "" },
                            { label: "Hackathons", value: "2", suffix: "" },
                        ].map((stat, idx) => (
                            <motion.div key={idx} variants={fadeIn('up')} className="glass p-4 sm:p-6 rounded-2xl border border-white/5 text-center shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:border-secondary/40 transition-all duration-300 group">
                                <h4 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                                    <CountUp to={stat.value} suffix={stat.suffix} />
                                </h4>
                                <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer(0.1)}
                    >
                        {achievements.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeIn('up')}
                                style={{ perspective: 1000 }}
                            >
                                <motion.div
                                    whileHover={{ y: -6, scale: 1.02, boxShadow: "0 15px 35px -10px rgba(139, 92, 246, 0.4)" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="glass px-5 sm:px-6 py-5 sm:py-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all duration-300 relative group flex flex-col md:flex-row items-center gap-6 shadow-lg bg-gradient-to-r from-white/[0.03] to-transparent overflow-hidden"
                                    style={{
                                        borderRadius: '16px',
                                        background: 'rgba(20,20,30,0.6)',
                                        border: '1px solid rgba(255,255,255,0.08)'
                                    }}
                                >
                                    {/* Animated glow on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>

                                    {/* Left accent bar */}
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-primary opacity-50 group-hover:opacity-100 group-hover:w-1.5 transition-all duration-300 rounded-l-2xl"></div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-xl bg-surfaceLight text-secondary flex items-center justify-center border border-white/5 shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:bg-secondary/20 group-hover:scale-110 group-hover:text-white group-hover:border-secondary/30 transition-all duration-300 flex-shrink-0 relative z-10">
                                        {item.icon}
                                    </div>

                                    {/* Title & Description */}
                                    <div className="flex-1 min-w-0 relative z-10 text-center md:text-left">
                                        <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-secondary transition-all leading-snug mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">{item.description}</p>
                                    </div>

                                    {/* Tag & Action */}
                                    <div className="flex-shrink-0 relative z-10 flex flex-col items-center md:items-end gap-3 mt-4 md:mt-0">
                                        <span className="px-4 py-2 bg-gradient-to-r from-surfaceLight to-surfaceLight border border-white/10 rounded-xl text-xs font-bold text-secondary tracking-widest uppercase shadow-md inline-block">
                                            {item.tag}
                                        </span>
                                        {item.link && (
                                            <motion.a
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={item.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-xl text-xs font-semibold text-primary/90 hover:text-white transition-all group/btn shadow-md"
                                            >
                                                Certificate <ExternalLink size={13} className="group-hover/btn:scale-110 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                            </motion.a>
                                        )}
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

export default AchievementsSection;
