import React from 'react';
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-white/10 pt-20 pb-10 z-10 bg-surface/50">
            {/* Subtle Gradient Overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60"></div>
            {/* Background Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15000000000000002)_0%,_transparent_70%)] rounded-full pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.15000000000000002)_0%,_transparent_70%)] rounded-full pointer-events-none -z-10"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1600px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">

                        {/* Column 1: Brand / Identity */}
                        <div className="md:col-span-5 flex flex-col items-start text-left">
                            <motion.a
                                href="#hero"
                                whileHover={{ scale: 1.05 }}
                                className="text-3xl font-bold text-white tracking-wide cursor-pointer flex items-center gap-1 group mb-6"
                            >
                                <span className="text-primary group-hover:rotate-[-20deg] transition-transform">&lt;</span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Shahanwaj</span>
                                <span className="text-primary group-hover:rotate-[20deg] transition-transform">/&gt;</span>
                            </motion.a>
                            <p className="text-xl font-semibold text-white mb-4">
                                Full Stack Developer building intelligent web applications.
                            </p>
                            <p className="text-gray-400 leading-relaxed text-base max-w-md">
                                Turning ideas into scalable digital solutions. Passionate about clean code, modern design, and creating impactful user experiences.
                            </p>
                        </div>

                        {/* Column 2: Quick Navigation */}
                        <div className="md:col-span-4 flex flex-col text-left">
                            <h3 className="text-xl font-bold text-white mb-6 tracking-wide">Quick Navigation</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        whileHover={{ x: 5 }}
                                        className="text-gray-400 hover:text-primary transition-all duration-300 font-medium relative group w-fit flex items-center gap-2"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300"></div>
                                        {link.name}
                                        <span className="absolute -bottom-1 left-3.5 w-0 h-[1px] bg-primary group-hover:w-[calc(100%-14px)] transition-all duration-300"></span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Column 3: Connect With Me */}
                        <div className="md:col-span-3 flex flex-col items-start md:items-end text-left md:text-right">
                            <h3 className="text-xl font-bold text-white mb-6 tracking-wide w-full md:text-right text-left">Connect With Me</h3>
                            <div className="flex flex-col gap-4 w-full items-start md:items-end">
                                <motion.a
                                    href="https://www.linkedin.com/in/skhan234"
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ x: -5, scale: 1.05 }}
                                    className="flex items-center gap-3 text-gray-400 hover:text-[#0A66C2] transition-colors group"
                                >
                                    <span className="text-base font-medium hidden md:block group-hover:text-white transition-colors">LinkedIn</span>
                                    <div className="p-2.5 rounded-xl bg-surfaceLight border border-white/5 group-hover:border-[#0A66C2]/30 group-hover:bg-[#0A66C2]/10 transition-all shadow-lg group-hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]">
                                        <Linkedin size={20} />
                                    </div>
                                    <span className="text-base font-medium md:hidden block group-hover:text-white transition-colors">LinkedIn</span>
                                </motion.a>

                                <motion.a
                                    href="https://github.com/shahanwajkhan"
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ x: -5, scale: 1.05 }}
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <span className="text-base font-medium hidden md:block group-hover:text-white transition-colors">GitHub</span>
                                    <div className="p-2.5 rounded-xl bg-surfaceLight border border-white/5 group-hover:border-white/30 group-hover:bg-white/10 transition-all shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                        <Github size={20} />
                                    </div>
                                    <span className="text-base font-medium md:hidden block group-hover:text-white transition-colors">GitHub</span>
                                </motion.a>

                                <motion.a
                                    href="#contact"
                                    whileHover={{ x: -5, scale: 1.05 }}
                                    className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group"
                                >
                                    <span className="text-base font-medium hidden md:block group-hover:text-white transition-colors">Email</span>
                                    <div className="p-2.5 rounded-xl bg-surfaceLight border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all shadow-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                        <Mail size={20} />
                                    </div>
                                    <span className="text-base font-medium md:hidden block group-hover:text-white transition-colors">Email</span>
                                </motion.a>
                            </div>
                        </div>

                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
                        <p className="text-sm font-medium text-gray-400 tracking-wider flex items-center justify-center flex-wrap gap-2 group cursor-pointer hover:text-white transition-colors">
                            &copy; 2026 Shahanwaj Khan &mdash; Built with passion and
                            <Code size={16} className="text-primary inline mx-1 group-hover:animate-pulse" />
                            code.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
