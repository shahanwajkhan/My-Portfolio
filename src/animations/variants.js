export const fadeIn = (direction = 'up', delay = 0, duration = 0.5) => ({
    hidden: {
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        opacity: 0,
    },
    visible: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: duration,
            delay: delay,
            ease: [0.25, 0.25, 0.25, 0.75],
        },
    },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren,
        },
    },
});

export const zoomIn = (delay = 0, duration = 0.5) => ({
    hidden: {
        scale: 0.8,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: duration,
            delay: delay,
            bounce: 0.3,
        },
    },
});

export const hoverCardLift = {
    rest: { y: 0, scale: 1 },
    hover: {
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 10 }
    }
};

export const hoverButtonScale = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
};

export const floatingAnimation = {
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const glowPulse = {
    animate: {
        boxShadow: [
            "0 0 0px 0px rgba(59, 130, 246, 0)",
            "0 0 20px 5px rgba(59, 130, 246, 0.5)",
            "0 0 0px 0px rgba(59, 130, 246, 0)",
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};
