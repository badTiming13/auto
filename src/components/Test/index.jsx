"use client";
import { useEffect } from "react";
import Footer from "../Footer";
import Textreader from "../TextReader";
import { useTranslation } from "react-i18next";
import Lenis from '@studio-freight/lenis';

const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
const i18nNamespaces = ['home'];

export default function Test() {
    const { t } = useTranslation();

    useEffect(()=> {
        const lenis = new Lenis();
        function raf(time){
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
       }, [])
    return (
        <main>
            <main className="">
                <h1 className="text-white text-4xl">{t('home:header')}</h1>
                <h1 className="text-white text-4xl">description</h1>
                <div style={{ height: "100vh" }}></div>
                <Textreader value={paragraph} />
                <div style={{ height: "100vh" }}></div>
                <div className="bg-blue-700 h-screen w-full"></div>

                <Footer />
            </main>
        </main>
    )
}