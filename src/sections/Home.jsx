"use client"


import Hero from '@/components/Hero';
import Lenis from '@studio-freight/lenis';
import { useEffect, useRef, useState } from 'react';
import HeroSlider from '@/components/HeroSlider';
import Textreader from '@/components/TextReader';
import Footer from '@/components/Footer';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import HorizontalScroll from './HorizontalScroll';


const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."


export default function Home() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [width, setWidth] = useState(() => window.innerWidth);
    const [height, setHeight] = useState(() => window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, []);
    useEffect(() => {
        console.log("Element is in view: ", isInView)
    }, [isInView])
    return (
        <main className='overflow-x-hidden'>
            <div className='py-32 md:px-8'>

                <div className='text-white'>
                    <div className='px-2'>
                        <h1 className='font-sans'>Custom software solutions <br /> for real business problems</h1>
                    </div>
                    <div className=''>
                        <Hero />
                    </div>
                    <HeroSlider />
                    <div className='py-20 flex flex-col relative'>
                        <div className='flex items-center justify-center md:absolute '>
                            <h1 className='font-sans vertical-text text-4xl md:text-7xl font-medium text-white/20 uppercase md:font-serif'>Our approach</h1>
                        </div>
                        <div ref={ref} style={{
                            transform: isInView ? "none" : "translateX(200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }} className='flex flex-col gap-8 pl-4 pr-2 md:pl-[20%] md:pr-[10%] w-full text-white/90 font-sans pt-16'>
                            <h1 className='text-[#c9fd74]'>FYI</h1>
                            <p className='text-lg md:text-2xl font-extralight'>We offer full-cycle development services meaning a software development methodology where a development team owns the full software development lifecycle,
                                including requirements, development, testing, deployment, and operations</p>
                            <p className='text-lg md:text-2xl font-extralight'>We create, support, and automate custom solutions tailored to your needs. <br />
                                Forget WordPress or any other CMS. <br />
                                We build unique admin panels to manage content with custom functionality for each client.
                            </p>
                            <p className='text-lg md:text-2xl font-extralight'>Did it awaken an interest in you? Contact us, and we will help you bring your next big idea to life.</p>
                            <a href="#" className='text-2xl font-extralight hover:underline hover:underline-offset-4 hover:decoration-1'>Book a call</a>
                        </div>
                    </div>

                    <div className='md:h-[60vh]'></div>

                    {width > 765 &&
                        <HorizontalScroll />
                    }
                    

                    <div className='flex items-center justify-center'>
                        <div className='h-[70vh] md:h-[200vh] '></div>
                        <Textreader value={t('paragraph')} />
                        <div className='h-[20vh] md:h-[200vh]'></div>

                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='h-[70vh] md:h-[200vh] '></div>
                        <Textreader value={t('paragraph2')} />
                        <div className='h-[100vh] md:h-[200vh]'></div>

                    </div>
                    {/*<StickyCards />*/}


                    {/*Bento Grid
                    TODO: extract to separate component + fill with data
                   
                    <div className='px-32 py-16'>
                    <h1 className='py-4 text-3xl'>Tipps & tricks</h1>
                        <div className="grid auto-rows-[150px] auto-cols-[100px] grid-cols-3 gap-6">
                            {[...Array(7)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${i === 3 || i === 6 ? "col-span-2" : ""
                                        }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                     */}




                </div>

            </div>

            <Footer />
        </main>
    )
}