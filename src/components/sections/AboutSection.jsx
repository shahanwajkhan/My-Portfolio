import React, { useState, useEffect } from 'react';
import { Code2, Sparkles } from 'lucide-react';

const CodeSnippetCard = () => {
    return (
        <div className="w-full max-w-[350px] mx-auto glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative group bg-[#141414]">
            <div className="bg-surface border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">developer.js</div>
            </div>

            <div className="p-5 sm:p-6 font-mono text-[13px] sm:text-sm leading-7 text-gray-300 relative z-10 text-left">
                <div><span className="text-secondary font-semibold">const</span> <span className="text-white">developer</span> <span className="text-secondary font-semibold">=</span> {'{'}</div>
                <div className="ml-4"><span className="text-primary">name:</span> <span className="text-green-400">"Shahanwaj Khan"</span>,</div>
                <div className="ml-4"><span className="text-primary">role:</span> <span className="text-green-400">"Full Stack Developer"</span>,</div>
                <div className="ml-4"><span className="text-primary">focus:</span> ["Web", "AI", "Mobile"],</div>
                <div className="ml-4"><span className="text-primary">passion:</span> <span className="text-green-400">"Intelligent web apps"</span></div>
                <div>{'}'}<span className="text-white">;</span> <span className="inline-block w-2 h-4 bg-primary animate-pulse"></span></div>
            </div>
        </div>
    );
};

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = React.useRef(null);

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
        <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-[1600px]">
                <div className={`section-box reveal ${isVisible ? 'is-visible' : ''}`}>
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2 flex justify-center items-center gap-2">
                            <Sparkles size={16} /> Discover <Sparkles size={16} />
                        </h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">About Me</h1>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                        <div className="lg:w-4/12 hidden md:flex items-center justify-center lg:justify-start">
                            <CodeSnippetCard />
                        </div>

                        <div className="lg:w-8/12 flex items-center">
                            <div className="relative w-full space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed text-left">
                                <div className="md:hidden mb-10 flex justify-center w-full">
                                    <CodeSnippetCard />
                                </div>

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                        <Code2 className="text-primary" size={24} />
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-bold text-white">The Developer Story</h4>
                                </div>

                                <p>
                                    My journey into technology started with a simple curiosity. What began as exploring basic web pages soon turned into a deep interest in understanding the complete flow of web applications. This curiosity naturally led me toward <span className="text-secondary font-bold">Full Stack Web Development</span>, where I enjoy working across both frontend and backend to create meaningful digital experiences.
                                </p>

                                <p>
                                    As a Computer Science student, I continuously explore modern technologies such as <span className="text-primary font-bold">React, Node.js, and Python</span>. I am particularly interested in building scalable web platforms and integrating intelligent features like AI-powered tools and automation.
                                </p>

                                <p>
                                    Driven by curiosity and continuous learning, I aim to strengthen my foundations in software engineering and system design while building impactful projects that demonstrate both creativity and technical depth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(AboutSection);
