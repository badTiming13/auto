"use client";
import { useEffect } from 'react';
import styles from './main.module.css'; // Import CSS module for styling
import useDeviceSize from '@/utils/useDeviceSize';

export default function InteractiveBlocks() {
    useEffect(() => {
      
        const blockSize = 80; // Adjust the size of each block as needed
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight /1.5;
        const numCols = Math.ceil(screenWidth / blockSize);
        const numRows = Math.ceil(screenHeight / blockSize);
        const totalBlocks = numCols * numRows;
    
        const blocksContainer = document.getElementById("blocks");
        const blocks = [];
    
        // Set height of blocks container to fill viewport
        blocksContainer.style.height = `${screenHeight}px`;
    
        // Create blocks and add hover effect
        for (let i = 0; i < totalBlocks; i++) {
            const block = document.createElement("div");
            block.classList.add(styles.block);
            block.addEventListener("mouseover", () => highlightNeighbors(i, numCols, blocks));
            block.addEventListener("mouseleave", () => removeHighlightWithDelay(block, i, numCols, blocks)); // Pass index, numCols, and blocks array to removeHighlightWithDelay
            blocksContainer.appendChild(block);
            blocks.push(block);
        }
    
        // Calculate and highlight neighbors
        function highlightNeighbors(index, numCols, blocks) {
            const row = Math.floor(index / numCols);
            const col = index % numCols;
            const neighbors = [
                blocks[index], // Left
            ];
    
            // Highlight neighbors
            neighbors.forEach((neighbor) => {
                if (neighbor) {
                    neighbor.classList.add(styles.highlight);
                }
            });
        }
    
        // Remove highlight from a block and its neighbors with delay
        function removeHighlightWithDelay(block, index, numCols, blocks) {
            const row = Math.floor(index / numCols);
            const col = index % numCols;
            const neighbors = [
                blocks[index], // Left // Bottom
            ];
    
            // Remove highlight from the block
            setTimeout(() => {
                block.classList.remove(styles.highlight);
            }, 500);
    
            // Remove highlight from the neighbors
            neighbors.forEach((neighbor) => {
                if (neighbor) {
                    setTimeout(() => {
                        neighbor.classList.remove(styles.highlight);
                    }, 500);
                }
            });
        }
    
        // Cleanup function
        return () => {
            // Remove event listeners and dynamically created blocks
            blocks.forEach((block) => {
                block.removeEventListener("mouseover", highlightNeighbors);
                block.removeEventListener("mouseleave", removeHighlightWithDelay); // Change to removeHighlightWithDelay
                block.remove();
            });
        };

    }, []);

    return (
        <div className={styles.blocksContainer}>
            <div id="blocks" className={styles.myblocks}></div>
            <div className={styles.content}>
                <h1 className='text-center text-7xl font-black uppercase text-white sm:text-8xl md:text-9xl'>Our services</h1>
                <p className="mb-6 mt-4 max-w-3xl text-center text-lg font-light text-neutral-500 md:text-xl">we offer a wide range of cutting-edge services tailored to meet your every need. Join us on this journey of transformation and discover what sets us apart!</p>
                <button className="pointer-events-auto bg-indigo-400 px-4 py-2 text-xl font-bold uppercase text-neutral-950 mix-blend-difference">Contact us</button>
            </div>
        </div>
    );
}
