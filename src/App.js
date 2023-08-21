import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Board from "./pages/Board/board";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
