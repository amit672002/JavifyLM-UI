import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainComponent";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
