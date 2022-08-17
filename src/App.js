import './App.css';
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import GS from "./components/GS/GS"
import Form from "./components/Form/Form"
import Testimonials from "./components/Testamonials/Testamonials"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
          <Hero></Hero>
          <Services></Services>
          <GS/>
          <Testimonials/>
          <Form/>
          <Footer/>
    </div>
  );
}

export default App;
