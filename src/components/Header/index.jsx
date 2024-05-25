"use client"
import { useEffect, useState } from "react";
import MenuBtn from "../MenuBtn";
import Nav from "../Nav";
import { AnimatePresence, motion } from 'framer-motion';
import styles from './header.module.css';
import Link from "next/link";
import useDeviceSize from "@/utils/useDeviceSize";


export default function Header() {
    const [width, height] = useDeviceSize();
    const [isActive, setIsActive] = useState(false);
    const [menuSize, setMenuSize] = useState({ width: 100, height: 40 });

    useEffect(() => {

        if (width < 768) { // Adjust this value according to your design
            setMenuSize({ width: 300, height: 500 }); // Set your desired width and height for smaller screens
        } else {
            setMenuSize({ width: 480, height: 650 }); // Default width and height for larger screens
        }
    }, [width]);

    const variants = {
        open: {
            width: menuSize.width,
            height: menuSize.height,
            top: "-25px",
            right: "-25px",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
        },
        closed: {
            width: 100,
            height: 40,
            top: "0px",
            right: "0px",
            transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] }
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href={'/'}>
                    <h1 className="text-white">Automate Me</h1>
                </Link>
            </div>
            <motion.div
                className={styles.menu}

                variants={variants}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <MenuBtn isActive={isActive} setIsActive={setIsActive} />
        </header>
    )
}