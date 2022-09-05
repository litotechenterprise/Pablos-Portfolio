import classNames from "classnames";
import { motion } from "framer-motion";

type DisplayLetterProps = {
  L: string;
  addSpace?: boolean;
};

const DisplayLetter = ({ L, addSpace }: DisplayLetterProps) => {
  return (
    <motion.div
      className={classNames("text-8xl hover:text-fuchsia-600", {
        "pr-5": addSpace,
      })}
      whileHover={{ scale: 1.2 }}
    >
      {L}
    </motion.div>
  );
};

export type ListLettersProps = {
  word: string;
};

export const ListLetters = ({ word }: ListLettersProps) => {
  const wordarr = word.split("");
  let addSpaceAfter: number;
  const index = wordarr.findIndex((ele) => ele === " ");

  if (index !== -1) {
    addSpaceAfter = index - 1;
  }

  return (
    <div className="flex flex-row">
      {wordarr.map((letter: string, i) => {
        return (
          <DisplayLetter key={i} L={letter} addSpace={addSpaceAfter === i} />
        );
      })}
    </div>
  );
};
