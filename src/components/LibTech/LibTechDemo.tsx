import { ReactElement, useEffect, useState } from "react";
import LibTech from "./LibTech";

const LibTechDemo = (): ReactElement => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((v) => {
        const updV = v + 1;

        if (updV === 100) {
          clearInterval(timer);
        }

        return updV;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return <LibTech value={progress} />;
};

export default LibTechDemo;
