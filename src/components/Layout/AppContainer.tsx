import { ContentContainer } from "./Sections/ContentContainer";
import { Sidebar } from "./Sidebar/Sidebar";

export const AppContainer = () => {
  return (
    <div className="h-screen flex ">
      <Sidebar />
      <ContentContainer />
    </div>
  );
};
