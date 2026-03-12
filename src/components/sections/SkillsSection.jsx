import React, { useState, useEffect } from 'react';
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
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <Terminal size={18} /> },
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "Tailwind CSS", icon: <Wind size={18} /> },
        { name: "Material-UI", icon: <Layers size={18} /> },
        { name: "Radix UI", icon: <Layers size={18} /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "HTML5 / CSS3", icon: <FaHtml5 /> }
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

const SkillCard = ({ skill }) => {
    return (
        <div className="bg-[#141414] flex items-center p-4 rounded-xl border border-white/5 transition-all duration-300 hover:border-primary/50 group cursor-pointer">
            <div className={`w-2.5 h-2.5 rounded-full mr-4 shrink-0 bg-primary/50 group-hover:bg-primary transition-colors`}></div>
            <div className={`text-gray-400 group-hover:text-primary transition-colors text-xl mr-3 shrink-0`}>
                {skill.icon}
            </div>
            <h4 className={`text-white font-medium text-sm transition-colors truncate`}>
                {skill.name}
            </h4>
        </div>
    );
};

const SkillsSection = () => {
    const [activeTab, setActiveTab] = useState('languages');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = React.useRef(null);
    const activeSkills = skills[activeTab] || [];

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
        <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 max-w-[1600px] relative z-10">
                <div className={`section-box reveal ${isVisible ? 'is-visible' : ''}`}>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                            Skills
                        </h1>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-20">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border focus:outline-none ${activeTab === category.id
                                    ? 'bg-primary text-white border-transparent'
                                    : 'bg-white/5 text-gray-400 border-white/5 hover:border-primary/50 hover:text-white'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {activeSkills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(SkillsSection);
