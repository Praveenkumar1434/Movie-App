
import { useState } from "react";
import {
  HashRouter,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import WatchList from "./pages/Watchlist";
import { WatchListProvider } from "./context/WatchListContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <WatchListProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />

          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        </Routes>
      </BrowserRouter>
    </WatchListProvider>
  );
}

export default App;
