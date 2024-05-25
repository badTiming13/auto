"use client"
import styles from './main.module.css';
import { projects } from '@/data/cards';
import Card from '../Card';
import {motion, useScroll} from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';


export default function StickyCards(){
   
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end'],
        layoutEffect: false
    });

   useEffect(()=> {
    const lenis = new Lenis();
    function raf(time){
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
   }, [])

    return(
        <main className={styles.main}>
            {
                projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i)* 0.05);
                    return <Card key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.15, 1]} targetScale={targetScale}/>
                })
            }
        </main>
    )
}