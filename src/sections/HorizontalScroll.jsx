"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useTranslation } from 'react-i18next';

export default function HorizontalScroll() {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.utils.toArray('.scroll-section').forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                toggleClass: { targets: ".scroll-section-outer", className: `bg-color-${index}`, remove: true }
            });
        });
    }, []);

    useEffect(() => {
        const slides = sectionRef.current.querySelectorAll('.scroll-section');
        const totalWidth = sectionRef.current.offsetWidth;
        const slideWidth = slides[0].offsetWidth;
        const snapPositions = Array.from(slides).map((slide, index) => index * slideWidth);
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
                backgroundColor: "red"
            },
            {
                translateX: "-300vw",
                backgroundColor: "blue",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 1,
                    pin: true,
                    onUpdate: (self) => {
                        const scrollProgress = self.progress;
                        const currentSlide = Math.round(scrollProgress * (slides.length - 1));
                        console.log("Current Slide:", (currentSlide*100) + "vw");
                        console.log(snapPositions);
                    },
                    snap: {
                        snapTo: 1 / (slides.length - 1),
                        duration: 0.5,
                       
                      },
                },
            }
        );
        
        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section className="scroll-section-outer rounded-xl ">

            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">
                    <div className="scroll-section">
                        <h3>{t('section1')}</h3>
                    </div>
                    <div className="scroll-section">
                        <h3>{t('section2')}</h3>
                    </div>
                    <div className="scroll-section">
                        <h3>{t('section3')}</h3>
                    </div>
                    <div className="scroll-section">
                        <h3>{t('section4')}</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}