import Image from "next/image";
import { SidebarItems } from "./SidebarItems";

export const Sidebar = () => {
  return (
    <div className="w-46 flex flex-col sticky">
      <div>
        <div className="mx-3">
          <Image
            src="/images/s-eye3.png"
            width="180"
            height="180"
            className="object-contain"
          />
        </div>
      </div>
      <SidebarItems />
    </div>
  );
};
