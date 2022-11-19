import { NavBar } from "./Component/NavBar";
import { Footer } from "./Component/Footer";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { Education } from "./Component/Education/Education";
// import { Home } from "./Routes/Home";
// import { Contact } from "./Routes/Contact";
// import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <main>
      <div className="bg-gradient-to-br from-slate-900 via-violet-700 to-violet-600 min-h-screen">
        <NavBar />
        {/* <About /> */}
        {/* <Contact /> */}
        <Education />
        <Footer />
      </div>
    </main>
  );
}

export default App;
