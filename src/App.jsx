import { Routes, Route } from "react-router-dom";
import { Dashboard, Home, Settings } from "./pages";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  return (
    <div className="text-white ms-[104px] font-mulish">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;
