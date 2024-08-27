import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/SideNavbar";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboards";
// import Dashboard from "./component/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <div className="screen_layout">
        <Sidebar />
        <div className="body_layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
