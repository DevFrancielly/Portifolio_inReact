import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Projects from "./components/Projectss";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import { SpeedInsights } from "@vercel/speed-insights/react";


function App() {
  return (
    <div>
      <Banner/>
      <Description/>
      <Projects/>
      <Skills/>
      <Certifications/>
      <Contacts/>
      <Footer/>
      <SpeedInsights />
    </div>
  );
};

export default App
