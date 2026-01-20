import { SpeedInsights } from "@vercel/speed-insights/react";
import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Projects from "./components/Projectss";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";


function App() {
  return (
    <div>
      <SpeedInsights />
      <Banner/>
      <Description/>
      <Projects/>
      <Skills/>
      <Certifications/>
      <Contacts/>
      <Footer/>
    </div>
  );
};

export default App
