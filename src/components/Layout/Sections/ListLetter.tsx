import { motion } from "framer-motion";

type DisplayLetterProps = {
  L: string;
};

const DisplayLetter = ({ L }: DisplayLetterProps) => {
  console.log(L);
  return (
    <motion.div className="text-8xl" whileHover={{ scale: 1.1 }}>
      {L}
    </motion.div>
  );
};

export type ListLettersProps = {
  word: string;
};

export const ListLetters = ({ word }: ListLettersProps) => {
  return (
    <div className="flex flex-row">
      {word.split("").map((letter: string, i) => {
        return <DisplayLetter key={i} L={letter} />;
      })}
    </div>
  );
};
