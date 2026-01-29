import { useState } from "react";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
import type { Tab } from "./TabContent";
import NavBar from "./NavBar";
import Info from "./Info";

function Profile() {
  const [activeTab, setActiveTab] = useState<Tab>("feed");

  return (
    <>
      <NavBar />
      <Info />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent activeTab={activeTab} />
    </>
  );
}

export default Profile;
