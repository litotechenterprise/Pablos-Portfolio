import Image from "next/image";
import { SidebarItems } from "./SidebarItems";

export const Sidebar = () => {
  return (
    <div className="w-48 flex flex-col fix">
      <div>
        <div className="bg-red-600">
          <Image src="/eye.png" width="180" height="180" />
        </div>
      </div>
      <SidebarItems />
    </div>
  );
};
