import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Ticket from "./components/Ticket";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
