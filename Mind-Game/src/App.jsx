import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Games from "./pages/Games";
import MemoryGame from "./pages/MemoryGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/memory" element={<MemoryGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;