import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './main.css';
import { slides } from './slides';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';




export default function HeroSlider() {
    const {t} = useTranslation();
    

    const [active, setActive] = useState(0);

    const handleSlideChange = (index) => {
        setActive(index);
    };


    return (
        <div className='w-full h-full flex items-center relative min-h-[70vh] slider-wrapper font-sans'>
           <AnimatePresence>
                <motion.div 
                    key={active} 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    <Image 
                        src={`/images/hero/${active}.jpg`}
                        fill
                        className='object-cover z-0 filter brightness-50 md:rounded-2xl'
                        alt="image"
                        priority={true}
                    />
                </motion.div>
            </AnimatePresence>
            <div className='absolute left-[4%] top-[5%]'>
                <h1 className='text-sm font-bold text-[#c9fd74] uppercase'>
                    {t('services')}
                </h1>
            </div>



            <div className='flex items-center justify-center relative z-1 w-full h-full'>
                <div className='flex column-wrapper w-full h-full items-center justify-between'>
                    {slides.map((slide, i) => (
                        <Column
                            key={i}
                            index={i}
                            title={slide.title}
                            url={slide.href}
                            active={active}
                            onHover={handleSlideChange}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

function Column({ index, title, url, active, onHover }) {
    const isActive = index === active;
    const {t} = useTranslation();
   
    return (
        <motion.div
            className='flex flex-col md:justify-center md:mx-auto w-[25%] column'
            onMouseEnter={() => onHover(index)}
        >
            <h1 className={` font-semibold transition-all duration-300 ${isActive ? 'md:-translate-y-10 md:opacity-100' : 'md:translate-y-0 md:opacity-35'}`}>{title}</h1>
            <motion.a
                href={url}
                className={`text-lg  font-medium transition-all duration-500 ${isActive ? 'md:translate-y-0 md:opacity-1' : 'md:translate-y-12 md:opacity-0'}`}
                transition={{ duration: 0.3 }}
            >
                {t('explore')}
            </motion.a>
        </motion.div>
    )
}
