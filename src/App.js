import React from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import Quiz from "./Components/Quiz/Quiz"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Quiz/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
