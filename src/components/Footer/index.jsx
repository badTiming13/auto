"use client"
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    const container = useRef();
    const texts = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end'],
        layoutEffect: false
    });

    useEffect(() => {
        scrollYProgress.on("change", e => {
            texts.current.forEach((text, i) => {
                if (text) {
                    text.setAttribute('startOffset', -40 + (i * 40) + (e * 40) + "%");
                }
            })
        })
    }, []);

    return (
        <div ref={container}>
            <svg className="mb-40" viewBox="0 0 250 90">
                <path id="curve" fill="none" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68" />
              
                <text className="text-[6px]  uppercase font-serif" fill="white">
                    {
                        [...Array(3)].map((_, i) => {
                            return <textPath ref={ref => texts.current[i] = ref} key={i} href="#curve" startOffset={i * 40 + "%"}>{t('letsbuild')}</textPath>
                        })
                    }
                </text>

            
            </svg>
            <Logos scrollProgress={scrollYProgress} />
        </div>
    )
}
const MemoizedFooter = React.memo(Footer);

function Logos({ scrollProgress }) {
    const y = useTransform(scrollProgress, [0, 1], [-700, 0]);
    return (
        <div className="h-[250px] overflow-hidden bg-[#4E4E5A] relative">
            <motion.div style={{ y }} className="h-full flex items-center justify-center gap-5">
                <Link href={'/'}>
                    <h1 className="text-4xl md:text-8xl text-white font-serif">Let's talk</h1>
                </Link>
            </motion.div>
            <p className="font-sans md:text-lg text-white absolute bottom-[3%] right-[3%]">©copyright</p>
        </div>
    )
}
export default MemoizedFooter;