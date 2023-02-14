import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Display from "./components/Display";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:imageId" element={<Display />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
