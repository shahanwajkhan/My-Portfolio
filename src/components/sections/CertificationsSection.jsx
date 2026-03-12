import React from 'react';
import { ExternalLink, Server, Layout, Bot, Cloud } from 'lucide-react';
import { FaPython, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/variants';

const CertificationsSection = () => {
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

    const certifications = [
        {
            title: 'AWS SimuLearn: Cloud Computing Essentials',
            issuer: 'AWS',
            link: 'https://drive.google.com/file/d/1pGliEkc3ymui42P8obcun8qKddzkptLU/view?usp=sharing',
            date: 'Recent',
            icon: <Cloud size={24} />
        },
        {
            title: 'Oracle Cloud Infrastructure Foundations Associate',
            issuer: 'Oracle',
            link: 'https://drive.google.com/file/d/1ChZd_C_44eqLc4rnbfC1TcC1mQ5NAHZR/view?usp=sharing',
            date: 'Recent',
            icon: <Cloud size={24} />
        },
        {
            title: 'Python Essentials',
            issuer: 'Cisco Networking Academy',
            link: 'https://drive.google.com/file/d/16hDUmdobcIUhobrl0Qw7r5oscY3Mh9lV/view?usp=sharing',
            date: 'Recent',
            icon: <FaPython size={24} />
        },
        {
            title: 'Full Stack Development',
            issuer: 'NASSCOM Foundation',
            link: 'https://thingqbator.s3.ap-south-1.amazonaws.com/1766762590805_ShahanwajKhan_Course-Excellence.pdf',
            date: 'Recent',
            icon: <FaReact size={24} />
        },
        {
            title: 'ChatGPT Prompt Engineering',
            issuer: 'Infosys Springboard',
            link: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_014157693153288192147/1-0a01def3-f80d-4b4b-b4a7-f6f8f327cb62.pdf',
            date: 'Recent',
            icon: <Bot size={24} />
        }
    ];

    return (
        <section id="certifications" ref={sectionRef} className="py-24 relative overflow-hidden text-gray-100 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1600px]">
                <div className={`section-box reveal ${isVisible ? 'is-visible' : ''}`}>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Qualifications</h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Certifications</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="glass px-5 sm:px-6 py-4 rounded-2xl border border-white/5 group flex flex-col sm:flex-row items-center gap-4 bg-white/[0.02]">
                                <div className="w-12 h-12 rounded-xl bg-surfaceLight text-secondary flex items-center justify-center shrink-0">
                                    {cert.icon}
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">{cert.issuer}</p>
                                    <h4 className="text-base font-bold text-white">{cert.title}</h4>
                                </div>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold hover:bg-white/10 transition-all"
                                >
                                    View Link
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(CertificationsSection);
