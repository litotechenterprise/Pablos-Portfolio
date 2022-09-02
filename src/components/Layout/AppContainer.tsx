import { MainContent } from "./Sections/MainContent";
import { Sidebar } from "./Sidebar/Sidebar";

export const AppContainer = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};
