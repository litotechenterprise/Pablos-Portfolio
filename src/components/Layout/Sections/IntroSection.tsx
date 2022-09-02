import { motion } from "framer-motion";

export const IntroSection = () => {
  return (
    <div className="h-screen bg-gray-800 flex flex-1 flex-col items-center justify-center">
      <motion.div
        className="bg-yellow-600 h-56 w-56"
        whileHover={{ scale: 1.1 }}
      />
      <motion.div className="text-8xl" whileHover={{ scale: 1.1 }}>
        Hola,
      </motion.div>
      <motion.div className="text-8xl" whileHover={{ scale: 1.1 }}>
        Soy Pablo,
      </motion.div>
      <motion.div className="text-8xl" whileHover={{ scale: 1.1 }}>
        Web Engineer,
      </motion.div>
    </div>
  );
};
