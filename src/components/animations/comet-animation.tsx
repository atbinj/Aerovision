'use client';

import { useEffect, useState } from 'react';

const CometAnimation = () => {
  const [comets, setComets] = useState<
    { id: number; style: React.CSSProperties }[]
  >([]);

  useEffect(() => {
    const createComets = () => {
      const newComets = Array.from({ length: 15 }).map((_, i) => {
        const top = Math.random() * 100;
        const animationDelay = Math.random() * 15;
        const transform = `rotate(${15 + Math.random() * 10}deg)`;
        return {
          id: i + Date.now(),
          style: {
            top: `${top}vh`,
            animationDelay: `${animationDelay}s`,
            transform: transform,
          },
        };
      });
      setComets(newComets);
    };

    createComets();
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
