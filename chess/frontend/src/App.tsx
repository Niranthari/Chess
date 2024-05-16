import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Landing } from "./screens/Landing";
import { Game } from "./screens/Game";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/game" element={<Game/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
