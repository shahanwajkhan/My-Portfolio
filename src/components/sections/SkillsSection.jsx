import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/variants';

import {
    FaPython, FaJava, FaReact, FaNodeJs, FaHtml5,
    FaCss3Alt, FaGithub, FaFigma, FaDatabase, FaCode, FaJsSquare, FaDocker, FaAws, FaVuejs, FaBootstrap
} from 'react-icons/fa';
import { Terminal, Server, Shield, Cloud, Bot, Sparkles, MessageSquare, Box, Layout, Triangle, Layers, Wind } from 'lucide-react';

const skills = {
    languages: [
        { name: "C++", icon: <FaCode /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "TypeScript", icon: <Terminal size={18} /> },
        { name: "SQL", icon: <FaDatabase /> }
    ],
    frontend: [
        { name: "React.js", icon: <FaReact />, color: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" },
        { name: "Next.js", icon: <Terminal size={18} />, color: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" },
        { name: "Vue.js", icon: <FaVuejs />, color: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" },
        { name: "Tailwind CSS", icon: <Wind size={18} />, color: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" },
        { name: "Material-UI", icon: <Layers size={18} />, color: "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" },
        { name: "Radix UI", icon: <Layers size={18} />, color: "bg-gray-400 shadow-[0_0_8px_rgba(156,163,175,0.8)]" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" },
        { name: "HTML5 / CSS3", icon: <FaHtml5 />, color: "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" }
    ],
    backend: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaNodeJs /> },
        { name: "Django", icon: <FaPython /> },
        { name: "Flask", icon: <FaPython /> },
        { name: "FastAPI", icon: <FaPython /> },
        { name: "REST API", icon: <Server size={18} /> },
        { name: "JWT Authentication", icon: <Shield size={18} /> }
    ],
    databases: [
        { name: "MongoDB", icon: <FaDatabase /> },
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "PostgreSQL", icon: <FaDatabase /> },
        { name: "Firebase", icon: <Cloud size={18} /> },
        { name: "SQLite", icon: <FaDatabase /> }
    ],
    ai: [
        { name: "OpenAI API", icon: <Bot size={18} /> },
        { name: "Gemini API", icon: <Sparkles size={18} /> },
        { name: "Prompt Engineering", icon: <MessageSquare size={18} /> }
    ],
    tools: [
        { name: "Git", icon: <FaGithub /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "Postman", icon: <Box size={18} /> },
        { name: "Canva", icon: <Layout size={18} /> },
        { name: "Figma", icon: <FaFigma /> }
    ],
    devops: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Vercel", icon: <Triangle size={18} /> }
    ]
};

const categories = [
    { id: 'languages', label: 'Programming Languages' },
    { id: 'frontend', label: 'Frontend Development' },
    { id: 'backend', label: 'Backend Development' },
    { id: 'databases', label: 'Databases' },
    { id: 'ai', label: 'AI / LLM Tools' },
    { id: 'devops', label: 'Cloud & DevOps' },
    { id: 'tools', label: 'Tools & Platforms' }
];

const categoryLabel = (id) => categories.find(c => c.id === id)?.label || id;

const SkillCard = ({ skill }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 2000);
        }
    };

    const rainbowColors = [
        "#ef4444", "#f97316", "#eab308", "#22c55e",
        "#06b6d4", "#3b82f6", "#8b5cf6", "#ef4444"
    ];

    const dotColorClass = skill.color ? skill.color.split(' ')[0] : 'bg-[#3b82f6]';

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
            }}
            whileHover={!isAnimating ? {
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                borderColor: "rgba(59,130,246,0.3)",
                backgroundColor: "rgba(59,130,246,0.05)"
            } : { scale: 1.05, y: -5 }}
            animate={isAnimating ? {
                boxShadow: rainbowColors.map(c => `0 10px 25px -5px ${c}66`),
                borderColor: rainbowColors,
                transition: { duration: 2, ease: "linear" }
            } : {
                boxShadow: "0 0px 0px 0px rgba(0,0,0,0)",
                borderColor: "rgba(255,255,255,0.03)"
            }}
            onClick={handleClick}
            className="bg-[#141414] flex items-center p-4 rounded-xl border transition-colors duration-300 group cursor-pointer relative overflow-hidden"
        >
            {/* Animated background glow on click */}
            {isAnimating && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.15, 0],
                        background: rainbowColors.map(c => `linear-gradient(90deg, transparent, ${c}, transparent)`),
                        transition: { duration: 2, ease: "linear" }
                    }}
                    className="absolute inset-0 pointer-events-none"
                />
            )}

            {/* Colored indicator dot */}
            <div className={`w-2.5 h-2.5 rounded-full mr-4 shrink-0 relative z-10 ${dotColorClass}`}>
                <motion.div
                    animate={isAnimating ? {
                        backgroundColor: rainbowColors,
                        transition: { duration: 2, ease: "linear" }
                    } : {}}
                    className="w-full h-full rounded-full animate-pulse opacity-50 blur-[2px] bg-inherit"
                ></motion.div>
            </div>

            {/* Skill icon */}
            <motion.div
                animate={isAnimating ? {
                    color: rainbowColors,
                    transition: { duration: 2, ease: "linear" }
                } : {}}
                className={`text-gray-400 ${!isAnimating && 'group-hover:text-primary'} transition-colors text-xl mr-3 shrink-0 relative z-10`}
            >
                {skill.icon}
            </motion.div>

            <motion.h4
                animate={isAnimating ? {
                    color: rainbowColors,
                    transition: { duration: 2, ease: "linear" }
                } : {}}
                className={`text-white font-medium text-sm transition-colors relative z-10 truncate`}
            >
                {skill.name}
            </motion.h4>
        </motion.div>
    );
};

const SkillsSection = () => {
    const [activeTab, setActiveTab] = useState('languages');
    const activeSkills = skills[activeTab] || [];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 max-w-[1600px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-box"
                >
                    {/* Header with Styled Title */}
                    <div className="text-center mb-16">
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white skill-title-glow tracking-tight">
                            Skills
                        </h3>
                    </div>

                    {/* Categories filtering - Inbox Style */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-20">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border focus:outline-none ${activeTab === category.id
                                    ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                                    : 'bg-white/5 text-gray-400 border-white/5 hover:border-primary/50 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                                    }`}
                            >
                                {category.label}
                            </motion.button>
                        ))}
                    </div>

                    <div className="w-full h-px bg-white/5 mb-16 px-10"></div>

                    {/* Skills Grid */}
                    <motion.div layout className="min-h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.98 },
                                    visible: {
                                        opacity: 1,
                                        scale: 1,
                                        transition: { staggerChildren: 0.03, ease: "easeOut" }
                                    }
                                }}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                            >
                                {activeSkills.map((skill) => (
                                    <SkillCard key={skill.name} skill={skill} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
