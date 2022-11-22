import { NavBar } from "./Component/NavBar";
import { Footer } from "./Component/Footer";
import { Home } from "./Routes/Home";
import { ContactPage } from "./Routes/ContactPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EducationPage } from "./Routes/EducationPage";
function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-violet-700 to-violet-600 min-h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
