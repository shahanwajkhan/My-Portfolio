import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/variants';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Form submission states
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Web3Forms API submission
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    // REMINDER: The user must replace this with their actual Web3Forms Access Key
                    access_key: "b5f7f655-4ee9-4942-b56b-ad8efeb570ad",
                    ...formData
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form

                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error("Form submission failed:", result);
                setStatus('error');
            }
        } catch (error) {
            console.error("Network Error during form submission", error);
            setStatus('error');
        }
    };
    return (
        <section id="contact" className="py-24 relative border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 max-w-[1600px] relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-box"
                >
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer(0.1)}
                    >
                        <motion.div variants={fadeIn('up')}>
                            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Get in touch</h2>
                        </motion.div>
                        <motion.div variants={fadeIn('up')}>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Let's <span className="text-gradient">Connect</span></h3>
                        </motion.div>
                        <motion.div variants={fadeIn('up')}>
                            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg text-center">
                                Have a project in mind or want to discuss opportunities? I'm always open to talking about product design, new technologies, or coffee.
                            </p>
                        </motion.div>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                        <motion.div
                            className="lg:w-1/3 space-y-8 text-left"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer(0.2)}
                        >
                            <motion.div variants={fadeIn('right')} className="flex items-start group text-left">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 shrink-0 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                                    <Mail size={24} className="group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-bold text-xl mb-1 text-left">Email</h4>
                                    <a href="mailto:shahanwajk581@gmail.com" className="text-gray-400 hover:text-primary transition-colors text-lg break-all focus:outline-none focus:text-primary text-left">shahanwajk581@gmail.com</a>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn('right')} className="flex items-start group text-left">
                                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mr-6 shrink-0 border border-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                                    <Phone size={24} className="group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-bold text-xl mb-1 text-left">Phone</h4>
                                    <a href="tel:+919140198142" className="text-gray-400 hover:text-secondary transition-colors text-lg focus:outline-none focus:text-secondary text-left">+91 9140198142</a>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn('right')} className="flex items-start group text-left">
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mr-6 shrink-0 border border-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(14,165,233,0.1)] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                                    <MapPin size={24} className="group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-bold text-xl mb-1 text-left">Location</h4>
                                    <p className="text-gray-400 text-lg text-left">Phagwara, Punjab</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <div className="lg:w-2/3 w-full">
                            <motion.form
                                onSubmit={handleSubmit}
                                className="glass p-6 sm:p-8 md:p-10 rounded-3xl border border-white/5 space-y-6 relative overflow-hidden text-left"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                            >
                                {/* Subtle background glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)] rounded-full pointer-events-none"></div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 text-left">
                                    <div className="space-y-2 text-left">
                                        <label className="text-sm font-semibold text-gray-300 ml-1 text-left">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-surfaceLight border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white/5 transition-all placeholder:text-gray-600 text-left"
                                        />
                                    </div>
                                    <div className="space-y-2 text-left">
                                        <label className="text-sm font-semibold text-gray-300 ml-1 text-left">Your Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-surfaceLight border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white/5 transition-all placeholder:text-gray-600 text-left"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 relative z-10 text-left">
                                    <label className="text-sm font-semibold text-gray-300 ml-1 text-left">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project Inquiry"
                                        className="w-full bg-surfaceLight border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white/5 transition-all placeholder:text-gray-600 text-left"
                                    />
                                </div>

                                <div className="space-y-2 relative z-10 text-left">
                                    <label className="text-sm font-semibold text-gray-300 ml-1 text-left">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Hello, I'd like to talk about..."
                                        className="w-full bg-surfaceLight border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white/5 transition-all placeholder:text-gray-600 resize-none text-left"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={status !== 'submitting' ? { scale: 1.02, y: -2 } : {}}
                                    whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className={`w-full font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex justify-center items-center group relative overflow-hidden z-10 focus:outline-none focus:ring-2 focus:ring-white ${status === 'success'
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]'
                                        : status === 'error'
                                            ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                                            : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]'
                                        }`}
                                >
                                    {/* Shine effect */}
                                    {status === 'idle' && (
                                        <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-shine"></div>
                                    )}

                                    {status === 'submitting' ? (
                                        <span className="flex items-center"><Loader2 size={20} className="animate-spin mr-3" /> Sending Message...</span>
                                    ) : status === 'success' ? (
                                        <span className="flex items-center"><CheckCircle2 size={20} className="mr-3" /> Message Sent Successfully!</span>
                                    ) : status === 'error' ? (
                                        <span>Failed to send. Please try again.</span>
                                    ) : (
                                        <span className="flex items-center">Send Message <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                                    )}
                                </motion.button>

                                {/* Hidden honeypot field to prevent spam */}
                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                            </motion.form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
