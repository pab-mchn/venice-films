import Home from "./components/Home/Home";
import Productions from "./components/Productions/Productions";
import DataProvider from "./components/context/DataContext";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productions' element={<Productions />} />
        </Routes>
      </HashRouter>
    </DataProvider>
  );
}

export default App;
