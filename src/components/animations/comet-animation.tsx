'use client';

import { useEffect, useState } from 'react';

const CometAnimation = () => {
  const [comets, setComets] = useState<
    { id: number; style: React.CSSProperties }[]
  >([]);

  useEffect(() => {
    const createComet = () => {
      const top = Math.random() * 100;
      const animationDelay = Math.random() * 10; // Stagger the start times more
      const animationDuration = 5 + Math.random() * 5; // Duration between 5 and 10 seconds
      const transform = `rotate(${15 + Math.random() * 10}deg)`;
      return {
        id: Date.now() + Math.random(),
        style: {
          top: `${top}vh`,
          animationDelay: `${animationDelay}s`,
          transform: transform,
          animationDuration: `${animationDuration}s`,
        },
      };
    };

    const initialComets = Array.from({ length: 15 }).map(createComet);
    setComets(initialComets);

    const interval = setInterval(() => {
      setComets(prevComets => {
        const newComets = [...prevComets];
        // Remove the oldest comet
        if (newComets.length > 15) {
            newComets.shift();
        }
        // Add a new one
        newComets.push(createComet());
        return newComets;
      });
    }, 1000); // Add a new comet every second

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {comets.map(comet => (
        <div key={comet.id} className="comet" style={comet.style} />
      ))}
    </div>
  );
};

export default CometAnimation;
