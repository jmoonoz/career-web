import './style/App.scss';
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Values from "./components/Values"
import Team from "./components/Team"
import Jobs from "./components/Jobs"
import Mission from "./components/Mission"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap"


function App() {

  return (
    <div className="App" href="/">
      <Nav />
      <Hero />
      <Container className="sections-background">
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
