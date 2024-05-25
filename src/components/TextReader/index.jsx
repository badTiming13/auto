"use client";
import styles from './textreader.module.css';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Textreader({ value }) {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['center 1', 'start 0.25'],
        layoutEffect: 'false'
    });

    const words = value.split(" ");

    return (
        <p
            className={styles.paragraph}
            ref={element}
        >
            {
                words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length);
                    return (
                        <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                    )
                })
            }
        </p>
    )
}

const Word = ({ children, range, progress }) => {

    const characters = children.split("");
    const amount = range[1] - range[0];
    const step = amount / children.length;
    return (
        <span className={styles.word}>
           {
            characters.map((char, i) => {
                const start = range[0] + (step * i);
                const end =  range[0] + (step * (i + 1));
               return <Character key={i} range={[start, end]} progress={progress}>{char}</Character>
            })
           }
        </span>
    )
}
const Character = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return(
        <span>
            <span className={styles.shadow}>{children}</span>
            <motion.span style={{opacity}}>{children}</motion.span>
        </span>
    )
}