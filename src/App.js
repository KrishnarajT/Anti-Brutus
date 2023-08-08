import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Random from "./pages/Random";
import Master from "./pages/Master";
import Hashed from "./pages/Hashed";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/random" element={<Random />} />
          <Route path="/master" element={<Master />} />
          <Route path="/hashed" element={<Hashed />} />
        </Routes>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
