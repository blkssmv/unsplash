import "./App.css";
import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import ImageDetail from "./pages/ImageDetail";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/image/:id" element={<ImageDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;
