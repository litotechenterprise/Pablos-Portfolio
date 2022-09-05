import classNames from "classnames";
import { motion } from "framer-motion";
import { ListLetters } from "../../Lists/ListLetter";
import { Element, animateScroll } from "react-scroll";

export const IntroSection = () => {
  return (
    <Element name="Intro">
      <div className="h-screen bg-gray-800 flex flex-1 flex-col justify-center pl-8 ">
        <div className={"text-right"}>
          <ListLetters word={"Hi,"} />
          <ListLetters word={"I'm Pablo,"} />
          <ListLetters word={"Software Engineer!"} />
        </div>
        <div className="mt-10 ml-5">
          <motion.button
            whileHover={{ scale: 1.2 }}
            className={classNames(
              "border-soild border-sky-600 border-2 p-4 hover:bg-sky-500"
            )}
            onClick={() => animateScroll.scrollToBottom()}
          >
            <text>Contact Me</text>
          </motion.button>
        </div>
      </div>
    </Element>
  );
};
