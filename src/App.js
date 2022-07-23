import Home from "./components/Home/Home";
import Productions from "./components/Productions/Productions";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productions' element={<Productions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
