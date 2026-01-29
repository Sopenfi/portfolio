import About from "./About";
import Contact from "./Contact";
import { Feed } from "./Feed";
import Skills from "./skills";

export type Tab = "feed" | "skills" | "about" | "contact";

interface TabContentProps {
  activeTab: Tab;
}

const TabContent = ({ activeTab }: TabContentProps) => {
  switch (activeTab) {
    case "feed":
      return (
        <div className="max-w-[800px] mx-auto">
          <Feed />
        </div>
      );
    case "skills":
      return (
        <div className="max-w-[800px] mx-auto">
          <Skills />
        </div>
      );
    case "about":
      return (
        <div className="max-w-[800px] mx-auto">
          <About />
        </div>
      );
    case "contact":
      return (
        <div className="max-w-[800px] mx-auto">
          <Contact />
        </div>
      );
    default:
      return null;
  }
};

export default TabContent;
