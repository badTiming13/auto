// components/ScrambleParagraph.js
import { useEffect } from 'react';

const ShuffleText = ({ children }) => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll(".scramble-paragraph");
    const solveMilliseconds = 500;
    const characterSelectionMilliseconds = 50;
    const delayMilliseconds = 50;
    const characters = children.split("");

    const randomArrayElement = (arr) => {
      return arr[(arr.length * Math.random()) | 0];
    };

    paragraphs.forEach((element) => {
      element.addEventListener("mouseenter", (e) => {
        const element = e.target;
        scrambleText(element);
      });
    });

    function scrambleText(element) {
      if (element.classList.contains("active") == false) {
        let delay = 0;
        const elementText = element.innerText;
        const elementCharacters = [...elementText];
        const lockMilliseconds =
          delayMilliseconds * elementCharacters.length + solveMilliseconds;

        element.classList.add("active");

        setTimeout(() => {
          element.classList.remove("active");
        }, lockMilliseconds);

        elementCharacters.forEach((character, index) => {
          setTimeout(
            () => {
              let intervalId = setInterval(() => {
                const randomCharacter = randomArrayElement(characters);
                element.innerText = replaceCharacter(
                  element.innerText,
                  index,
                  randomCharacter
                );

                setTimeout(() => {
                  clearInterval(intervalId);
                  element.innerText = replaceCharacter(
                    element.innerText,
                    index,
                    elementCharacters[index]
                  );
                }, solveMilliseconds);
              }, characterSelectionMilliseconds);
            },
            delay === 0 ? (delay += 1) : (delay += delayMilliseconds)
          );
        });
      }
    }

    function replaceCharacter(str, index, chr) {
      return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`;
    }

    // Clean up event listeners on component unmount
    return () => {
      paragraphs.forEach((element) => {
        element.removeEventListener("mouseenter", scrambleText);
      });
    };
  }, []); // Ensure this effect runs only once when the component mounts

  return (
    <p className="scramble-paragraph text-white text-4xl font-bold">
      {children}
    </p>
  );
};

export default ShuffleText;
