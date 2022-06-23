import './style/App.scss';
import Nav from "./components/Nav"
import Stars from "./components/Stars"
import Hero from "./components/Hero"
import About from "./components/About"
import Values from "./components/Values"
import Team from "./components/Team"
import Jobs from "./components/Jobs"
import Mission from "./components/Mission"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap"
// import "./style/background.scss"



function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Container className="sections-background">
      {/* <Stars/> */}
        <About />
        <Values />
        <Team />
        <Jobs />
        <Mission />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
