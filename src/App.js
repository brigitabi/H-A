import Footer from './components/Footer';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import Interior from './components/Interior';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Plan from './components/Plan';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Interior />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
