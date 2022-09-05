import Image from "next/image";
import { SidebarItems } from "./SidebarItems";

export const Sidebar = () => {
  return (
    <aside className="w-46 h-screen flex flex-col  sticky top-0 left-0">
      <div>
        <div className="mx-3">
          <Image
            alt="logo"
            src="/images/s-eye3.png"
            width="180"
            height="180"
            className="object-contain"
          />
        </div>
      </div>
      <SidebarItems />
    </aside>
  );
};
