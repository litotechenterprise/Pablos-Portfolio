import classNames from "classnames";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

const ScrollingOptions = {
  smooth: true,
};

export const SidebarItems = () => {
  return (
    <div className="flex flex-col  items-center justify-center">
      <ul className="mt-5">
        <SidebarItem title="About" url="About" />
        <SidebarItem title="Projects" url="Work" />
        <SidebarItem title="Contacts" url="Contact" />
      </ul>
    </div>
  );
};

type SideBarItemProps = {
  title: string;
  url: string;
};

const SidebarItem = ({ url, title }: SideBarItemProps) => {
  return (
    <motion.div
      className={classNames("text-lg text-center pb-3")}
      whileHover={{ scale: 1.1 }}
      onClick={() => scroller.scrollTo(url, ScrollingOptions)}
    >
      {title}
    </motion.div>
  );
};
