import { ReactElement, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarDemo = (): ReactElement => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((v) => {
        const updV = v + 5;

        if (updV === 100) {
          clearInterval(timer);
        }

        return updV;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return <ProgressBar value={progress} />;
};

export default ProgressBarDemo;
