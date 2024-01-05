import "./App.css";
import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import HomePageHeader from "./components/HeaderComponent/HomePageHeader";

function App() {
  return (
    <div className="App">
      <HomePageHeader />
      
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      
    </div>
  );
}

export default App;
