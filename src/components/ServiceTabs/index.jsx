"use client";
import "./styles.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const esc = "export default function ServiceSection() {return ("

export default function ServiceTabs({ tabs }) {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    console.log(tabs[0]);
    return (
        <div className="window">
            <nav>
                <ul>
                    {tabs.map((item) => (
                        <li
                            key={item.label}
                            className={item === selectedTab ? "selected" : ""}
                            onClick={() => setSelectedTab(item)}
                        >

                            <div className="flex gap-2 items-center justify-center text-[#43bb81]">
                                <Image src={'/images/react.png'} alt="react" width={16} height={16} />
                                {`${item.label.trim()}.jsx`}
                            </div>
                            {item === selectedTab ? (
                                <motion.div className="underline" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <main style={{ fontFamily: "Consolas, 'Courier New', monospace" }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className=""
                    >

                        <p><span className="text-[#c586c0]">export default</span> <span className="text-[#2666cb]">function</span> <span className="text-[#d0dcaa]">{selectedTab.type}() {'{'}</span></p>
                        <p className="text-[#c586c0]" style={{ marginLeft: '20px' }}>return{'('}</p>
                        <p className="text-[#2666cb]" style={{ marginLeft: '40px' }}>{'<h1>'}</p>
                        <p style={{ marginLeft: '60px' }}>{selectedTab ? selectedTab.description : "😋"}</p>
                        <p className="text-[#2666cb]" style={{ marginLeft: '40px' }}>{'</h1>'}</p>
                        <p className="text-[#c586c0]" style={{ marginLeft: '20px' }}>{')'}</p>
                        <p className="text-[#d0dcaa]">{'}'}</p>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}