import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Planner from "./pages/Planner";
import Progress from "./pages/Progress";
import Dashboard from "./pages/Dashboard";
import { StudyProvider } from "./context/StudyContext";
import Navbar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <StudyProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Planner />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </StudyProvider>
  );
}

export default App;
