import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Sparkles, ChevronRight } from 'lucide-react';
import { fadeIn, staggerContainer } from '../../animations/variants';

const CodeSnippetCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5, zIndex: 50, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full max-w-[350px] mx-auto glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative group bg-gradient-to-br from-white/[0.03] to-transparent cursor-pointer perspective-1000"
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

            {/* Header */}
            <div className="bg-surface border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">developer.js</div>
            </div>

            {/* Code Body */}
            <div className="p-5 sm:p-6 font-mono text-[13px] sm:text-sm leading-7 text-gray-300 relative z-10 text-left">
                <div><span className="text-secondary font-semibold">const</span> <span className="text-white">developer</span> <span className="text-secondary font-semibold">=</span> {'{'}</div>
                <div className="ml-4"><span className="text-primary">name:</span> <span className="text-green-400">"Shahanwaj Khan"</span>,</div>
                <div className="ml-4"><span className="text-primary">role:</span> <span className="text-green-400">"Full Stack Developer"</span>,</div>
                <div className="ml-4"><span className="text-primary">focus:</span> [</div>
                <div className="ml-8"><span className="text-green-400">"Web Development"</span>,</div>
                <div className="ml-8"><span className="text-green-400">"AI Tools"</span>,</div>
                <div className="ml-8"><span className="text-green-400">"Problem Solving"</span></div>
                <div className="ml-4">],</div>
                <div className="ml-4"><span className="text-primary">passion:</span> <span className="text-green-400">"Building intelligent web applications"</span></div>
                <div>{'}'}<span className="text-white">;</span>
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
                    ></motion.span>
                </div>
            </div>
        </motion.div>
    );
};

const AboutSection = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15000000000000002)_0%,_transparent_70%)] rounded-full -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.15000000000000002)_0%,_transparent_70%)] rounded-full -z-10 pointer-events-none"></div>

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
                        <motion.h2 variants={fadeIn('up')} className="text-sm font-bold tracking-widest text-primary uppercase mb-2 flex justify-center items-center gap-2">
                            <Sparkles size={16} /> Discover <Sparkles size={16} />
                        </motion.h2>
                        <motion.h3 variants={fadeIn('up')} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            About <span className="text-gradient">Me</span>
                        </motion.h3>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                        {/* Left Column: Compact Code Card */}
                        <div className="lg:w-4/12 hidden md:flex items-center justify-center lg:justify-start">
                            <CodeSnippetCard />
                        </div>

                        {/* Right Column: Developer Story */}
                        <div className="lg:w-8/12 flex items-center">
                            <motion.div
                                variants={staggerContainer(0.2)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="relative w-full"
                            >
                                {/* Mobile Code Card */}
                                <div className="md:hidden mb-10 flex justify-center w-full">
                                    <CodeSnippetCard />
                                </div>

                                <div className="relative z-10 space-y-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-left">
                                    <motion.div
                                        variants={fadeIn('up')}
                                        className="flex items-center gap-3 mb-6"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                            <Code2 className="text-primary" size={24} />
                                        </div>
                                        <h4 className="text-xl sm:text-2xl font-bold text-white">The Developer Story</h4>
                                    </motion.div>

                                    <motion.p variants={fadeIn('up')} className="relative group">
                                        My journey into technology started with a simple curiosity, how websites actually work behind the scenes. What began as exploring basic web pages soon turned into a deep interest in understanding the complete flow of web applications from designing natural user interfaces to building the backend systems that power them. This curiosity naturally led me toward <span className="text-secondary font-bold relative inline-block underline-animation">
                                            Full Stack Web Development
                                            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                        </span>, where I enjoy working across both frontend and backend to create meaningful digital experiences.
                                    </motion.p>

                                    <motion.p variants={fadeIn('up')}>
                                        As a Computer Science student, I continuously explore modern technologies such as <motion.span whileHover={{ scale: 1.1, filter: "brightness(1.5)" }} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 font-bold drop-shadow-[0_0_5px_rgba(250,204,21,0.5)] cursor-default">HTML, CSS, JavaScript</motion.span>, <motion.span whileHover={{ scale: 1.1, filter: "brightness(1.5)" }} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] cursor-default">React</motion.span>, <motion.span whileHover={{ scale: 1.1, filter: "brightness(1.5)" }} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200 font-bold drop-shadow-[0_0_5px_rgba(74,222,128,0.5)] cursor-default">Node.js</motion.span>, and <motion.span whileHover={{ scale: 1.1, filter: "brightness(1.5)" }} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 font-bold drop-shadow-[0_0_5px_rgba(96,165,250,0.5)] cursor-default">Python</motion.span>, focusing on how different components of a system connect and function together. I am particularly interested in building scalable web platforms and integrating intelligent features like <span className="text-white font-semibold relative inline-block group">
                                            AI-powered tools and automation
                                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                        </span>. For me, development is not just about writing code, it is about solving problems, experimenting with ideas, and transforming concepts into real-world applications that deliver value to users.
                                    </motion.p>

                                    <motion.p variants={fadeIn('up')}>
                                        Driven by curiosity and continuous learning, I aim to strengthen my foundations in <span className="text-white font-semibold relative inline-block group">
                                            software engineering and system design
                                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                        </span> while building impactful projects that demonstrate both creativity and technical depth.
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
