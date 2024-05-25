import styles from '../Header/header.module.css';
import { motion } from 'framer-motion';

const links = [
    {
        title: "Agency",
        href: "/"
    },
    {
        title: "Expertise",
        href: "/"
    },
    {
        title: "Blog",
        href: "/"
    },
    {
        title: "Contact",
        href: "/"
    }
]
const footerLinks = [
    {
        title: "Facebook",
        href: "/"
    },
    {
        title: "LinkedIn",
        href: "/"
    },
    {
        title: "Instagram",
        href: "/"
    },
    {
        title: "Twitter",
        href: "/"
    },
]
const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20
    },
    enter: (i) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65,
            opacity: { duration: 1 },
            delay: 0.5 + (i * 0.1),
            ease: [.215, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    }
}

const slideIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            opacity: { duration: 0.35 },
            delay: 0.75 + (i * 0.1),
            ease: [.215, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    }
}

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    links.map((link, i) => {
                        return (
                            <div key={i} className={styles.linkContainer}>
                                <motion.div
                                    custom={i}
                                    variants={perspective}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                >
                                    <a href={link.href} className='num' data-number={i+1} >{link.title}</a>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.footer}>
                {
                    footerLinks.map((link, i) => {
                        return (
                            <motion.a
                                key={`f_${i}`}
                                href={link.href}
                                custom={i}
                                variants={slideIn}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                            >{link.title}</motion.a>
                        )
                    })
                }
            </div>
        </div>
    )
}