import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#hero');

    useEffect(() => {
        let lastScrollTime = 0;
        const throttleDelay = 100; // ms

        const handleScroll = () => {
            const now = Date.now();
            if (now - lastScrollTime < throttleDelay) return;
            lastScrollTime = now;

            setScrolled(window.scrollY > 50);

            // Scroll Spy Logic
            const sections = navLinks.map(link => link.href.substring(1));
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        current = `#${section}`;
                        break;
                    }
                }
            }

            if (current && current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

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

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b ${scrolled
                        ? 'bg-background/95 border-white/5 py-3 shadow-lg'
                        : 'bg-transparent border-transparent py-6'
                    }`}
            >
                {/* Subtle top border glow when scrolled */}
                <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>

                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-10">

                    {/* Logo */}
                    <motion.a
                        href="#"
                        onClick={(e) => handleNavClick(e, '#hero')}
                        className="relative text-2xl font-bold tracking-wide cursor-pointer flex items-center gap-1 group z-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span
                            className="text-primary group-hover:text-accent font-mono transition-colors drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >&lt;</motion.span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 group-hover:from-white group-hover:via-primary group-hover:to-secondary transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] text-xl sm:text-2xl">
                            Shahanwaj
                        </span>
                        <motion.span
                            className="text-primary group-hover:text-accent font-mono transition-colors drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        >/&gt;</motion.span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
                        <div className="flex items-center space-x-1 xl:space-x-3 bg-white/[0.03] rounded-full px-4 py-2 border border-white/5 shadow-inner">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href;
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        initial={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
                                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={`relative px-3 py-1.5 text-sm xl:text-base font-medium transition-colors group z-10 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        <span className={`relative z-10 transition-shadow ${isActive ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]'}`}>
                                            {link.name}
                                        </span>

                                        {/* Animated Moving Highlight Bar */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute inset-0 bg-white/10 rounded-full border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] -z-10"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                            />
                                        )}

                                        {/* Hover Underline (Only for inactive links) */}
                                        {!isActive && (
                                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-[80%] transition-all duration-300 ease-out opacity-0 group-hover:opacity-100"></span>
                                        )}
                                    </motion.a>
                                )
                            })}
                        </div>

                        {/* Desktop Hire Me Button */}
                        <motion.a
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="relative ml-4 px-6 py-2.5 rounded-full font-semibold overflow-hidden group shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:from-secondary group-hover:to-accent"></div>
                            {/* Inner Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/30 to-transparent transition-opacity duration-300"></div>
                            <span className="relative z-10 text-white tracking-wide flex items-center gap-2">
                                Hire Me
                                <motion.span
                                    className="w-2 h-2 rounded-full bg-white"
                                    animate={{ opacity: [1, 0.4, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </span>
                        </motion.a>
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className="lg:hidden flex items-center z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative text-white focus:outline-none p-2.5 rounded-xl bg-surfaceLight/80 border border-white/5 hover:bg-white/10 transition-all shadow-md"
                            aria-label="Toggle Menu"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isOpen ? 'close' : 'menu'}
                                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed top-0 right-0 h-screen w-[80%] max-w-[300px] bg-surface border-l border-white/5 shadow-2xl flex flex-col pt-24 pb-6 px-5 overflow-y-auto z-40 lg:hidden"
                    >
                        <div className="flex flex-col space-y-1">
                            {navLinks.map((link, i) => {
                                const isActive = activeSection === link.href;
                                return (
                                    <motion.a
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.04 }}
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`relative px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center overflow-hidden ${isActive
                                                ? 'text-white bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                                            }`}
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="mobile-indicator"
                                                className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </motion.a>
                                )
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 pt-6 border-t border-white/10"
                        >
                            <a
                                href="#contact"
                                onClick={(e) => handleNavClick(e, '#contact')}
                                className="flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-secondary shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95 transition-transform"
                            >
                                Hire Me
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
