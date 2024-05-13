import { useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";
import PromoPage from "./components/PromoPage";

function App() {
  const [downloadLogo, setDownloadLogo] = useState(); // Renamed DownloadLogo to downloadLogo for consistency
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header downloadLogo={setDownloadLogo} /> {/* Renamed DownloadLogo to downloadLogo */}
        <div className="w-64 fixed">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>
        <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
          <div className="md:col-span-2 shadow-sm h-screen border p-5 overflow-auto">
            {selectedIndex === 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className="md:col-span-3 ">
            <LogoPreview downloadLogo={downloadLogo} /> {/* Renamed DownloadLogo to downloadLogo */}
          </div>
          <div className=""><PromoPage/></div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
