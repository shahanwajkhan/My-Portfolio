import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ArrowRight, Mail, ArrowDown, Linkedin, Github, Sparkles } from 'lucide-react';
import { fadeIn, staggerContainer, zoomIn, floatingAnimation, glowPulse } from '../../animations/variants';

const ParticleBackground = () => {
    // Generating static initial positions to avoid hydration mismatch if SSR, but fine for Vite CSR
    const particles = Array.from({ length: 15 });
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
            {particles.map((_, i) => {
                const size = Math.random() * 6 + 2;
                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full blur-[1px]"
                        style={{
                            width: size,
                            height: size,
                            background: i % 3 === 0 ? 'rgba(59, 130, 246, 0.4)' : i % 3 === 1 ? 'rgba(139, 92, 246, 0.4)' : 'rgba(16, 185, 129, 0.4)',
                            left: Math.random() * 100 + 'vw',
                            top: Math.random() * 100 + 'vh',
                        }}
                        animate={{
                            y: [0, -150 - Math.random() * 100],
                            x: [0, (Math.random() - 0.5) * 100],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                );
            })}
        </div>
    );
};

const HeroSection = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            {/* Dynamic Animated Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-[-2]"></div>
            <div
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)] rounded-full z-[-1]"
            />
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.1)_0%,_transparent_70%)] rounded-full z-[-1]"
            />
            {/* Background glowing effects & Particles */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.25)_0%,_transparent_70%)] rounded-full -z-10 animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.25)_0%,_transparent_70%)] rounded-full -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
            <ParticleBackground />

            <div className="container mx-auto px-6 md:px-12 text-center md:text-left flex flex-col-reverse md:flex-row items-center justify-between z-10 gap-12">

                {/* Text Content */}
                <motion.div
                    className="md:w-3/5 space-y-6"
                    variants={staggerContainer(0.15)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={fadeIn('up')}>
                        <span className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-semibold tracking-wider bg-primary/10 inline-block mb-2">
                            WELCOME TO MY WORLD
                        </span>
                    </motion.div>

                    <motion.h1 variants={fadeIn('up')} className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                        Hi, I'm <span className="text-gradient">Shahanwaj Khan</span>
                    </motion.h1>

                    <motion.h2 variants={fadeIn('up')} className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-300 h-24 sm:h-20 md:h-12 flex items-center justify-center md:justify-start">
                        <span className="text-primary border-r-2 border-primary pr-2 animate-pulse">
                            <Typewriter
                                words={['CSE Undergraduate', 'Full Stack Web Developer', 'MERN Stack Developer', 'AI/ML Enthusiast', 'Software Developer']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </motion.h2>

                    <motion.p variants={fadeIn('up')} className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
                        I build scalable web applications, intelligent AI-powered tools, and modern full stack platforms.
                        Let's create something extraordinary together.
                    </motion.p>

                    <motion.div variants={fadeIn('up')} className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-blue-600 transition-all w-full sm:w-auto text-center flex items-center justify-center group relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            <span className="relative z-10 flex items-center">View Projects <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" /></span>
                        </motion.a>
                        <motion.a
                            href="/LatestCV.pdf"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-xl glass text-white font-semibold hover:bg-white/10 transition-all w-full sm:w-auto text-center flex items-center justify-center group shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                        >
                            Download Resume <Download size={18} className="ml-2 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>
                    </motion.div>

                    <motion.div variants={fadeIn('up')} className="flex items-center justify-center md:justify-start space-x-6 mt-10">
                        <a href="https://github.com/shahanwajkhan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-surfaceLight p-3.5 rounded-full border border-white/10 hover:border-white/50 group" aria-label="GitHub">
                            <Github size={22} className="group-hover:-translate-y-1 transition-transform" />
                        </a>
                        <a href="https://www.linkedin.com/in/skhan234" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] bg-surfaceLight p-3.5 rounded-full border border-white/10 hover:border-[#0A66C2]/50 group" aria-label="LinkedIn">
                            <Linkedin size={22} className="group-hover:-translate-y-1 transition-transform" />
                        </a>
                        <a href="#contact" className="text-gray-400 hover:text-red-400 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(248,113,113,0.4)] bg-surfaceLight p-3.5 rounded-full border border-white/10 hover:border-red-400/50 group" aria-label="Email">
                            <Mail size={22} className="group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Profile Image Graphic */}
                <div className="md:w-2/5 flex justify-center mt-10 md:mt-0 relative">
                    <motion.div
                        variants={zoomIn()}
                        initial="hidden"
                        animate="visible"
                        className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 group z-10"
                    >
                        <motion.div variants={floatingAnimation} animate="animate" className="absolute inset-0">
                            {/* Static animated rings (CSS) */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full animate-spin-slow opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-2 bg-gradient-to-bl from-accent to-primary rounded-full animate-reverse-spin-slow opacity-50 blur-lg"></div>

                            {/* Framer motion glowing pulse on the container */}
                            <motion.div
                                className="absolute inset-3 rounded-full z-0"
                                variants={glowPulse}
                                animate="animate"
                            ></motion.div>

                            {/* Main Image Container */}
                            <div className="absolute inset-4 bg-surface rounded-full border-4 border-white/10 flex items-center justify-center overflow-hidden shadow-2xl z-10 transition-transform duration-500 group-hover:border-primary/50">
                                {/* Placeholder Image - User can replace src */}
                                <img
                                    src="/profile.jpeg"
                                    alt="Shahanwaj Khan Profile"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                                {/* Overlay gradient for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                            </div>
                        </motion.div>

                        {/* Floating Tech Badges */}
                        <motion.div
                            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -left-6 glass p-3 rounded-2xl border border-white/20 z-20 shadow-xl"
                        >
                            <div className="w-14 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <span className="font-bold text-xs">NEXT.JS</span>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-1/2 -right-8 glass p-3 rounded-2xl border border-white/20 z-20 shadow-xl"
                        >
                            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                <span className="font-bold text-xs">MERN</span>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute -bottom-8 -left-2 glass p-3 rounded-2xl border border-white/20 z-20 shadow-xl text-accent"
                        >
                            <Sparkles size={18} />
                        </motion.div>

                        {/* Available for Work badge */}
                        <motion.div
                            variants={floatingAnimation}
                            animate="animate"
                            className="absolute -bottom-4 right-4 glass px-4 py-2 rounded-2xl border border-white/20 flex items-center gap-2 z-20 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                        >
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                            <span className="text-sm font-semibold text-white tracking-wide">Available for Work</span>
                        </motion.div>

                    </motion.div>
                </div>

            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <a href="#about" className="text-gray-500 hover:text-white transition-colors" aria-label="Scroll Down">
                    <ArrowDown size={32} />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
