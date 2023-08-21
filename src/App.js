import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Board from "./pages/Board/board";
import Metrics from "./pages/Metrics/metrics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/metrics" element={<Metrics />} />
      </Routes>
    </div>
  );
}

export default App;
