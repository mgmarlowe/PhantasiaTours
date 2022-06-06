import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/HomeComponent";
import Regions from "./components/RegionsComponent";
import Tours from "./components/TourComponent";
import FAQs from "./components/FAQsComponent";
import AboutUs from "./components/AboutUsComponent";
import Blog from "./components/BlogComponent";
import RegionPage from "./pages/RegionPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/regions/:regionId" element={<RegionPage />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
