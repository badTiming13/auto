"use client";
import styles from './hero.module.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import useDeviceSize from '@/utils/useDeviceSize';

export default function Hero() {
    const [width, height] = useDeviceSize();
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: height,
                onUpdate: e => direction = e.direction * -1  // eslint-disable-line react-hooks/exhaustive-deps
            },
            x: "-500px",
        })
        requestAnimationFrame(animate);
    
    }, [])

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: xPercent })
        requestAnimationFrame(animate);
        xPercent += 0.03 * direction;
    }

    return (
        <main className={styles.main}>
            <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                    <p ref={firstText}>Software Development Agency -</p>
                    <p ref={secondText}>Software Development Agency -</p>
                </div>
            </div>
        </main>
    )
}