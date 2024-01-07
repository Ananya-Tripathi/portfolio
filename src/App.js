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
    }, 1);
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
          <Skills />
          <a href="https://drive.google.com/file/d/1LRNo5HBgFUQPUOuK_6rKn-7whRVYK6rf/view?usp=drive_link">
            <p className="transition-all ease-in-out hover:cursor-pointer text-xl w-[200px] hover:w-[250px] mx-auto border-b-2 my-20 hover:font-bold font-semibold text-center border-2 py-auto ">
              RESUME
            </p>
          </a>
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
