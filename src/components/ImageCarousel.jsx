import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel({ images = [], interval = 3000 }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="flex justify-center">
    
      <div className="card-transparent relative overflow-hidden w-[900px] max-w-full h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={idx}
            src={images[idx]}
            alt="slide"
            className="w-full h-full object-contain" 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
