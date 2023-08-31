import { Footer } from "./Component/Footer";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import Experience from "./Component/Experience";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // console.log(loading);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <PropagateLoader
          color="white"
          size={20}
          className="text-center mt-80 min-h-screen ease-out"
        />
      ) : (
        <div className="ease-in h-screen overflow-y-scroll">
          <About />
          <Experience />
          <Projects />
          {/* <Certifications /> */}
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
