import type { Tab } from "./TabContent";

interface TabsProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabClass = (tab: Tab) =>
    `cursor-pointer pb-2 ${
      activeTab === tab
        ? "border-b-2 border-blue-500 text-blue-500"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <div className="flex justify-center">
      <div className="flex w-200 bg-black border-l border-r border-b border-gray-500 p-3 ">
        <div className="flex lg:mx-20 mx-4 w-full justify-between">
          <button
            className={tabClass("feed")}
            onClick={() => setActiveTab("feed")}
          >
            Feed
          </button>
          <button
            className={tabClass("skills")}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={tabClass("about")}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            className={tabClass("contact")}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
