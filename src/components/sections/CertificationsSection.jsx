import React from 'react';
import { ExternalLink, Server, Layout, Bot, Cloud } from 'lucide-react';
import { FaPython, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/variants';

const CertificationsSection = () => {
    const certifications = [
        {
            title: 'AWS SimuLearn: Cloud Computing Essentials',
            issuer: 'AWS',
            link: 'https://drive.google.com/file/d/1pGliEkc3ymui42P8obcun8qKddzkptLU/view?usp=sharing',
            date: 'Recent',
            icon: <Cloud size={28} />
        },
        {
            title: 'Oracle Cloud Infrastructure Foundations Associate',
            issuer: 'Oracle',
            link: 'https://drive.google.com/file/d/1ChZd_C_44eqLc4rnbfC1TcC1mQ5NAHZR/view?usp=sharing',
            date: 'Recent',
            icon: <Cloud size={28} />
        },
        {
            title: 'Python Essentials',
            issuer: 'Cisco Networking Academy',
            link: 'https://drive.google.com/file/d/16hDUmdobcIUhobrl0Qw7r5oscY3Mh9lV/view?usp=sharing',
            date: 'Recent',
            icon: <FaPython size={28} />
        },
        {
            title: 'Full Stack Development',
            issuer: 'NASSCOM Foundation',
            link: 'https://thingqbator.s3.ap-south-1.amazonaws.com/1766762590805_ShahanwajKhan_Course-Excellence.pdf#page=1&toolbar=0&navpanes=0&scrollbar=0&view=Fit',
            date: 'Recent',
            icon: <FaReact size={28} />
        },
        {
            title: 'ChatGPT Prompt Engineering',
            issuer: 'Infosys Springboard',
            link: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_014157693153288192147/1-0a01def3-f80d-4b4b-b4a7-f6f8f327cb62.pdf',
            date: 'Recent',
            icon: <Bot size={28} />
        },
        {
            title: 'IBM Hardware & OS',
            issuer: 'Coursera',
            link: 'https://www.coursera.org/account/accomplishments/certificate/NIGGSETQTNTK',
            date: 'Recent',
            icon: <Server size={28} />
        },
        {
            title: 'Responsive Web Design',
            issuer: 'FreeCodeCamp',
            link: 'https://www.freecodecamp.org/certification/fccc9a7457c-1a9c-4988-9aaa-a5811ef1aa2e/responsive-web-design',
            date: 'Recent',
            icon: <Layout size={28} />
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
        <section id="certifications" className="py-24 relative overflow-hidden text-gray-100 border-t border-white/5">
            {/* Simplified Background element */}
            <div
                className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.08)_0%,_transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
            ></div>

            {/* Removed particles for performance */}

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
                            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Qualifications</h2>
                        </motion.div>
                        <motion.div variants={fadeIn('up')}>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Licenses & <span className="text-gradient">Certifications</span></h3>
                        </motion.div>
                        <motion.div variants={fadeIn('up')}>
                            <p className="text-gray-400 text-lg">
                                Continuous learning and professional development through recognized industry certifications.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer(0.1)}
                    >
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeIn('up')}
                                style={{ perspective: 1000 }}
                            >
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                    className="glass px-5 sm:px-6 py-4 sm:py-5 rounded-2xl border border-white/5 hover:border-secondary/20 transition-all duration-300 relative group flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 shadow-sm bg-[#161622] overflow-hidden text-center sm:text-left will-change-transform"
                                >
                                    {/* Simplified highlight */}
                                    <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>

                                    {/* Left accent bar */}
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-primary opacity-50 group-hover:opacity-100 group-hover:w-1.5 transition-all duration-300 rounded-l-2xl"></div>

                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-surfaceLight text-secondary flex items-center justify-center border border-white/5 transition-all duration-300 flex-shrink-0 relative z-10">
                                        {cert.icon}
                                    </div>

                                    {/* Title & Issuer */}
                                    <div className="flex-1 min-w-0 relative z-10">
                                        <p className="text-xs text-secondary font-semibold uppercase tracking-widest mb-1">{cert.issuer}</p>
                                        <h4 className="text-base font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-secondary transition-all leading-snug truncate">{cert.title}</h4>
                                    </div>

                                    {/* Button */}
                                    <motion.a
                                        whileHover={{ scale: 1.05, x: 2 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-surfaceLight to-surfaceLight hover:from-secondary/20 hover:to-primary/20 border border-white/10 hover:border-secondary/40 rounded-xl text-[10px] sm:text-xs font-semibold text-gray-300 hover:text-white transition-all group/btn shadow-md relative z-10 w-full sm:w-auto justify-center"
                                    >
                                        View Credential <ExternalLink size={12} className="group-hover/btn:scale-110 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default React.memo(CertificationsSection);
