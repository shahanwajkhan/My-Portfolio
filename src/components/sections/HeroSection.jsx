import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ArrowRight, Linkedin, Github, Mail, ArrowDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)] rounded-full -z-10 animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.15)_0%,_transparent_70%)] rounded-full -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 md:px-12 text-center md:text-left flex flex-col-reverse md:flex-row items-center justify-between z-10 gap-12">
                {/* Text Content */}
                <div className="md:w-3/5 space-y-6">
                    <div>
                        <span className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-semibold tracking-wider bg-primary/10 inline-block mb-2">
                            WELCOME TO MY WORLD
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                        Hi, I'm <span className="text-gradient">Shahanwaj Khan</span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-300 h-24 sm:h-20 md:h-12 flex items-center justify-center md:justify-start">
                        <span className="text-primary border-r-2 border-primary pr-2">
                            <Typewriter
                                words={['CSE Undergraduate', 'Full Stack Developer', 'MERN Expert', 'AI Enthusiast']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
                        I build scalable web applications, intelligent AI-powered tools, and modern full stack platforms.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-blue-600 transition-all w-full sm:w-auto text-center flex items-center justify-center group"
                        >
                            View Projects <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/LatestCV.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 rounded-xl glass text-white font-semibold hover:bg-white/10 transition-all w-full sm:w-auto text-center flex items-center justify-center group"
                        >
                            Resume <Download size={18} className="ml-2 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start space-x-6 mt-10">
                        <a href="https://github.com/shahanwajkhan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all bg-surfaceLight p-3 rounded-full border border-white/10 flex items-center justify-center">
                            <Github size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/skhan234" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all bg-surfaceLight p-3 rounded-full border border-white/10 flex items-center justify-center">
                            <Linkedin size={22} />
                        </a>
                        <a href="mailto:shahanwaj.khan.dev@gmail.com" className="text-gray-400 hover:text-red-400 transition-all bg-surfaceLight p-3 rounded-full border border-white/10 flex items-center justify-center">
                            <Mail size={22} />
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="md:w-2/5 flex justify-center mt-10 md:mt-0 relative">
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full animate-spin-slow opacity-30 blur-xl"></div>
                        <div className="absolute inset-4 bg-surface rounded-full border-4 border-white/10 flex items-center justify-center overflow-hidden shadow-2xl z-10 transition-transform duration-500 group-hover:scale-105 group-hover:border-primary/50">
                            <img
                                src="/profile.jpeg"
                                alt="Shahanwaj Khan"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <a href="#about" className="text-gray-500 hover:text-white transition-colors">
                    <ArrowDown size={32} />
                </a>
            </div>
        </section>
    );
};

export default React.memo(HeroSection);
