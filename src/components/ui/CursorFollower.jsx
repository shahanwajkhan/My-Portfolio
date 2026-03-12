import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorFollower = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Position of the actual mouse
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth position for the follower
    const springConfig = { damping: 25, stiffness: 250 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible, mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-80 h-80 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15000000000000002)_0%,_transparent_70%)] rounded-full pointer-events-none z-0 hidden lg:block"
            style={{
                x: cursorX,
                y: cursorY,
                transform: 'translate(-50%, -50%)',
                opacity: isVisible ? 1 : 0,
            }}
            transition={{ opacity: { duration: 0.5 } }}
        />
    );
};

export default CursorFollower;
