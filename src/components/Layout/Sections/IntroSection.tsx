import { motion } from "framer-motion";
import { ListLetters } from "./ListLetter";

export const IntroSection = () => {
  return (
    <div className="h-screen bg-gray-800 flex flex-1 flex-col items-center justify-center">
      <motion.div
        className="bg-yellow-600 h-56 w-56"
        whileHover={{ scale: 1.1 }}
      />

      <ListLetters word={"Hola,"} />

      <div>
        <ListLetters word={"Soy Pablo,"} />
      </div>
      <ListLetters word={"Soy Pablo,"} />

      <motion.div className="text-8xl" whileHover={{ scale: 1.1 }}>
        Web Engineer,
      </motion.div>
    </div>
  );
};
