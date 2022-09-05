import { ContentContainer } from "./Sections/ContentContainer";
import { Sidebar } from "./Sidebar/Sidebar";
import * as Scroll from "react-scroll";

export const AppContainer = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ContentContainer />
    </div>
  );
};
