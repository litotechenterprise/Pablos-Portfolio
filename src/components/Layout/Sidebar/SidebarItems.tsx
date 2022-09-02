export const SidebarItems = () => {
  return (
    <div className="flex flex-col  items-center">
      <ul className="mt-5">
        <SidebarItem title="About" url="/" />
        <SidebarItem title="Projects" url="/" />
        <SidebarItem title="Contacts" url="/" />
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
    <div>
      <li>{title}</li>
    </div>
  );
};
